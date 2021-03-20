import React, {Component} from "react";
import {useTranslation} from "react-i18next";

export function LessonSlider({title}) {
    const [t] = useTranslation("global")

    return (
        <div className="lessonSlider">
            <h1>
                {t(title)}
            </h1>
        </div>
    );
}