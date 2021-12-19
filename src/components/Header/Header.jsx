import { Menu } from './Menu/Menu'
import style from './Header.module.scss'
import logo from '../../assets/voidplus-logo.png'

function Header() {
   return (
      <header className={style.header}>
         <div className={style.header__logo}>
            <img src={logo} alt="Voidplus logo" />
            <h1>VoidPlus</h1>
         </div>
         <Menu />
      </header>
   )
}

export { Header }
