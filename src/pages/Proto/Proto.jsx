import style from './Proto.module.scss'
import { GiExitDoor } from 'react-icons/gi'
import { useState } from 'react'

function Proto() {
   const token = localStorage.getItem('token')
   const [state, setState] = useState(false)

   const handleLogin = () => {
      localStorage.removeItem('token')
      setState(!state)
   }

   return (
      <section className={style.proto}>
         <h2>Página de testes</h2>
         {!!token ? <GiExitDoor onClick={handleLogin} /> : 'fazerlogin'}
      </section>
   )
}

export { Proto }
