import { useState } from 'react'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
import Home from './component/Home'
import Card from './component/Card'
import About from './component/About'
import Dashboard from './component/Dashboard'
import NotFound from './component/NotFound'
import NavBar from './component/NavBar'
import './App.css'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <><NavBar></NavBar>
      <Home/></>
    },
    {
      path:'/about',
      element:<>
      <NavBar></NavBar>
      <About/></>
    },
    {
      path:'/dashboard',
      element:
      <>
      <NavBar></NavBar>
      <Dashboard/></>
    }
    ,
    {
     path:'/card',
     element:<>
     
     <Card/></> 
    },
    {
      path:'*',
      element:<NotFound/>
    }  
  ]
)

function App() {

    
  return (
    <>
     <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
