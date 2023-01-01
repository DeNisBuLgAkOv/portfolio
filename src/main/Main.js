import React from "react";

import style from "./Main.module.css"
import styleCompainer from "../common/styles/Container.module.css"

function Main() {

    return(
      
        <div className={style.mainBlock}>
             <div className={styleCompainer.container}>
                 <div className={style.text}>
                     <span>Hi</span>
                    <h1>I am DEnis Bulgakov</h1>
                    <p>Frontend Developer</p>
                 </div>
                 <div className={style.photo}></div>
            </div>
        </div> 
    )
}

export default Main