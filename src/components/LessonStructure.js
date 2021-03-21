import React, {useCallback, useState} from "react";
import Button from "@material-ui/core/Button";
import JuegoTeclado from "./JuegoTeclado";
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import {useTranslation} from "react-i18next";


export function LessonStructure({numOfButtons, contenido, lesson}) {

    const [t, i18n] = useTranslation("global")
    const [index, setIndex] = useState(0)
    const changeIndex = useCallback((v) => setIndex(v), [])

    const actualLanguage = i18n.language
    const imgESP = <img src={contenido[index].imges} alt="img"/>
    const imgCAT = <img src={contenido[index].imgcat} alt="img"/>
    const imgENG= <img src={contenido[index].imges} alt="img"/>
    const imgTEC = <div id="juego-teclado"><JuegoTeclado/></div>

    return (
        <div className="lessonStructure">
            {(index === 11 && lesson === 1) ? (imgTEC) : ((actualLanguage === "es") ? (imgESP) : (actualLanguage === "en") ? (imgENG) : (imgCAT))}
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