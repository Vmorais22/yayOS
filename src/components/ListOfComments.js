import React, {Component} from 'react';
import {RatingSlider} from "./RatingSlider";
import Comentarios from "./Comentarios";

class ListOfComments extends Component {


    render() {

        return (
            <React.Fragment>
                <RatingSlider />
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