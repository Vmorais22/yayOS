import React, {Component} from "react";
import LessonSlider from "./LessonSlider";
import {lessonsData} from "../assets/LessonsData";
import {LessonStructure} from "./LessonStructure";


class LessonContent extends Component {

    render() {
        let n = this.props.lesson;
        return (
            <React.Fragment>
                <LessonSlider title={lessonsData[n - 1].title}/>
                <LessonStructure numOfButtons={lessonsData[n - 1].numeroBotones}
                                 contenido={lessonsData[n - 1].contenido}/>
            </React.Fragment>
        );
    }
}

export default LessonContent;