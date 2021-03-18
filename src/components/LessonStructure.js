import React, {Component} from "react";
import img from "../assets/images/1.2.png"
import Button from "@material-ui/core/Button";
import JuegoTeclado from "./JuegoTeclado";



class LessonStructure extends Component {

    constructor(props) {
        super(props);
        this.cambiarApartado = this.cambiarApartado.bind(this);
        this.state = {
            imagenMostrada: 0
        }
    }

    cambiarApartado(n) {
        const currentState = this.state.details;
        this.setState({imagenMostrada: n});
    }

    render() {

        const counter = Array.from({length: this.props.n}, (_, index) => index + 1);

        return (
            <div className="lessonStructure">
                {(this.state.imagenMostrada < 11) ?
                    (<img src={this.props.contenido[this.state.imagenMostrada].img} alt="img"/>) :
                    (<div id="juego-teclado">
                        <JuegoTeclado />
                    </div>)}
                <aside id="sidebar">
                    {counter.map((c) => (
                        <div className="sidebar-item">
                            <Button className="lessonButton" size="large" variant="contained" color="primary"
                                    onClick={(event) => this.cambiarApartado(c - 1)}>{this.props.contenido[c - 1].textoBoton}</Button>
                        </div>
                    ))}

                </aside>

            </div>
        );
    }
}

export default LessonStructure;