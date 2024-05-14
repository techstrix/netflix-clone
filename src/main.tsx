import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './pages/MainUI/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/browse',
    element: <Home />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
