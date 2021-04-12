import React, {Component} from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from "../Global";
import StarRatings from "react-star-ratings";

class Comentarios extends Component {
    url = Global.url;
    state = {
        comments: [],
        status: null
    }

    UNSAFE_componentWillMount() {
        this.getComments(this.props.ncomments);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps && prevProps.ncomments !== this.props.ncomments)
            this.getComments(this.props.ncomments);

    }

    getComments = (all) => {
        if (all) {
            axios.get(this.url + "/comments").then(res => {
                this.setState({
                    comments: res.data.comments,
                    status: 'success'
                });
            });
        } else {
            axios.get(this.url + "/comments/last").then(res => {
                this.setState({
                    comments: res.data.comments,
                    status: 'success'
                });
            });
        }
    }

    render() {

        if (this.state.comments.length >= 1) {

            var listComments = this.state.comments.map((c) => {
                return (
                    <div key={c._id} id="comentarios">
                        <h1>{c.name}</h1>
                        <div className="commentStar">
                            <StarRatings
                                rating={c.rate}
                                starRatedColor="#FCCF00"
                                numberOfStars={5}
                                starDimension="30px"
                            />
                        </div>
                        <div className="clearfix"/>
                        <h3>{c.content}</h3>
                        <span className="date"> <Moment locale="es" fromNow>{c.date}</Moment></span>
                    </div>
                );
            });

            return (
                <div>
                    {listComments}
                </div>
            );

        } else if (this.state.comments.length === 0 && this.state.status === 'success') {
            return (
                <div id="comentarios">
                    <h1>No hay comentarios para mostrar</h1>
                </div>
            );
        } else {
            return (
                <div id="comentarios">
                    <h1>Cargando...</h1>
                </div>
            );
        }
    }
}

export default Comentarios;