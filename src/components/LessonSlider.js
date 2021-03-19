import React, {Component} from "react";

class LessonSlider extends Component {

    render() {

        return(
            <div className="lessonSlider">
                <h1>
                    {this.props.title}
                </h1>
            </div>


        );
    }
}

export default LessonSlider;