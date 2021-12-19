import { useState } from 'react'
import style from './Movie.module.scss'

function Movie(props) {
   const [movie, setMovie] = useState({})

   return (
      <div className={style.container}>
         <h2>{movie.title}</h2>
      </div>
   )
}

export { Movie }
