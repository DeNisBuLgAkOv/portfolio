import React from "react";
import style from "./Work.module.css"

function Work(props) {

    return(
        <div className={style.workBlock}>
            <div className={style.photo}>
                <img src=""></img>
            </div>
            <div>
                <h4 >{props.title}</h4>
                <span >{props.description}</span>
            </div>
            
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Work