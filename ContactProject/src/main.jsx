import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Blog from './Components/Blog'
import ShowCase from './Components/ShowCase'
import Home from './Components/Home'
import Docs from './Components/Docs'

const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='docs' element={<Docs/>}/>
      <Route path='showcase' element={<ShowCase/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
