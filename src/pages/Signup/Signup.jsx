import { useState } from 'react'
import { Input, Button } from '../../components'
import style from './Signup.module.scss'
import { Api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

function Signup() {
   const [user, setUser] = useState({})
   const navigate = useNavigate()

   const handleFields = (e) => {
      const aux = { ...user }
      aux[e.target.name] = e.target.value
      setUser(aux)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      const request = await Api.create('user', user)

      return request.status === 201
         ? navigate('/login')
         : request.status === 400
         ? window.alert('Senha deve ter no mínimo 7 caracteres.')
         : request.status === 406
         ? window.alert('Senhas não conferem!')
         : request.status === 409
         ? window.alert('Email já cadastrado!')
         : true
   }

   return (
      <section className={style.signup}>
         <h2>Cadastro de Usuário</h2>
         <form onSubmit={handleSubmit}>
            <Input
               id="nome"
               title={'Nome'}
               type={'text'}
               name={'name'}
               value={user.name || ''}
               onChange={handleFields}
               required={false}
            />
            <Input
               id="email"
               title={'Email'}
               type={'email'}
               name={'email'}
               value={user.email || ''}
               onChange={handleFields}
               required={true}
            />
            <Input
               id="password"
               title={'Senha'}
               type={'password'}
               name={'password'}
               value={user.password || ''}
               onChange={handleFields}
               required={true}
            />
            <Input
               id="repasswd"
               title={'Confirmação de senha'}
               type={'password'}
               name={'rePassword'}
               value={user.rePassword || ''}
               onChange={handleFields}
               required={true}
            />
            <Button value={'Criar'} />
         </form>
      </section>
   )
}

export { Signup }
