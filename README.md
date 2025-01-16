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
  ```

### **Deployment**

1. **Vercel**:
  - Import the repository into Vercel.
  - Set the Build Command to vite build.
  - Set the Output Directory to dist.
2. **Netlify**:
  - Connect the repository in Netlify.
  - Set the Build Command to vite build.
  - Set the Publish Directory to dist.
3.**GitHub Pages**:
  - Install the gh-pages package:
    ```bash
    npm install gh-pages --save-dev
    ```
  - Add the following scripts to package.json:
   ```bash
     "scripts": {
        "predeploy": "vite build",
        "deploy": "gh-pages -d dist"
      }
 ```

### **Project Structure**

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


## **Screenshots**

**Home Page**

![Screenshot 2025-01-15 at 10 31 49 PM](https://github.com/user-attachments/assets/4b548861-57bf-49ae-9db8-6543c4a073f7)
**Problem Detail**
![Screenshot 2025-01-15 at 10 32 40 PM](https://github.com/user-attachments/assets/d4b0d87e-bd26-47b6-b809-e9588e5b2dc6) 

![Screenshot 2025-01-15 at 10 32 08 PM](https://github.com/user-attachments/assets/010844ee-1344-4a02-b88a-d42e642a2c34)


## **Future Enhancements**

- 🌟 Add dark mode for better user experience.
- 🔍 Implement search and filter functionality for faster access to problems.
- 📊 Display solution statistics (e.g., time complexity, space complexity).
- 🚀 Support for additional file types like .java and .js.



## **License**

- This project is licensed under the MIT License.

## **Contact**

- For any queries or suggestions, feel free to reach out at:

- Email: manmath.jukale@example.com
- GitHub: JukaleManmath

---







