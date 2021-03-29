import React from 'react';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {LessonSlider} from "./LessonSlider";
import {useTranslation} from "react-i18next";

function checkOS(platform) {
    if (platform === "Win16" || platform ==="Win32" || platform ==="WinCE") return "Windows";
    else if (platform === "Linux i686" || platform ==="Linux armv7l") return "Linux";
    else return "Mac";
}

const SkypeLesson = () => {
    const [t] = useTranslation("global")
    return (
        <div className="center">
            <LessonSlider title="lessonContent.lesson61.title"/>
            <NavLink to={'/leccion6/inst'} style={{textDecoration: 'none'}}>
                <Button className="skypeButton" size="large" color="primary" variant="contained"
                        style={{fontSize: '50px'}}>
                    {t("lessonContent.lesson61.intro1")}
                </Button>
            </NavLink>
            <NavLink to={'/leccion6/func'} style={{textDecoration: 'none'}}>
                <Button className="skypeButton" size="large" color="secondary" variant="contained"
                        style={{fontSize: '50px'}}>
                    {t("lessonContent.lesson61.intro2")}
                </Button>
            </NavLink>
            <button className="OSButton">{t("lessonContent.lesson61.SO")+ checkOS(window.navigator.platform)}
            </button>
        </div>
    );
}

export default SkypeLesson;