import { Link } from 'react-router-dom'
import style from './Menu.module.scss'

function Menu() {
   return (
      <>
         <nav className={style.navbar}>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="login">Login</Link>
               </li>
               <li>
                  <Link to="sobre">Sobre</Link>
               </li>
            </ul>
         </nav>
      </>
   )
}

export { Menu }
