# **Leetcode Solutions Page**

Welcome to the **Leetcode Solutions Page**, a dynamic and user-friendly web application to showcase your Leetcode problem-solving journey. Built with React and Vite, this project fetches solutions directly from your GitHub repository and provides an interactive and aesthetic interface for users to explore problem statements and solutions.

---

## **Features**

- 🗂️ **Dynamic GitHub Integration**: Automatically fetches solutions and problem statements from your GitHub repository.
- 💻 **Code Display**: Syntax-highlighted code blocks for `.cpp`, `.py`, and other supported file types.
- 📖 **Markdown Rendering**: Beautifully formatted problem statements rendered from `README.md` files.
- 🖼️ **Responsive Design**: Optimized for devices of all sizes with a dynamic layout.
- 🎨 **Customizable Themes**: Background images and 3D-styled boxes for a modern look.
- 🔍 **Navigation**: Intuitive navigation with buttons for switching between code, problem statements, and the home page.

---

## **Technologies Used**

### **Frontend**:
- [React](https://reactjs.org/) - For building the UI components.
- [Vite](https://vitejs.dev/) - Lightning-fast build tool.
- [React Markdown](https://github.com/remarkjs/react-markdown) - For rendering Markdown files.
- [Prism Syntax Highlighter](https://prismjs.com/) - For code syntax highlighting.

### **Backend**:
- GitHub API - Fetches solution files and problem statements dynamically.

### **Deployment**:
- Hosted on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).

---

## **Getting Started**

### **Prerequisites**
- **Node.js** (v16 or later)
- **npm** or **yarn**
- A public GitHub repository containing your Leetcode solutions.

---

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/MJ-Leetcode-solutions.git
   cd MJ-Leetcode-solutions
2. **Install Dependencies** :
    ```bash
    npm install
    
3. **Run the Development Server**:
   ```bash
   npm run dev
4. **Build for Production**:
  ```bash
   npm run build


### **Deployment**

1. **Vercel**:
Import the repository into Vercel.
Set the Build Command to vite build.
Set the Output Directory to dist.
Netlify:
Connect the repository in Netlify.
Set the Build Command to vite build.
Set the Publish Directory to dist.
GitHub Pages:
Install the gh-pages package:
npm install gh-pages --save-dev
Add the following scripts to package.json:
"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist"
}
Deploy:
npm run deploy
Firebase Hosting:
Install the Firebase CLI:
npm install -g firebase-tools
Initialize Firebase Hosting:
firebase init hosting
Build the project:
npm run build
Deploy:
firebase deploy
Project Structure

src/
├── components/
│   ├── Navbar.jsx            # Navigation bar
│   ├── SolutionList.jsx      # Displays the list of problems
│   ├── SolutionDetail.jsx    # Renders problem statements and solutions
├── images/                   # Background images
├── services/
│   └── github.js             # GitHub API integration
├── index.css                 # Global styles
├── main.jsx                  # React entry point
vite.config.js                # Vite configuration
Screenshots

Home Page
Problem Detail
Future Enhancements

🌟 Add dark mode for better user experience.
🔍 Implement search and filter functionality for faster access to problems.
📊 Display solution statistics (e.g., time complexity, space complexity).
🚀 Support for additional file types like .java and .js.
Contributing

We welcome contributions! Here's how you can help:

Fork the repository.
Create a new branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add new feature"
Push to your branch:
git push origin feature-name
Open a pull request.
License

This project is licensed under the MIT License.

Contact

For any queries or suggestions, feel free to reach out at:

Email: manmath.jukale@example.com
GitHub: JukaleManmath

---

### **Features of this README**
- Fully formatted with proper Markdown syntax.
- Includes setup instructions, technologies, and deployment options.
- Highlights project features, structure, and future enhancements.
- Screenshots and contribution guide are placeholders—replace with actual details.

Let me know if you'd like any changes! 🚀






