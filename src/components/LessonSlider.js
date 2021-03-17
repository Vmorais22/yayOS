import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";

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