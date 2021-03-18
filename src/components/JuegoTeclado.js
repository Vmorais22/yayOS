import React, {Component} from "react";

class JuegoTeclado extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    render() {

        return(
            <div>
                <h1 className="juego-teclado-title"> ¡Practica ahora! Escribe y comprueba</h1>
                <input onChange={this.handleChange} type="text" className="juego-teclado-input" />
                <h2 className="test-label">{this.state.newTask}</h2>
            </div>
        );
    }
}

export default JuegoTeclado;