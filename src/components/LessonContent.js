import React from "react";
import {LessonSlider} from "./LessonSlider";
import {lessonsData} from "../assets/LessonsData";
import {LessonStructure} from "./LessonStructure";


export function LessonContent({lesson}) {

    return (
        <React.Fragment>
            <LessonSlider title={lessonsData.find(x => x.id === lesson).title}/>
            <LessonStructure numOfButtons={lessonsData.find(x => x.id === lesson).numeroBotones}
                             content={lessonsData.find(x => x.id === lesson).contenido}
                             lesson={lesson}
                             isInteractive= {lessonsData.find(x => x.id === lesson).prueba}
                             nInteractive= {lessonsData.find(x => x.id === lesson).nprueba} />
        </React.Fragment>
    );
}
