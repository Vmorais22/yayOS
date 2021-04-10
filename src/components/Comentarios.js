import {Component} from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from "../Global";

class Comentarios extends Component {
    url = Global.url;
    state = {
        comments: [],
        status: null
    }

    componentWillMount() {
        console.log("enter");
        this.getComments(this.props.ncomments);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps && prevProps.ncomments !== this.props.ncomments)
            this.getComments(this.props.ncomments);

    }

    getComments = (all) => {
        if (all) {
            console.log("if"+this.props.ncomments)
            axios.get(this.url + "/comments").then(res => {
                this.setState({
                    comments: res.data.comments,
                    status: 'success'
                });
            });
        } else {
            console.log("else"+this.props.ncomments)
            axios.get(this.url + "/comments/last").then(res => {
                this.setState({
                    comments: res.data.comments,
                    status: 'success'
                });
            });
        }
    }
    render() {

        //this.getComments();

        if (this.state.comments.length >= 1) {

            var listComments = this.state.comments.map((c) => {
                return (
                    <div id="comentarios">
                        <h1>{c.name}</h1>
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