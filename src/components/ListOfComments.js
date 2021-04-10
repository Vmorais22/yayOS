import React, {useCallback, useState} from 'react';
import {RatingSlider} from "./RatingSlider";
import Comentarios from "./Comentarios";

const ListOfComments = () => {

    const [showAll, setShowAll] = useState(false)

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