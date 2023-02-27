import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import AppContextProvider from './context/app'
import './fonts.css' // Import the Google Fonts CSS file
import 'tailwindcss/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
