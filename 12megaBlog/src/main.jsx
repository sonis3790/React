import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login  } from './components/index.js'
import Addpost from "./pages/Addpost.jsx"
import Allpost from "./pages/Allpost.jsx"
import Editpost from "./pages/Editpost.jsx"
import Post from './pages/Post.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element: <App />,
      children:[
        {
          path:'/',
          element: <Home />,
        },
        {
          path:'/login',
          element:(
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          ),
        },
        {
          path:'/signup',
          element:(
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout>
          ),
        },
        {
          path:"/all-posts",
          element:(
            <AuthLayout authentication>
              {" "}
              <Allpost />
            </AuthLayout>
          ),
        },
        {
          path:"/add-post",
          element:(
            <AuthLayout authentication>
              {" "}
              <Addpost />
            </AuthLayout>
          ),
        },
        {
          path:"edit-post/:slug",
          element: (
            <AuthLayout authentication>
              {" "}
                <Editpost />
            </AuthLayout>
          ),
        },
        {
          path:'/post/:slug',
          element : <Post />
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider >
  </React.StrictMode>
)
