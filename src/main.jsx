import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home'
import Quiz from './components/Quiz'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [{ //All this children are shown in outlet in App.js
    path: "/",
    element: <Home/>
    },
    {
      path: "/quiz",
      element: <Quiz/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
