# Ultimate To-Do Application

A scalable and maintainable To-Do application built with React, Tailwind CSS, and React Router.

## Features
- **Task Management**: Add, Edit, and Delete tasks with ease.
- **Detailed Tasks**: Support for task titles and optional descriptions.
- **Global State**: Managed using React Context API for scalability.
- **Routing**: Seamless navigation between Home, Add, and Edit pages using React Router.
- **Persistence**: Data is persisted in `localStorage`.
- **Filtering & Search**: Quickly find tasks by status (All, Pending, Completed) or by searching titles/descriptions.
- **Responsive Design**: Premium "glassmorphism" UI using Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser to the URL displayed in the terminal.

## Project Structure
- `/src/components`: Reusable UI components (Header, ToDoItem, ToDoList).
- `/src/pages`: Main application pages (Home, AddTodo, EditTodo).
- `/src/context`: Global state management using Context API.
- `/src/utils`: Helper functions and LocalStorage logic.
- `/src/App.jsx`: Main routing configuration.
