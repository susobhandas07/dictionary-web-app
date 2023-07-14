import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContextProvider } from './contextProvider.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
