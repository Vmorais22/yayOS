import React, {Component} from "react";
import img from "../assets/images/1.2.png"
import Button from "@material-ui/core/Button";

class LessonStructure extends Component {

    constructor(props) {
        super(props);
        this.cambiarApartado= this.cambiarApartado.bind(this);
        this.state = {
            imagenMostrada: 0
        }
    }

    cambiarApartado() {
        const currentState = this.state.details;
        this.setState({ imagenMostrada: 1 });
    }

    render() {
        const counter = this.props.n;
        return(
            <div className="lessonStructure" >
                <img src={this.props.contenido[this.state.imagenMostrada].img} alt="img" />

                <aside id="sidebar">
                    <div className="sidebar-item">
                        <Button className="lessonButton" size ="large" variant="contained" color="primary"  onClick={this.cambiarApartado}>{this.props.contenido[0].textoBoton}</Button>
                    </div>
                    <div className="sidebar-item">
                        <Button className="lessonButton" size ="large" variant="contained" color="primary"  onClick={this.cambiarApartado}>{this.props.contenido[1].textoBoton}</Button>
                    </div>
                    </aside>

            </div>



        );
    }
}

export default LessonStructure;