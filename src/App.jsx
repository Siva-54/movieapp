import { Routes, Route, Form } from 'react-router-dom'
import './App.css' 
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
import Login from './pages/login'


function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
