import { IoIosRemoveCircleOutline } from 'react-icons/io'
import style from './Card.module.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Card(props) {
   const navigate = useNavigate()

   const goToMovie = () => {
      localStorage.setItem('id-movie', props.id)
      navigate('/movie')
   }

   const removeItem = async () => {
      await axios.patch(`user/unwatched/${props.id}`, null, {
         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      props.setState(!props.state)
   }

   return (
      <div className={style.card} onClick={goToMovie}>
         <h3>{props.title || ''}</h3>
         <img src={props.poster || ''} alt={`${props.title || ''}'s poster.`} />
         <span>{props.year || ''}</span>
         <IoIosRemoveCircleOutline onClick={removeItem} />
      </div>
   )
}

export { Card }
