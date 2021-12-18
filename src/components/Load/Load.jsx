import roller from '../../assets/roller.png'
import style from './Load.module.scss'

function Load() {
   return (
      <div className={style.load}>
         <img className={style.load__image} src={roller} alt="Loading..." />
         <span className={style.load__text}>Carregando...</span>
      </div>
   )
}

export { Load }
