import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Component/Home/Home.jsx'
import Shop from './Component/Shop/Shop.jsx'
import FAQ from './Component/FAQ/FAQ.jsx'
import Contact from './Component/Contact/Contact.jsx'
import LogIn from './Component/LogIn/LogIn.jsx'
import SignUp from './Component/SignUp/SignUp.jsx'
import About from './Component/About/About.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />
      <Route path='Shop' element={<Shop />} />
      <Route path='FAQ' element={<FAQ />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='LogIn' element={<LogIn />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='About' element={<About />} />

    </Route>
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     
  </StrictMode>,
  
)
