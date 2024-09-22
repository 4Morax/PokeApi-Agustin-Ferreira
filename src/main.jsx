import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage.jsx'
import { PokemonFav } from './pages/pokemonFav.jsx'
import { PokemonId } from './pages/PokemonID.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "PokemonFav",
    element: <PokemonFav />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "/pokedex/:id",
    element: <PokemonId />,
    errorElement: <ErrorPage /> 
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
