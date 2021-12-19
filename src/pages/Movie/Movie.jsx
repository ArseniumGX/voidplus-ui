import { useEffect, useState } from 'react'
import axios from 'axios'
import { Load } from '../../components'
import style from './Movie.module.scss'

function Movie(props) {
   const [movie, setMovie] = useState({})
   const [load, setLoad] = useState(false)

   const getMovie = async () => {
      const id = localStorage.getItem('id-movie')
      const response = await axios
         .get(`movie/${id}`)
         .then((res) => setMovie(res.data))
      console.log(response)
      setLoad(true)

      return
   }

   useEffect(() => {
      getMovie()
      localStorage.removeItem('id-movie')
   }, [])

   return load ? (
      <section className={style.movie}>
         <h2>{movie.title || ''}</h2>
         <img src={movie.poster || ''} alt={`${movie.title || ''} poster`} />
         <span>
            <strong>Ano: </strong>
            {movie.year || ''}
         </span>
         <span>
            <strong>Duração: </strong>
            {movie.duration || ''}
         </span>
         <span>
            <strong>Nota IMDB: </strong>
            {movie.rating || 0} / 10
         </span>

         <p>
            <strong>Sinopse: </strong>
            {movie.synopsis || ''}
         </p>
         <div className={style.movie__meta}>
            <span>Gênero(s)</span>
            <ul>
               {movie.genres &&
                  movie.genres.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
            </ul>
         </div>
         <div className={style.movie__meta}>
            <span>Elenco</span>
            <ul>
               {movie.actors &&
                  movie.actors.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
            </ul>
         </div>
         <div className={style.movie__meta}>
            <span>Produtora(s)</span>
            <ul>
               {movie.producer &&
                  movie.producer.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
            </ul>
         </div>

         <iframe
            src={movie.trailer.replace('watch?v=', 'embed/') || ''}
            title={`${movie.title} trailler`}
         ></iframe>
      </section>
   ) : (
      <Load />
   )
}

export { Movie }
