import React, {useCallback, useState} from "react";
import Global from "../Global";
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import noleft from "../assets/images/noleft.png"
import noright from "../assets/images/noright.png"
import {useTranslation} from "react-i18next";
import Magnifier from "react-magnifier";
import zoomIMG from "../assets/images/zoom.png"
import nozoomIMG from "../assets/images/nozoom.png"

let lastIndex = 0

export function LessonStructure({numOfButtons, content, lesson, isInteractive, nInteractive}) {

    /*GLOBAL VAR*/
    const [t, i18n] = useTranslation("global")
    const [index, setIndex] = useState(0)
    const changeIndex = useCallback((v) => setIndex(v), [])
    const [zoom, setZoom] = useState(false)
    const actualLanguage = i18n.language
    let elem, lastElem;

    /*JSX IMAGES FRAGMENT*/
    const imgTEC = <div id="juego-teclado"> {Global[lesson]}</div>
    const imgESP = <img className="normal-diapo" src={content[index].imges} alt="img"/>
    const imgCAT = <img className="normal-diapo" src={content[index].imgcat} alt="img"/>
    const imgENG = <img className="normal-diapo" src={content[index].imgen} alt="img"/>
    const imgESPM = <Magnifier className="mag-diapo" src={content[index].imges} width="65%" zoomFactor={0.75}
                               zoomImgSrc={content[index].imges} mgWidth={300} mgHeight={300} mgBorderWidth={7}
                               mgShape="square"/>
    const imgCATM = <Magnifier className="mag-diapo" src={content[index].imgcat} width="65%" zoomFactor={0.5}
                               zoomImgSrc={content[index].imges} mgWidth={300} mgHeight={300} mgShape="square"/>
    const imgENGM = <Magnifier className="mag-diapo" src={content[index].imgen} width="65%" zoomFactor={0.5}
                               zoomImgSrc={content[index].imges} mgWidth={300} mgHeight={300} mgShape="square"/>

    /*FUNCTIONS*/
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
    function checkDiapoLanguage() {
        if(!zoom){
            if(actualLanguage === "es") return imgESP
            else if(actualLanguage === "en") return imgENG
            else return imgCAT
        }
        else {
            if(actualLanguage === "es") return imgESPM
            else if(actualLanguage === "en") return imgENGM
            else return imgCATM
        }
    }

    return (
        <div className="all">
            <div className="lessonStructure">
                {(isInteractive && index === nInteractive - 1) ?
                    (imgTEC) : checkDiapoLanguage()
                }
                <aside id="sidebar">
                    {content.map((c, i) => (
                        <div className="sidebar-item">
                            {(isInteractive && i === nInteractive - 1) ?
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
                <br/><br/>
                <div id="panel-navegacion">
                    {(index > 0) ?
                        <img src={left} alt="left" title={t("photo-hover-title.back")}
                             onClick={(event) => update(index - 1)}/> :
                        <img src={noleft} alt="left" title={t("photo-hover-title.noback")}
                             onClick={(event) => update(index - 1)}/>
                    }
                    {(zoom) ?
                        <img src={zoomIMG} alt="auto-zoom" title={t("photo-hover-title.zoom")}
                             onClick={(event) => setZoom(!zoom)}/> :
                        <img src={nozoomIMG} alt="auto-zoom" title={t("photo-hover-title.nozoom")}
                             onClick={(event) => setZoom(!zoom)}/>}
                    {(index < (numOfButtons - 1)) ?
                        <img src={right} alt="right" title={t("photo-hover-title.next")}
                             onClick={(event) => update(index + 1)}/> :
                        <img src={noright} alt="right" title={t("photo-hover-title.nonext")}
                             onClick={(event) => update(index + 1)}/>}
                </div>
                <br/><br/>
            </div>
        </div>


    )
}