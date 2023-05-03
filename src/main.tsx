import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, BrowserRouter} from 'react-router-dom';
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)

export default root;