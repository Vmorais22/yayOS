import React, {Component} from "react";
import {withTranslation} from 'react-i18next';

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
        const {t} = this.props;
        return(
            <div>
                <h1 className="juego-teclado-title"> <span aria-label="emoji" role="img">✏️</span> {t('juegoteclado.title')} <span aria-label="emoji" role="img">✏️</span></h1>
                <h3 className="juego-teclado-subtitle"> {t('juegoteclado.sub')}</h3>
                <input onChange={this.handleChange} type="text" className="juego-teclado-input" maxLength={3000} />
                <p className="test-label">{this.state.newTask}</p>
            </div>
        );
    }
}

export default withTranslation('global')(JuegoTeclado);