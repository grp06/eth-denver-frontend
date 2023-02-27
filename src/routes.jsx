import * as React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Sponsor from './pages/Sponsor'
import Loading from './components/Loading'
import { useAppState } from './context/app'

function HomePage() {
  const {
    state: { loading },
  } = useAppState()
  if (loading) {
    return <Loading />
  }
  return <Home />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:sponsorName',
    element: <Sponsor />,
  },
])

export default router
