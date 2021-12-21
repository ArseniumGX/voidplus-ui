import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './Signin.module.scss'
import { Button, Input } from '../../components'

function Signin() {
   const [login, setLogin] = useState({})
   const navigate = useNavigate()

   const handleFields = (e) => {
      const aux = { ...login }
      aux[e.target.name] = e.target.value
      setLogin(aux)
   }

   const sendLogin = async (e) => {
      e.preventDefault()

      const call = await axios
         .post('auth/login', login)
         .then((res) => res)
         .catch((error) => error.toJSON().status)

      if (call.data) {
         localStorage.setItem('token', call.data.token)
         navigate('/profile')
      } else if (call === 401) {
         window.alert('Senha inválida!')
         setLogin({ ...login, password: '' })
      } else if (call === 404) {
         window.alert('Usuário não cadastrado!')
         setLogin({})
      } else {
         window.alert(
            'Ocorreu algum problem.\nEntre em contato relatando o ocorrido.'
         )
         setLogin({})
      }
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
