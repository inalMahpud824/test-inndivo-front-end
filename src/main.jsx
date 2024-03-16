import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyPokemonPage from './pages/MyPokemon'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPokemonPage from './pages/ListPokemon'
import DetailPage from './pages/DetailPokemon'
import AddPokemonPage from './pages/AddPokemon'


const router = createBrowserRouter([
  {
    path: '/',
    element: <ListPokemonPage />,
    
  },
  {
    path: '/my-pokemon',
    element : <MyPokemonPage />
  }, 
  {
    path: '/detail-pokemon/:id',
    element: <DetailPage />
  },
  {
    path: '/add-pokemon',
    element: <AddPokemonPage />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
