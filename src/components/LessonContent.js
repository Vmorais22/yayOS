import React, {Component} from "react";
import LessonSlider from "./LessonSlider";
import LessonStructure from "./LessonStructure";
import {lessonsData} from "../assets/LessonsData";


class LessonContent extends Component {

    render() {
        let n = this.props.lesson;
        return(
            <React.Fragment>
                <LessonSlider title={lessonsData[n-1].title} />
                <LessonStructure n={lessonsData[n-1].numeroBotones} contenido={lessonsData[n-1].contenido} />
            </React.Fragment>
        );
    }
}

export default LessonContent;