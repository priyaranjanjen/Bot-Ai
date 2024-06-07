import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './pages/history/history.jsx'
import Home from './pages/home/home.jsx'

import { SnackbarProvider } from 'notistack'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "history",
        element: <History/>
      },
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <RouterProvider router={router}/>
    </SnackbarProvider>
  </React.StrictMode>,
)
