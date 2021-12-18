import { Route, Routes } from 'react-router-dom'
import { Signup, Home, Movie } from './pages'

function Router() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
      </>
   )
}

export { Router }
