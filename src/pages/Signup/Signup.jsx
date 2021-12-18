import { useState } from 'react'
import { Input, Button } from '../../components'
import style from './signup.module.scss'
import { Api } from '../../services/api'

function Signup() {
   const [user, setUser] = useState({})

   const handleFields = (e) => {
      const aux = { ...user }
      aux[e.target.name] = e.target.value
      setUser(aux)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      await Api.create('user', user)

      setUser({})
   }

   return (
      <div className={style.ctx}>
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
      </div>
   )
}

export { Signup }
