import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utile/Firebase';
import { addUser, removeUser } from '../utile/userSlice';
import { useDispatch } from 'react-redux';


const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element:<Login/>
        },
        {
            path: '/browse',
            element:<Browse/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email ,photoURL} = user;
                dispatch(addUser({ displayName:displayName,email: email ,photoURL: photoURL}));
                
            } else {
                dispatch(removeUser());
                
            }
        });
    }, []);
  return (
      <div>
         <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;