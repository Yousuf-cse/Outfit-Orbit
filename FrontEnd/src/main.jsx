import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/cart/Cart.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import SignUpPage from './Components/Pages/SignUpPage.jsx'
import RegisterPage from './Components/RegisterPage/RegisterPage.jsx'

const router = createBrowserRouter([
    {
      path : '/',
    element : <Layout/>,
    children : [
      {
        path: '',
        element : <Home/>
      },
      {
        path: 'cart',
        element : <Cart/>
      },
      {
        path: 'login',
        element : <LoginPage/>
      },
      {
        path: 'sign-up',
        element : <SignUpPage/>
      },
      {
        path: 'register',
        element : <RegisterPage/>
      }
    ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
