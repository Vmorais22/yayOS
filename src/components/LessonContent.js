import React from "react";
import {LessonSlider} from "./LessonSlider";
import {lessonsData} from "../assets/LessonsData";
import {LessonStructure} from "./LessonStructure";


export function LessonContent({lesson}) {

    return (
        <React.Fragment>
            <LessonSlider title={lessonsData[lesson - 1].title}/>
            <LessonStructure numOfButtons={lessonsData[lesson - 1].numeroBotones}
                             contenido={lessonsData[lesson - 1].contenido}/>
        </React.Fragment>
    );
}