import React, {useCallback, useEffect, useState} from "react";
import img from "../assets/images/1.2.png"
import Button from "@material-ui/core/Button";
import JuegoTeclado from "./JuegoTeclado";
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import {useTranslation} from "react-i18next";

export function LessonStructure({numOfButtons, contenido}) {

    const [t, i18n] = useTranslation("global")
    const [index, setIndex] = useState(0)
    const changeIndex = useCallback((v) => setIndex(v), [])

    //console.log(i18n.language) -> para saber el lenguaje en el que estoy y poder asi cambiar las imagenes
    return (
        <div className="lessonStructure">
            {(index < 11) ?
                (<img src={contenido[index].img} alt="img"/>) :
                (<div id="juego-teclado">
                    <JuegoTeclado/>
                </div>)}
            <aside id="sidebar">
                {contenido.map((c, i) => (
                    <div className="sidebar-item">
                        <Button className="lessonButton" size="large" variant="contained" color="primary"
                                onClick={(event) => changeIndex(i)}>{t(c.textoBoton)}</Button>
                    </div>
                ))}

            </aside>
            <div className="clearfix"/>
            <div id="panel-navegacion">
                {(index > 0) && <img src={left} alt="left" title="Anterior"
                                     onClick={(event) => changeIndex(index - 1)}/>}
                {(index < (numOfButtons - 1)) && <img src={right} alt="right" title="Siguiente"
                                                      onClick={(event) => changeIndex(index + 1)}/>}
            </div>

        </div>
    )
}