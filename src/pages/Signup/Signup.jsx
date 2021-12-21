import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './Signup.module.scss'
import { Input, Button } from '../../components'

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

      const call = await axios
         .post('user', user)
         .then((res) => res)
         .catch((err) => err.toJSON().status)

      console.log(call)
      return call.data
         ? navigate('/login')
         : call === 400
         ? window.alert('Senha deve ter no mínimo 7 caracteres.')
         : call === 406
         ? window.alert('Senhas não conferem!')
         : call === 409
         ? window.alert('Email já cadastrado!')
         : true
   }

   return (
      <section className={style.signup}>
         <h2>Cadastro de Usuário</h2>
         <form onSubmit={handleSubmit}>
            <Input
               id="nome"
               title="Nome"
               type="text"
               name="name"
               value={user.name || ''}
               onChange={handleFields}
               required={false}
            />
            <Input
               id="avatar"
               title="Avatar"
               type="text"
               name="avatar"
               value={user.avatar || ''}
               onChange={handleFields}
               required={false}
            />
            <Input
               id="email"
               title="Email"
               type="email"
               name="email"
               value={user.email || ''}
               onChange={handleFields}
               required={true}
            />
            <Input
               id="password"
               title="Senha"
               type="password"
               name="password"
               value={user.password || ''}
               onChange={handleFields}
               required={true}
            />
            <Input
               id="repasswd"
               title="Confirmação de senha"
               type="password"
               name="rePassword"
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
