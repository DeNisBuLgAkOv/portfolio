import React from "react";
import style from "./Myworks.module.css"
import Work from "./work/Work";

function Myworks() {

    return(
        <div className={style.worksBloks}>
             <div className={` ${style.myworkContainer}`}>
                <h2>My work</h2>
                 <div className={style.works}>
                    <Work title ={"соц сеть "} description={"sdvsdjvshvs"}/>
                    <Work title ={"трелло "} description={"sdvsdjvshvs"}/>
                    <Work title ={"счетчик"} description={"sdvsdjvshvs"}/>
                 </div>
             </div>
        </div>
    )
}

export default Myworks
