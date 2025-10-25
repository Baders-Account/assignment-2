# assignment-2

# 🌐 Bader’s Portfolio Website  

### 📋 Project Overview  
This project is a **personal portfolio website** designed and developed to showcase my projects, and contact information in a clean, modern, and responsive layout.  
It integrates a dynamic **GitHub API** section that fetches starred repositories, includes **dark/light mode**, and features a **validated contact form** built with **Bootstrap 5**.  

---

### 🛠️ Technologies Used  
- **HTML5** — Structure and content  
- **CSS3** — Custom styling and responsive layout  
- **Bootstrap 5.3** — Framework for responsive design and utilities  
- **JavaScript (ES6)** — Dynamic interactions and DOM manipulation  
- **GitHub REST API v3** — To fetch starred and topic-based repositories  

---

### ✨ Features  

#### 🌗 Theme Toggle  
- Implements a **light and dark mode** switch using JavaScript.  
- The toggle button dynamically updates colors across all components.  

#### 📂 Dynamic Projects Section  
- Fetches repositories from my GitHub profile using:  
  - `https://api.github.com/users/Baders-Account/starred` (for starred repos)  
  - `https://api.github.com/search/repositories?q=user:Baders-Account+topic:{topic}` (for filtered projects)  
- Displays project cards with titles, descriptions, and GitHub links.  
- Includes a **loading spinner** while fetching data.  

#### 📬 Contact Form  
- Built with Bootstrap’s form controls.  
- Includes JavaScript validation with inline feedback.  
- Submit button remains disabled until all fields are valid.  

#### 💡 Responsive Design  
- Fully responsive for mobile, tablet, and desktop devices.  
- Uses Bootstrap’s grid system (`col-md`, `col-lg`) for layout consistency.  

---

