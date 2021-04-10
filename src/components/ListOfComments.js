import React, {Component} from 'react';
import {RatingSlider} from "./RatingSlider";
import Comentarios from "./Comentarios";

class ListOfComments extends Component {


    render() {

    return (
        <React.Fragment>
            <RatingSlider showAllCallback={(response) => setShowAll(response)}/>
            <div className="center">
                <div id="content">
                    <Comentarios ncomments={showAll}/>
                </div>
            </div>
        </React.Fragment>
    );

}

export default ListOfComments;