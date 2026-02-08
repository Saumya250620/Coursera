// Imports React library(needed for JSX and React features)
import React from 'react'               
// Imports ReactDOM to connect React with the browser DOM
import ReactDOM from 'react-dom/client' 
// Imports the main App component
import App from './App.jsx'      
// Imports global CSS styles
import './index.css'                    

// Create a React root and tell React where to render the app
ReactDOM.createRoot(
  // Get the HTML element with id="root" from index.html
  document.getElementById('root')
  ).render(
    // StrictMode helps detect bugs and bad practices (only in development)
  <React.StrictMode>
    {/* Render the App component */}
    <App/>
  </React.StrictMode>
)