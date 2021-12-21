import { useEffect, useState } from 'react'
import axios from 'axios'
import { IoAddCircleOutline } from 'react-icons/io5'
import style from './Movie.module.scss'
import { Load } from '../../components'

function Movie(props) {
   const [movie, setMovie] = useState({})
   const [load, setLoad] = useState(false)
   const [logged, setLogged] = useState(false)

   const isLogged = async () => {
      const response = await axios
         .get('auth/is-logged', {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         })
         .then((res) => setLogged(true))
         .catch((err) => setLogged(false))

      return response
   }

   const markWatched = async () => {
      await axios.patch(
         `user/watched/${localStorage.getItem('id-movie')}`,
         null,
         {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         }
      )
   }

   const getMovie = async () => {
      const id = localStorage.getItem('id-movie')
      await axios.get(`movie/${id}`).then((res) => setMovie(res.data))
      setLoad(true)
   }

   useEffect(() => {
      getMovie()
      isLogged()
   }, [])

   return load ? (
      <section className={style.movie}>
         <h2>{movie.title || ''}</h2>
         <img src={movie.poster || ''} alt={`${movie.title || ''} poster`} />

         {logged && <IoAddCircleOutline onClick={markWatched} />}

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
