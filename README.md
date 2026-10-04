# 📝 Notes App

A simple and responsive **Notes App built with React and Tailwind CSS**. The application allows users to create notes with a title and description, display them as sticky-note cards, and delete notes when they are no longer needed.

## 🚀 Live Demo

**[View the Notes App](https://notes-app-eight-ruby-45.vercel.app/)**

## 📸 Features

* ➕ Create a new note with a title and details
* ✅ Form validation for empty fields
* 🗒️ Display notes as sticky-note cards
* 🗑️ Delete individual notes
* 📱 Responsive layout
* 🎨 Dark-themed user interface
* ✨ Glassmorphism-style form
* ⚡ Fast and lightweight React application

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **HTML5**
* **CSS3**
* **Vite**

## ⚛️ React Concepts Used

This project was built to practice and demonstrate fundamental React concepts, including:

* `useState` Hook
* Controlled form inputs
* Event handling
* Form submission
* Conditional rendering
* Rendering dynamic lists with `.map()`
* Array manipulation
* Component state management

## 🧠 How It Works

The application uses React state to manage the note form and the list of created notes.

### Adding a Note

The user enters:

1. A note title
2. Note details

When the **Add Note** button is clicked, the form validates both fields. If the fields are valid, the note is added to the notes array and displayed on the right side of the application.

### Deleting a Note

Each note contains a **Delete** button. Clicking it removes the selected note from the current notes list.

### Form Validation

The application checks whether the title and details fields are empty.

If the title is empty:

```text
Please enter a title.
```

If the details are empty:

```text
Please enter the note details.
```

## 📂 Project Structure

```text
notes-app/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── sticky-note.png
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/tahmidcode/notes-app.git
```

Navigate to the project directory:

```bash
cd notes-app
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## ⚠️ Current Limitation

Notes are currently stored only in React component state. This means that **notes will be removed when the page is refreshed or the browser is closed**.

## 🔮 Future Improvements

Some features I plan to add in future versions:

* 💾 Save notes using Local Storage
* ✏️ Edit existing notes
* 🔍 Search and filter notes
* 🏷️ Add categories or tags
* 📅 Add note creation dates
* 📌 Pin important notes
* 🌙 Add theme customization
* 📱 Further improve mobile UI

## 👨‍💻 Author

**Tahmid Hassan**

Frontend Developer focused on building modern web interfaces using **HTML, CSS, JavaScript, React, and Tailwind CSS**.

**GitHub:** [@tahmidcode](https://github.com/tahmidcode)

**Live Project:** [Notes App](https://notes-app-eight-ruby-45.vercel.app/)
