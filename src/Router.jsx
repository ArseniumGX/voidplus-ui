import { Route, Routes } from 'react-router-dom'
import { Signup, Home, Movie, Signin, NotFound, About, Proto } from './pages'

function Router() {
   return (
      <>
         <Routes>
            <Route index element={<Home />} />
            <Route path="login">
               <Route index element={<Signin />} />
               <Route path="cadastrar" element={<Signup />} />
            </Route>
            <Route path="movie" element={<Movie />} />
            <Route path="sobre" element={<About />} />
            <Route path="test" element={<Proto />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   )
}

export { Router }
