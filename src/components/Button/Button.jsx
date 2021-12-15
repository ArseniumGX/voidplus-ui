import style from './button.module.scss'

function Button(props) {
   return (
      <>
         <div className={style.ctx}>
            <button onClick={props.onClick} onSubmit={props.onSubmit}>
               {props.value}
            </button>
         </div>
      </>
   )
}

export { Button }
