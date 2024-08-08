import React from 'react'
import Login from './Login'
import Brower from './Brower'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/browse',
            element:<Brower/>
        }
    ])
  return (
      <div>
         <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;