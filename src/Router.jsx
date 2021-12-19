import { Route, Routes } from 'react-router-dom'
import { Signup, Home, Movie, Signin, NotFound, About } from './pages'

function Router() {
   return (
      <>
         <Routes>
            <Route index element={<Home />} />
            <Route path="login/">
               <Route index element={<Signin />} />
               <Route path="cadastrar" element={<Signup />} />
            </Route>
            <Route path="movie">
               <Route index element={false} />
               <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="" element={<About />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   )
}

export { Router }
