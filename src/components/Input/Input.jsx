import style from './Input.module.scss'

function Input(props) {
   return (
      <>
         <div className={style.container}>
            <label htmlFor={props.id}>{props.title}</label>
            <input
               id={props.id}
               type={props.type}
               name={props.name}
               value={props.value}
               onChange={props.onChange}
               required={props.required}
            />
         </div>
      </>
   )
}

export { Input }
