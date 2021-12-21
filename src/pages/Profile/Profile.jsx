import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Load } from '../../components'
import { Card } from './Card/Card'
import style from './Profile.module.scss'
import image from '../../assets/default-avatar.png'

function Profile() {
   const navigate = useNavigate()
   const [load, setLoad] = useState(false)
   const [user, setUser] = useState({})
   const [watched, setwatched] = useState([])
   const [state, setState] = useState(false)
   const token = localStorage.getItem('token')

   const loadProfile = async () => {
      const call = await axios('auth/profile', {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
         .then((res) => res)
         .catch((erro) => erro)

      !call.data && navigate('/login')

      setUser(call.data)
      setLoad(true)
   }

   const loadWatched = async () => {
      await axios('user/watched/list', {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
         .then((res) => setwatched(res.data.watched))
         .catch((erro) => erro)
   }

   const logout = () => {
      localStorage.removeItem('token')
      navigate('/')
   }

   useEffect(() => {
      loadProfile()
   }, [])

   useEffect(() => {
      loadWatched()
   }, [state])

   return load ? (
      <section className={style.profile}>
         <h2>Meu Perfil</h2>
         <div className={style.profile__info} id={user.id}>
            <div className={style.profile__info__image}>
               <img src={user.avatar || image} alt={`${user.name}'s avatar`} />
            </div>
            <span>
               <strong>Nome: </strong>
               {user.name || ''}
            </span>
            <span>
               <strong>Email: </strong>
               {user.email || ''}
            </span>
            <Button value={'Logout'} onClick={logout} />
         </div>

         <div className={style.profile__favorite}>
            {watched &&
               watched.map((item, index) => (
                  <Card
                     title={item.title}
                     key={index}
                     poster={item.poster}
                     year={item.year}
                     id={item.id}
                     state={state}
                     setState={setState}
                  />
               ))}
         </div>
      </section>
   ) : (
      <Load />
   )
}

export { Profile }
