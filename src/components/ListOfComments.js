import React, {useState} from 'react';
import {RatingSlider} from "./RatingSlider";
import Comentarios from "./Comentarios";

const ListOfComments = ({lesson}) => {

    const [showAll, setShowAll] = useState(false)
    const [showRate, setRate] = useState(false)
    return (
        <React.Fragment>
            <RatingSlider showAllCallback={(response) => setShowAll(response)} rate={showRate} n = {lesson}/>
            <div className="center">
                <div id="content">
                    <Comentarios showAllCallback={(response) => setRate(response)} ncomments={showAll} n = {lesson}/>
                </div>
            </div>
        </React.Fragment>
    );

}

export default ListOfComments;