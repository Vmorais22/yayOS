import React, {Component} from "react";
import img from "../assets/images/1.1.1.png"
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

class LessonStructure extends Component {

    render() {

        return(
            <div className="lessonStructure" >
                <img src={img} alt="img" />
                    <Button className="hey" variant="contained" color="primary">¡Quiero saber más!</Button>
            </div>



        );
    }
}

export default LessonStructure;