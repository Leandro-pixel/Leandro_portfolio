import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import store from './utils/store.js'
import {createHashRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home'
import Dm from './routes/Dm'

const router = createHashRouter ([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Dm",
        element: <Dm/>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
