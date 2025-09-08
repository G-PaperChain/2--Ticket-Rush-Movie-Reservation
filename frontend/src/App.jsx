import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SmallSearchBar from './components/Searchbar'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <SmallSearchBar /> */}
      <MovieCard />
    </>
  )
}

export default App