import React from 'react';
import {useTranslation} from "react-i18next";
import img1 from "../assets/images/ins1.png"
import img2 from "../assets/images/ins2.JPG"
import img3 from "../assets/images/ins3.JPG"
import img4 from "../assets/images/ins4.JPG"
import img5 from "../assets/images/ins5.JPG"
import img6 from "../assets/images/ins6.png"
import img7 from "../assets/images/ins7.JPG"
import img8 from "../assets/images/ins8.JPG"
import {LessonSlider} from "./LessonSlider";

const Instrucciones = () => {

    const [t] = useTranslation("global");

    return (
        <div>
            <LessonSlider title={t("ins.title")}/>
            <br/>
            <br/>
            <div id="center" className="instruction-card">
                <img className="leftimg" src={img1} alt="ins1"/>
                <h2>{t("ins.1")}</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img2} alt="ins1"/>
                <h2>{t("ins.2")}</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="excepimgl" src={img3} alt="ins1"/>
                <h2>{t("ins.3")}</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="excepimgr" src={img4} alt="ins1"/>
                <h2>{t("ins.4")}</h2>
            </div>
            <br/>
            <br/>
            <div id="center" className="instruction-card">
                <img className="leftimg" src={img5} alt="ins1"/>
                <h2>{t("ins.5")} </h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img8} alt="ins1"/>
                <h2>{t("ins.6")}</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img6} alt="ins1"/>
                <img className="leftimg" src={img7} alt="ins1"/>
                <h2>{t("ins.7")} {<br/>}{<br/>} {t("ins.8")}</h2>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Instrucciones;