# React Flow Survey Builder

## Description
This project is a survey builder using React Flow that allows users to dynamically add question nodes, answer input nodes, and create edges between them. Users can also enter text directly into the nodes.

## Features
- Add Question Nodes
- Add Answer Nodes
- Connect Nodes with Edges
- Editable Inputs within Nodes
- Interactive Flow Diagram with Controls

## Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/react-flow-survey.git
   cd react-flow-survey
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start the Development Server:**
   ```sh
   npm start
   ```

## Project Structure
```
react-flow-survey/
│── src/
│   ├── components/
│   │   ├── FlowBuilder.js  # Main React Flow Component
│   │   ├── ui/
│   │   │   ├── Button.js   # Custom Button Component
│   ├── App.js             # Main App Component
│   ├── index.js           # Entry Point
│── public/
│── package.json          # Dependencies & Scripts
│── README.md             # Project Documentation
```

## Dependencies
- React
- React Flow

## Usage
- Click the **Add Question Node** button to create a new question node.
- Click the **Add Answer Node** button to create an input node.
- Drag nodes to reposition them.
- Connect nodes by dragging from one to another.
- Edit node text by typing inside the input fields.

