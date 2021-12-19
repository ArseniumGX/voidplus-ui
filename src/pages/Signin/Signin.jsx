import { Link } from 'react-router-dom'
import style from './Signin.module.scss'
import { Button, Input } from '../../components'
import { useState } from 'react'
import axios from 'axios'

// import { Api } from '../../services/api'

function Signin() {
   const [login, setLogin] = useState({})

   const handleFields = (e) => {
      const aux = { ...login }
      aux[e.target.name] = e.target.value
      setLogin(aux)
   }

   const sendLogin = async (e) => {
      e.preventDefault()

      await axios
         .post('auth/login', login)
         .then((res) => localStorage.setItem('token', res.data.token))

      // const request = await Api.create('auth/login', login)
      // const { token } = await request.json()
      // localStorage.setItem('token', token)

      // setLogin({})
   }

   return (
      <div className={style.login}>
         <h2 className={style.login__header}>Fazer Login</h2>
         <form className={style.login_form} onSubmit={sendLogin}>
            <Input
               id={'email'}
               title={'Email'}
               type={'email'}
               name={'email'}
               value={login.email || ''}
               onChange={handleFields}
               required={true}
            />
            <Input
               id={'password'}
               title={'Senha'}
               type={'password'}
               name={'password'}
               value={login.password || ''}
               onChange={handleFields}
               required={true}
            />
            <Button value={'Logar'} />
            <Link to="cadastrar">Cadastrar</Link>
         </form>
      </div>
   )
}

export { Signin }
