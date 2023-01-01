import React from "react";
import style from "./Form.module.css"

function Form(props) {

    return(
    <div className={style.formBlock}>
        <div className={style.container}>
            <h4 >Контакты </h4>
        
            <form className={style.form}>
                <div > <input></input></div>
                <div className={style.inp}><input></input> </div>
                <div><textarea></textarea> </div>
            </form>

               <button>Отправить</button> 
        </div>
    </div>
    )
}

export default Form

