<h1>Mobile-Friendly Todo List with React</h1>

<p>This project implements a mobile-friendly to-do list application using React. The application allows users to add, remove, and toggle the completion status of to-do items. It utilizes modern front-end technologies like Material-UI for styling and components.</p>

<h2>Features</h2>
<ul>
    <li><strong>Add Todo:</strong> Users can add new to-do items by typing into the input field and pressing enter.</li>
    <li><strong>Remove Todo:</strong> Each to-do item has a delete button, allowing users to remove unwanted items from the list.</li>
    <li><strong>Toggle Completion:</strong> Users can mark to-do items as completed or incomplete by clicking on the checkbox next to each item.</li>
    <li><strong>Persistent Data:</strong> Todo items are stored locally in the browser's <code>localStorage</code>, ensuring that the list persists across page refreshes and browser sessions.</li>
    <li><strong>Mobile Responsive:</strong> The application is designed to be responsive and optimized for mobile devices, providing a seamless user experience on various screen sizes.</li>
</ul>

<h2>Usage</h2>
<ol>
    <li>Clone the repository to your local machine.</li>
    <li>Install dependencies using <code>npm install</code>.</li>
    <li>Run the application using <code>npm start</code>.</li>
    <li>Access the todo list in your browser at <code>http://localhost:3000</code>.</li>
</ol>

<h2>Components</h2>
<ul>
    <li><strong>TodoList.jsx:</strong> This component renders the main to-do list, including the input form and list of to-do items. It handles the logic for adding, removing, and toggling todo items.</li>
    <li><strong>TodoItem.jsx:</strong> This component represents a single to-do item in the list. It displays the to-do text, a checkbox for completion status, and a delete button.</li>
    <li><strong>TodoForm.jsx:</strong> This component provides an input field for adding new to-do items to the list.</li>
</ul>

<h2>Dependencies</h2>
<ul>
    <li><strong>Material-UI:</strong> A popular React UI framework used for styling and components.</li>
    <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
    <li><strong>crypto-random-id:</strong> A library used to generate unique IDs for to-do items.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Ensure you have Node.js installed on your machine.</li>
    <li>Clone the repository: <code>git clone &lt;https://github.com/ContagionIsMe/Mobile-Friendly-React-ToDo-List&gt;</code>.</li>
    <li>Navigate to the project directory and install dependencies: <code>npm install</code>.</li>
    <li>Start the development server: <code>npm start</code>.</li>
    <li>Open your browser and visit <code>http://localhost:3000</code> to view the application.</li>
</ol>
