import React, {Component} from 'react';
import {LessonSlider} from "./LessonSlider";
import Comentarios from "./Comentarios";

class ListOfComments extends Component {


    render() {

        return (
            <React.Fragment>
                <LessonSlider title="Estrellitas"/>
                <div className="center">
                    <div id="content">
                        <Comentarios />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ListOfComments;