import react, {Component} from "react";
import axios from 'axios';
import Global from "../Global";
class Comentarios extends Component {
    url = Global.url;
    state = {
        comments: [],
        status: null
    }
    componentWillMount() {
        this.getComments();
    }

    getComments = () => {
        axios.get(this.url+"/comments").then( res => {
            this.setState({
                comments: res.data.comments,
                status: 'success'
            });
        });
    }
    render() {

        if(this.state.comments.length >=1){

            var listComments = this.state.comments.map((c) => {
                return (
                    <div id="comentarios">
                        <h1>{c.name}</h1>
                        <h3>{c.content}</h3>
                        <span className="date"> {"Escrito el "+c.date}</span>

                    </div>
                );
            });

            return (
                <div>
                    {listComments}
                </div>
            );

        }
        else if(this.state.comments.length === 0 && this.state.status === 'success'){
            return (
                <div id="comentarios">
                    <h1>No hay comentarios para mostrar</h1>
                </div>
            );
        }
        else {
            return (
                <div id="comentarios">
                    <h1>Cargando...</h1>
                </div>
            );
        }
    }
}

export default Comentarios;