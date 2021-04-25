import React, {useCallback, useState} from "react";
import JuegoTeclado from "./JuegoTeclado";
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import noleft from "../assets/images/noleft.png"
import noright from "../assets/images/noright.png"
import {useTranslation} from "react-i18next";
import Magnifier from "react-magnifier";
import zoomIMG from "../assets/images/zoom.png"
import nozoomIMG from "../assets/images/nozoom.png"

let lastIndex = 0

export function LessonStructure({numOfButtons, contenido, lesson, prueba, nprueba}) {

    const [t, i18n] = useTranslation("global")
    const [index, setIndex] = useState(0)
    const changeIndex = useCallback((v) => setIndex(v), [])
    const [zoom, setZoom] = useState(false)
    const actualLanguage = i18n.language
    let elem, lastElem;

    /*IMAGES*/
    const imgTEC = <div id="juego-teclado"><JuegoTeclado/></div>
    const imgESP = <img className="normal-diapo" src={contenido[index].imges} alt="img"/>
    const imgCAT = <img className="normal-diapo" src={contenido[index].imgcat} alt="img"/>
    const imgENG = <img className="normal-diapo" src={contenido[index].imgen} alt="img"/>
    const imgESPM = <Magnifier className="mag-diapo" src={contenido[index].imges} width="65%" zoomFactor={1.25}
                               zoomImgSrc={contenido[index].imges} mgWidth={250} mgHeight={250} mgBorderWidth={7} mgShape="square"/>
    const imgCATM = <Magnifier className="mag-diapo" src={contenido[index].imgcat} width="65%" zoomFactor={1.25}
                               zoomImgSrc={contenido[index].imges} mgWidth={200} mgHeight={200} mgShape="square"/>
    const imgENGM = <Magnifier className="mag-diapo" src={contenido[index].imgen} width="65%" zoomFactor={1.25}
                               zoomImgSrc={contenido[index].imges} mgWidth={200} mgHeight={200} mgShape="square"/>


    function update(i) {
        if (i < numOfButtons && i >= 0) {
            lastElem = document.getElementById("button" + lastIndex);
            lastElem.classList.remove("ButtonFocus");
            lastIndex = i
            elem = document.getElementById("button" + i);
            changeIndex(i)
            elem.classList.add("ButtonFocus");
        }
    }

    return (
        <div className="lessonStructure">
            {!zoom ? ((index === 11 && lesson === 1) ? (imgTEC) : ((actualLanguage === "es") ? (imgESP) : (actualLanguage === "en") ? (imgENG) : (imgCAT))) :
                ((index === 11 && lesson === 1) ? (imgTEC) : ((actualLanguage === "es") ? (imgESPM) : (actualLanguage === "en") ? (imgENGM) : (imgCATM)))}
            <aside id="sidebar">
                {contenido.map((c, i) => (
                    <div className="sidebar-item">
                        {(prueba && i === nprueba - 1) ?
                            <button id={"button" + i} className="tryButton"
                                    onClick={(event) => update(i)}>{t(c.textoBoton)}</button> :
                            (i !== index) ?
                                <button id={"button" + i} className="lessonButton"
                                        onClick={(event) => update(i)}>{t(c.textoBoton)}</button> :
                                <button id={"button" + i} className="lessonButton ButtonFocus"
                                        onClick={(event) => update(i)}>{t(c.textoBoton)}</button>
                        }
                    </div>
                ))}
            </aside>
            <div className="clearfix"/>
            <div id="panel-navegacion">
                {(index > 0) ? <img src={left} alt="left" title="Anterior"
                                    onClick={(event) => update(index - 1)}/> :
                    <img src={noleft} alt="left" title="Anterior"
                         onClick={(event) => update(index - 1)}/>
                }
                {(zoom) ? <img src={zoomIMG} alt="auto-zoom" title="auto-zoom"
                               onClick={(event) => setZoom(!zoom)}/> :
                    <img src={nozoomIMG} alt="auto-zoom" title="auto-zoom"
                         onClick={(event) => setZoom(!zoom)}/>}
                {(index < (numOfButtons - 1)) ? <img src={right} alt="right" title="Siguiente"
                                                     onClick={(event) => update(index + 1)}/> :
                    <img src={noright} alt="right" title="Siguiente"
                         onClick={(event) => update(index + 1)}/>}
            </div>
        </div>

    )
}