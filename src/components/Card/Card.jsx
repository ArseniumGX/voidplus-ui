import style from './Card.module.scss'
import { useNavigate } from 'react-router-dom'

function Card(props) {
   const navigate = useNavigate()

   const goToMovie = () => {
      return navigate('/movie', { state: props.id })
   }

   return (
      <div className={style.card} onClick={goToMovie}>
         <span className={style.card__text}>{props.title}</span>
         <img
            className={style.card__image}
            src={props.poster}
            alt={`Filme $${props.title}`}
         />
      </div>
   )
}

export { Card }
