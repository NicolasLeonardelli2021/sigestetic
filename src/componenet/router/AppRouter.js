//import React from 'react'

import { useRoutes } from 'react-router-dom'
import { Home } from '../Home/Home'

export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/",  element: <Home/>}

    ])
  return (
    routes
  )
}
