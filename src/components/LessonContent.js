import React from "react";
import {LessonSlider} from "./LessonSlider";
import {lessonsData} from "../assets/LessonsData";
import {LessonStructure} from "./LessonStructure";


export function LessonContent({lesson}) {

    return (
        <React.Fragment>
            <LessonSlider title={lessonsData.find(x => x.id === lesson).title}/>
            <LessonStructure numOfButtons={lessonsData.find(x => x.id === lesson).numeroBotones}
                             contenido={lessonsData.find(x => x.id === lesson).contenido}
                             lesson={lesson}
                             prueba = {lessonsData.find(x => x.id === lesson).prueba}
                             nprueba = {lessonsData.find(x => x.id === lesson).nprueba} />
        </React.Fragment>
    );
}
