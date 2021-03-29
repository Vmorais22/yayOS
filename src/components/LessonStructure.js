import React, {useCallback, useState} from "react";
import Button from "@material-ui/core/Button";
import JuegoTeclado from "./JuegoTeclado";
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import {useTranslation} from "react-i18next";

let lastIndex = 0

export function LessonStructure({numOfButtons, contenido, lesson, prueba, nprueba}) {

    const [t, i18n] = useTranslation("global")
    const [index, setIndex] = useState(0)
    const changeIndex = useCallback((v) => setIndex(v), [])

    const actualLanguage = i18n.language
    const imgESP = <img src={contenido[index].imges} alt="img"/>
    const imgCAT = <img src={contenido[index].imgcat} alt="img"/>
    const imgENG = <img src={contenido[index].imgen} alt="img"/>
    const imgTEC = <div id="juego-teclado"><JuegoTeclado/></div>
    let elem, lastElem;

    function update(i) {
        lastElem = document.getElementById("button"+lastIndex);
        lastElem.classList.remove("ButtonFocus");
        lastIndex = i
        elem = document.getElementById("button"+i);
        changeIndex(i)
        elem.classList.add("ButtonFocus");
    }

    return (
        <div className="lessonStructure">
            {(index === 11 && lesson === 1) ? (imgTEC) : ((actualLanguage === "es") ? (imgESP) : (actualLanguage === "en") ? (imgENG) : (imgCAT))}
            <aside id="sidebar">
                {contenido.map((c, i) => (
                    <div className="sidebar-item">
                        {(prueba && i === nprueba - 1) ?
                            <button id={"button"+i} className="tryButton" onClick={(event) => update(i)}>{t(c.textoBoton)}</button> :
                            (i !== 0) ?
                            <button id={"button"+i} className="lessonButton" onClick={(event) => update(i)}>{t(c.textoBoton)}</button> :
                            <button id={"button"+i} className="lessonButton ButtonFocus" onClick={(event) => update(i)}>{t(c.textoBoton)}</button>
                        }
                    </div>
                ))}
            </aside>
            <div className="clearfix"/>
            <div id="panel-navegacion">
                {(index > 0) && <img src={left} alt="left" title="Anterior"
                                     onClick={(event) => update(index - 1)}/>}
                {(index < (numOfButtons - 1)) && <img src={right} alt="right" title="Siguiente"
                                                      onClick={(event) => update(index + 1)}/>}
            </div>
        </div>

    )
}
/*
<div id="info">Some important information!</div>

 <script>
 // Selecting element
 var elem = document.getElementById("info");

 elem.className = "note";  // Add or replace all classes with note class
 elem.className += " highlight";  // Add a new class highlight
 elem.className += " bordered padded";  // Add two new classes bordered and padded
 elem.className = ""; // Remove all classes
 </script>
 */