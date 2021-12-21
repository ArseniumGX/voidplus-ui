import { IoIosRemoveCircleOutline } from 'react-icons/io'
import style from './Card.module.scss'

function Card(props) {
   return (
      <div className={style.card}>
         <h3>{props.title || ''}</h3>
         <img src={props.poster || ''} alt={`${props.title || ''}'s poster.`} />
         <span>{props.year || ''}</span>
         <IoIosRemoveCircleOutline onClick={() => {}} />
      </div>
   )
}

export { Card }
