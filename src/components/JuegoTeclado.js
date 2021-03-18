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
                <h1 className="juego-teclado-title"> <span aria-label="emoji" role="img">✏️</span> ¡Practica ahora! Escribe y comprueba <span aria-label="emoji" role="img">✏️</span></h1>
                <input onChange={this.handleChange} type="text" className="juego-teclado-input" maxLength={419} />
                <p className="test-label">{this.state.newTask}</p>
            </div>
        );
    }
}

export default JuegoTeclado;