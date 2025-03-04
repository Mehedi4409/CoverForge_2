import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx'
import LAForm from './Templates/LeftAlign/LAForm.jsx'
import { TeacherProvider } from './Context/TeacherContext.jsx'
import Lform from './Templates/LeftAlign/Lform.jsx'
import { FormContext, FormProvider } from './Context/FormProvider.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <FormProvider><TeacherProvider><App></App></TeacherProvider></FormProvider>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>

      },
      {
        path: "/lacoverform",
        element: <Lform></Lform>
      },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>



      <RouterProvider router={router} />



  </StrictMode>,
)
