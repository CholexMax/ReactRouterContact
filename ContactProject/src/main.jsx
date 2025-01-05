import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Blog from './Components/Blog'
import ShowCase from './Components/ShowCase'
import Home from './Components/Home'
import Layout2 from './Layout/Layout2'
import TailwindCli from './Components/TailwindCli'
import PostCss from './Components/PostCss'
import Framwork from './Components/Framwork'
import Cdn from './Components/Cdn'
import Profile from './Components/Profile'

const route=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='blog' element={<Blog/>}/>
          <Route path='docs' element={<Layout2/>}>
             <Route path='installation' element={<TailwindCli/>}/>
             <Route path='postcss' element={<PostCss/>}/>
             <Route path='framework' element={<Framwork/>}/>
             <Route path='cdn' element={<Cdn/>}/>
x         </Route>
      <Route path='showcase' element={<ShowCase/>}/>
    </Route>
      <Route path='info/:userName' element={<Profile/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
