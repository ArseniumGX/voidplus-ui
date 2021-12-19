import style from './Home.module.scss'
import { Card, Load } from '../../components'
import { Api } from '../../services/api'
import { useEffect, useState } from 'react'

function Home() {
   const [movies, setMovies] = useState([])
   const [load, setLoad] = useState(false)

   const loadMovies = async () => {
      const response = await Api.readAll('movie')
      const data = await response.json()
      setMovies(data)
      setLoad(true)
      return
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
