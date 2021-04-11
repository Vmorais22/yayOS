import React, {useState} from 'react';
import {RatingSlider} from "./RatingSlider";
import Comentarios from "./Comentarios";

const ListOfComments = () => {

    const [showAll, setShowAll] = useState(false)
    const [showRate, setRate] = useState(false)

    return (
        <React.Fragment>
            <RatingSlider showAllCallback={(response) => setShowAll(response)} rate={showRate}/>
            <div className="center">
                <div id="content">
                    <Comentarios showAllCallback={(response) => setRate(response)} ncomments={showAll}/>
                </div>
            </div>
        </React.Fragment>
    );

}

export default ListOfComments;