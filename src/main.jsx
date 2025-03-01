import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx'
import LAForm from './Templates/LeftAlign/LAForm.jsx'
import { TeacherProvider } from './Context/TeacherContext.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <TeacherProvider><App></App></TeacherProvider>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>

      },
      {
        path: "/lacoverform",
        element: <LAForm></LAForm>
      },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
