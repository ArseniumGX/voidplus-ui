import style from './Card.module.scss'
import { useNavigate } from 'react-router-dom'

function Card(props) {
   const navigate = useNavigate()

   const goToMovie = () => {
      return navigate('/movie', { state: props.id })
   }

   return (
      <div className={style.card} onClick={goToMovie}>
         <span>{props.title}</span>
         <img src={props.poster} alt={`Filme $${props.title}`} />
      </div>
   )
}

export { Card }
