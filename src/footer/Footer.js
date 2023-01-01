import React from "react";
import style from "./Footer.module.css"

function Footer(props) {

    return(
    <div className={style.footerBlock}>
        <div className={style.container}>
            <h3 className={style.h3}>Иван Иванов</h3>
            <div className={style.flex}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h3 className={style.h3}>2022 все права защищены</h3>
        </div>
    </div>
    )
}

export default Footer