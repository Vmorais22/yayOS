import React, {Component} from "react";
import LessonSlider from "./LessonSlider";
import LessonStructure from "./LessonStructure";


class Lesson1 extends Component {

    render() {

        return(
            <React.Fragment>
                <LessonSlider title="Teclado y ratón" />
                <LessonStructure></LessonStructure>
            </React.Fragment>


        );
    }
}

export default Lesson1;