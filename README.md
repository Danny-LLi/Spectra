<!--Banner-->
<img width="2000" height="600" alt="Spectra_Cover" src="https://github.com/user-attachments/assets/602a653d-03f7-4a23-96d4-777f67e0b1c8" />

<!--Spectra image-->
<div>
  <img align="right" width="40%" src="https://github.com/user-attachments/assets/37a8b677-c561-45fa-902a-b9e0f2c1d4e1">
</div>

# 🌲 Spectra - Interactive Tree Editor

**Spectra** is a powerful, feature-rich interactive tree visualization and editing tool built with **D3.js**, **Express.js**, and **Tailwind CSS**. It enables users to create, manage, and visualize hierarchical data structures with an intuitive interface, complete with drag-and-drop reordering, multi-group organization, real-time search, and persistent storage.

Whether you're organizing project structures, managing knowledge bases, or visualizing complex relationships, Spectra provides a sleek, modern interface with both **full-featured** and **demo** versions to suit your needs.

---

## 📑 Table of Contents

- [Features](#-features)
  - [Full Version Features](#full-version-features)
  - [Demo Version Features](#demo-version-features)
- [Demo Videos](#-demo-videos)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Configuration](#-configuration)
- [Technologies Used](#-technologies-used)
- [Desktop Integration](#-desktop-integration)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### **Full Version Features**

The full version of Spectra is a comprehensive tree management system with advanced capabilities:

#### 🗂️ **Multi-Group Organization**
- Create, rename, and delete **tree groups** (subdirectories)
- Organize trees into logical collections
- Switch between groups seamlessly with a dropdown selector
- Move trees between groups with intuitive dialogs

#### 🌳 **Advanced Tree Management**
- Create multiple trees within each group
- Rename and delete trees with confirmation dialogs
- Visual tree switcher with animated gradient handles
- Drag-and-drop handle for quick tree navigation
- Context menus on tree tabs for quick actions

#### 🎯 **Node Operations**
- **Add child nodes** with custom properties (name, URL, notes, code snippets)
- **Update nodes** with rich metadata support
- **Remove nodes** with safety confirmations (root node protected)
- **Move nodes** between parents with visual feedback
- **Move children** from one node to another
- **Drag-and-drop reordering** of sibling nodes
- **Color highlighting** (red, green, blue, yellow) for visual organization

#### 🔍 **Real-Time Search**
- Search across node names, URLs, and notes
- Highlighted search results with purple accent
- Click to focus and expand to any matching node
- Visual breadcrumb paths showing node hierarchy
- Persistent search results during navigation

#### 💾 **Data Persistence**
- Auto-save timestamps on every node modification
- Server-side JSON storage with group organization
- Import/Export functionality for tree data
- Unsaved changes indicator with confirmation dialogs
- Browser cache for faster loading

#### 🎨 **Rich User Interface**
- Glassmorphism design with backdrop blur effects
- Resizable context menu with saved dimensions
- Responsive layout optimized for desktop and mobile
- Toast notifications with sound effects (toggleable)
- Custom color picker for node highlighting
- Instruction panel with keyboard shortcuts

#### ⚡ **Performance Features**
- Adaptive vertical spacing (collapsed: 20px, expanded: 60px)
- Smooth D3 transitions (750ms duration)
- Efficient zoom and pan with D3 behaviors
- Node modification timestamps with relative time display
- Smart cache management for loaded trees

#### 🔐 **Security**
- Path traversal prevention with safe path validation
- Input sanitization for file and group names
- CORS support with configurable origins
- 50MB JSON payload limit for large trees

---

### **Demo Version Features**

The demo version provides a simplified but elegant introduction to Spectra's core functionality:

#### 🌿 **Basic Tree Visualization**
- Interactive D3 tree layout with expand/collapse
- Smooth animations and transitions
- Distinction between internal and leaf nodes
- Node click to toggle children visibility

#### 📋 **Node Properties Panel**
- Right-side sliding panel showing node details
- Display node name, type (internal/leaf), and size
- Visual selection with yellow accent borders
- Close button for panel dismissal

#### ✏️ **Core Editing**
- **Add new nodes** to any parent (including root fallback)
- **Rename nodes** with immediate visual updates
- **Delete nodes** (placeholder functionality)
- Node counter for unique IDs

#### 💾 **Data Persistence**
- Load tree data from server on startup
- Save changes with PUT API endpoint
- Modified indicator in status bar
- JSON file storage on server

#### 🎨 **Clean Interface**
- Dark theme with blue accents
- Header with status bar showing current tree
- Save button with Ctrl+S support
- Footer showing group/file information
- Font Awesome icons throughout

#### 🔄 **Group/File System**
- Default group with sample data structure
- API endpoints for loading specific files
- Demo data initialization on first run
- Support for multiple groups (Second_Group included)

---

## 🎬 Demo Videos

### 💎 **Full Version - Complete Feature Showcase**
Experience the **full power of Spectra** — advanced multi-group management, drag-and-drop reordering, real-time search, and comprehensive tree operations.
Perfectly optimized for **4K and HD monitors**, ensuring clarity and refinement at every pixel.

<p align="center">
<video src="https://github.com/user-attachments/assets/cddef532-8a57-4375-9abf-e689b489b0c4"
width="800"
controls
poster=""
style="border-radius:14px; box-shadow:0 0 25px rgba(0,0,0,0.45);">
Your browser does not support the video tag.
</video>
</p>

---

### 🎯 **Demo Version - Essential Features**
The demo version showcases core tree editing capabilities — intuitive node management, elegant UI, and smooth interactions in a streamlined package.
Fast, responsive, and visually stunning for quick prototyping and learning.

<p align="center">
<video src="https://github.com/user-attachments/assets/13d4339b-6f67-494a-a4c0-f65adc6dba54"
width="800"
controls
poster=""
style="border-radius:12px; box-shadow:0 0 15px rgba(0,0,0,0.35); border:1px solid #ddd;">
Your browser does not support the video tag.
</video>
</p>

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Full Version Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Danny-LLi/spectra.git
   cd spectra
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:54321
   ```
   
   Or access from other devices on your network:
   ```
   http://YOUR_LOCAL_IP:54321
   ```

### Demo Version Setup

The demo version uses the same installation process but with simplified files:

1. **Navigate to demo directory** (if separate) or use the demo `server.js` and `index.html`
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the demo server:**
   ```bash
   npm start
   ```

4. **Access at:** `http://localhost:54321`

---

## 📖 Usage

### Full Version Workflow

1. **Select a Group:** Click the group selector in the top-left to choose or create groups
2. **Choose a Tree:** Use the gradient switcher at the top-center to navigate between trees
3. **Edit Nodes:**
   - **Left-click** to expand/collapse nodes
   - **Right-click** to open the context menu
   - **Drag nodes** to reorder siblings
4. **Search:** Press `Ctrl+F` or click the search icon to find nodes
5. **Save:** Press `Ctrl+S` or click the save button (turns yellow when unsaved changes exist)

### Demo Version Workflow

1. **View the Tree:** The demo loads with sample data automatically
2. **Click Nodes:** Click any node to expand/collapse its children
3. **Add Nodes:** Click "Add Node" in the header to add children to the selected node
4. **Edit Properties:** Click a node to open the right panel, then click "Rename Node"
5. **Save:** Click "Save" or press `Ctrl+S` to persist changes

---

## 📁 Project Structure

### Full Version Structure

```
spectra/
├── server.js                 # Main Express server with full API
├── package.json              # Dependencies and scripts
├── index.html                # Full-featured UI with D3.js
├── tree-data/                # Data storage directory
│   ├── Group1/              # Example group
│   │   ├── tree1.json
│   │   └── tree2.json
│   └── Group2/
│       └── tree3.json
├── images/                   # UI assets and backgrounds
│   ├── favicon.png
│   ├── co_3qg8yh95g45hfullpath_2_3.png
│   └── co_287tg78934hgo3bfiubwfullpath_3_2.png
├── sounds/                   # Notification sounds
│   ├── 1.mp3               # Success sound
│   ├── 2.mp3               # Error sound
│   └── 3.mp3               # Info sound
└── spectra.desktop          # Linux desktop entry file
```

### Demo Version Structure

```
demo/
├── server.js                 # Simplified Express server
├── package.json              # Dependencies
├── index.html                # Streamlined UI
└── tree-data/                # Auto-generated on first run
    ├── Default_Group/
    │   └── Default_File.json
    └── Second_Group/
```

---

## 🔌 API Endpoints

### Full Version API

#### **Group Management**
- `GET /api/list-groups` - List all available groups
- `POST /api/create-group` - Create a new group
  ```json
  { "group": "NewGroupName" }
  ```
- `POST /api/rename-group` - Rename a group
  ```json
  { "oldGroup": "OldName", "newGroup": "NewName" }
  ```
- `POST /api/remove-group` - Delete a group and all its trees
  ```json
  { "group": "GroupName" }
  ```

#### **Tree Management**
- `GET /api/list-trees?group=GroupName` - List trees in a group
- `POST /api/create` - Create a new tree
  ```json
  { "filename": "TreeName", "group": "GroupName" }
  ```
- `POST /api/rename` - Rename a tree
  ```json
  { "oldFilename": "OldName", "newFilename": "NewName", "group": "GroupName" }
  ```
- `POST /api/remove` - Delete a tree
  ```json
  { "filename": "TreeName", "group": "GroupName" }
  ```
- `POST /api/move-tree` - Move tree between groups
  ```json
  { "filename": "TreeName", "sourceGroup": "Group1", "targetGroup": "Group2" }
  ```

#### **Data Operations**
- `GET /api/load?group=GroupName&file=TreeName.json` - Load tree data
- `POST /api/save` - Save tree data
  ```json
  { "filename": "TreeName", "group": "GroupName", "data": {...} }
  ```

#### **Static Files**
- `GET /images/*` - Serve image assets
- `GET /sounds/*` - Serve audio files

---

### Demo Version API

- `GET /api/available-groups` - List all groups with metadata
- `GET /api/load?group=GroupName&file=FileName.json` - Load tree data
- `PUT /api/save` - Save tree data
  ```json
  { "group": "GroupName", "file": "FileName.json", "treeData": {...} }
  ```

---

## ⌨️ Keyboard Shortcuts

### Full Version Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save current tree |
| `Ctrl + Q` | Switch to previous tree |
| `Ctrl + E` | Switch to next tree |
| `Ctrl + F` | Open search modal |
| `Esc` | Close search modal / Cancel operations |
| `Left Click` | Expand/collapse node or open URL |
| `Right Click` | Open node context menu |
| `Long Press` (700ms) | Open context menu on mobile |

### Demo Version Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save tree data |
| `Left Click` | Toggle node expansion |

---

## ⚙️ Configuration

### Port Configuration

Both versions run on port **54321** by default. To change:

```javascript
// In server.js
const PORT = 54321; // Change to your preferred port
```

### Data Directory

**Full Version:**
```javascript
const DATA_DIR = path.join(__dirname, 'tree-data');
```

**Demo Version:**
```javascript
const DATA_DIR = path.join(__dirname, 'tree-data');
```

### CORS Settings

Adjust CORS in `server.js`:
```javascript
app.use(cors()); // Allow all origins (development)

// Or restrict to specific origins:
app.use(cors({
  origin: 'http://yourdomain.com'
}));
```

### JSON Payload Limit

**Full Version:**
```javascript
app.use(express.json({ limit: '50mb' }));
```

---

## 🛠️ Technologies Used

### Frontend
- **D3.js** - Data visualization and tree layout (v3.3.11 for full, v7 for demo)
- **Tailwind CSS** - Utility-first styling framework
- **Font Awesome** - Icon library (v6.0.0-beta3)
- **Vanilla JavaScript** - Core functionality and event handling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web server framework (v5.1.0)
- **CORS** - Cross-origin resource sharing (v2.8.5)
- **fs/promises** - File system operations with async/await

### Design Patterns
- **MVC Architecture** - Separation of concerns
- **RESTful API** - Standard HTTP methods for operations
- **Event-driven** - D3 behaviors and DOM event listeners
- **Caching Strategy** - In-memory tree data cache

---

## 🖥️ Desktop Integration

### Linux Desktop Entry

Spectra includes a `.desktop` file for Linux systems:

```desktop
[Desktop Entry]
Version=1.0
Type=Application
Name=Spectra
Exec=/usr/bin/mine/spectra/spectra.sh
Icon=/home/USERNAME/.local/share/icons/Spectra.png
Terminal=false
Categories=Utility;
StartupNotify=true
```

### Installation Steps:

1. **Create launch script** (`spectra.sh`):
   ```bash
   #!/bin/bash
   cd /path/to/spectra
   npm start
   ```

2. **Make executable:**
   ```bash
   chmod +x spectra.sh
   ```

3. **Copy desktop file:**
   ```bash
   cp spectra.desktop ~/.local/share/applications/
   ```

4. **Add icon:**
   ```bash
   cp icon.png ~/.local/share/icons/Spectra.png
   ```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation for new features
- Ensure backward compatibility when possible

---
## 📄 License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  
You’re free to use, modify, and redistribute this project under the same license terms.  
See the [LICENSE](./LICENSE) file for full details.

---

## 🙏 Acknowledgments

- **D3.js Community** - For the powerful visualization library
- **Tailwind CSS** - For the elegant utility framework
- **Express.js** - For the robust server framework
- **Font Awesome** - For the comprehensive icon set

---

## 📧 Contact

For questions, issues, or suggestions:

- **GitHub Issues:** [Create an issue](https://github.com/Danny-LLi/Spectra/issues)

---

<div align="center">

**Crafted with passion, precision, and plenty of caffeine ☕ — by Danny**

⭐ **Star this repo if you find it useful!** ⭐

</div>
