import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Home.module.scss'
import { Card, Load } from '../../components'

function Home() {
   const [movies, setMovies] = useState([])
   const [load, setLoad] = useState(false)

   const loadMovies = async () => {
      await axios.get('movie').then((res) => setMovies(res.data))
      setLoad(true)
   }

   useEffect(() => {
      loadMovies()
   }, [])

   return load ? (
      <div className={style.container}>
         {movies.map((item, index) => (
            <Card
               title={item.title}
               poster={item.poster}
               id={item.id}
               key={index}
            />
         ))}
      </div>
   ) : (
      <Load />
   )
}

export { Home }
