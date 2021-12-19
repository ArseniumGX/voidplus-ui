import style from './Notfound.module.scss'
import notFound from '../../assets/notFound.png'

function NotFound() {
   return (
      <section className={style.notFound}>
         <p>Opss... Página não encontrada!</p>
         <span>
            Você está tentando acessar uma página que não está disponível. Favor
            verifique a URL passada ou entre em contato com o dev para comunicar
            anomalias.
         </span>
         <img src={notFound} alt="Imagem página não encontrada" />
      </section>
   )
}

export { NotFound }
