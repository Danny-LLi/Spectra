// server.js (Sophisticated Demo - ~80 lines)

const express = require('express');
const fs = require('fs').promises; // Use promises for async/await
const path = require('path');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = 54321;
const DATA_DIR = path.join(__dirname, 'tree-data');

// --- Middleware & Config ---
app.use(cors());
app.use(express.json()); // CRITICAL: For handling POST/PUT requests
app.use(express.static(__dirname)); // Serve static files (like index.html)

// --- Utility Functions ---

/**
 * Checks if a string is a valid file or directory name (safe from traversal).
 */
function isValidName(name) {
    if (!name || name === '..' || name.includes('/') || name.includes('\\')) {
        return false;
    }
    return true;
}

/**
 * Constructs a safe absolute path to a file, preventing directory traversal.
 */
function getSafePath(group, file) {
    if (!isValidName(group) || !isValidName(file)) {
        throw new Error('Invalid group or file name. Path traversal detected.');
    }
    // Ensures the path is inside the DATA_DIR and returns the absolute path
    return path.join(DATA_DIR, group, file);
}

/**
 * Creates the necessary dummy data directories and files for the demo.
 */
async function initializeDemoData() {
    const defaultData = {
        name: "Sophisticated_Root",
        children: [
            { 
                name: "Analytics Group", 
                children: [
                    { name: "Cluster_Analysis", size: 5200 },
                    { name: "Data_Mining", size: 3812 },
                    { name: "Graph_Theory", size: 7100, children: [
                        { name: "LinkDistance", size: 5731 },
                        { name: "ForceDirected", size: 9000 }
                    ]}
                ]
            },
            { 
                name: "Visualization Group", 
                children: [
                    { name: "TreeMap_Layout", size: 4500 },
                    { name: "PackedCircle_View", size: 6800 }
                ]
            }
        ]
    };
    
    // Create the main data directory
    await fs.mkdir(DATA_DIR, { recursive: true });
    
    // Create a group directory and a default file
    const groupPath = path.join(DATA_DIR, 'Default_Group');
    await fs.mkdir(groupPath, { recursive: true });

    const filePath = path.join(groupPath, 'Default_File.json');
    
    // Check if file already exists before writing
    try {
        await fs.access(filePath);
        console.log(`File ${filePath} already exists. Skipping dummy data creation.`);
    } catch (error) {
        // File doesn't exist, write it
        console.log(`Creating dummy file at: ${filePath}`);
        await fs.writeFile(filePath, JSON.stringify(defaultData, null, 2), 'utf8');
    }

    // Create a second group
    await fs.mkdir(path.join(DATA_DIR, 'Second_Group'), { recursive: true });
}


// --- API Endpoints ---

/**
 * Provides a list of available groups (directories).
 */
app.get('/api/available-groups', async (req, res) => {
    try {
        const entries = await fs.readdir(DATA_DIR, { withFileTypes: true });
        const groups = entries
            .filter(dirent => dirent.isDirectory())
            .map(dirent => ({ 
                name: dirent.name, 
                files: [] // Files will be loaded on demand by the client
            }));
        res.status(200).json(groups);
    } catch (error) {
        // If the directory doesn't exist, try initializing and then return empty
        if (error.code === 'ENOENT') {
             await initializeDemoData();
             return res.status(200).json([{ name: 'Default_Group', files: [] }, { name: 'Second_Group', files: [] }]);
        }
        console.error('Error fetching groups:', error);
        res.status(500).json([]);
    }
});

/**
 * Loads the content of a specific file from a specific group.
 */
app.get('/api/load', async (req, res) => {
    const { file, group } = req.query;
    
    // Fallback to the default file if not specified
    if (!file || !group) {
        const defaultPath = getSafePath('Default_Group', 'Default_File.json');
        try {
            const data = await fs.readFile(defaultPath, 'utf8');
            return res.status(200).json(JSON.parse(data));
        } catch (e) {
            return res.status(400).json({ name: "Error", children: [{ name: "No file or group specified, and default file failed to load." }] });
        }
    }

    try {
        const filePath = getSafePath(group, file);
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Data successfully loaded from', filePath);
        res.status(200).json(JSON.parse(data));
    } catch (error) {
        console.error('Failed to load file. Sending default data.', error);
        res.status(200).json({ name: "Load_Error", children: [{ name: `File ${file} in group ${group} not found on server.` }] });
    }
});

/**
 * Saves the tree data to a specific file within a specific group.
 * CRITICAL FIX: This now writes to the file system to ensure persistence.
 */
app.put('/api/save', async (req, res) => {
    const { file, group, treeData } = req.body;

    if (!file || !group || !treeData) {
        return res.status(400).json({ success: false, message: "Missing file, group, or treeData in request body." });
    }

    try {
        const filePath = getSafePath(group, file);

        // Ensure the directory exists (important if the client supports creating new groups/files)
        const dirPath = path.dirname(filePath);
        await fs.mkdir(dirPath, { recursive: true });

        // Write the JSON data to the file, using 4 spaces for pretty-printing
        await fs.writeFile(filePath, JSON.stringify(treeData, null, 4), 'utf8');

        console.log('Data successfully saved to', filePath);
        res.status(200).json({ success: true, message: `Tree data for ${group}/${file} saved successfully.` });

    } catch (error) {
        console.error('Failed to save file:', error);
        // Catch path traversal or file system errors
        res.status(500).json({ success: false, message: "Server failed to write file to disk. Check server console for details." });
    }
});


// --- Server Start ---

initializeDemoData().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`\n======================================================`);
        console.log(`✅ Sophisticated Demo Server is running!`);
        console.log(`-> Access the UI at: http://localhost:${PORT}`);
        console.log(`-> API Port: ${PORT}`);
        console.log(`-> Data Dir: ${DATA_DIR}`);
        console.log(`======================================================\n`);
    });
}).catch(err => {
    console.error('Failed to initialize demo data and start server:', err);
});