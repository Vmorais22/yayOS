import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class JuegoFichero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const file = event.target.files[0]
        let fileType
        try{ fileType = file['type'];} catch (e){
             fileType = "undefined"
        }

        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            this.setState({
                file: URL.createObjectURL(file)
            })
            this.setState({error: false})
        } else {
            this.setState({error: true})
        }
    }

    render() {
        const t = this.props.t;
        return (
                <div>
                    <h1 className="juego-teclado-title"> <span aria-label="emoji" role="img">📷️</span> {t("juegoFichero.title")} <span aria-label="emoji" role="img">📷️</span></h1>
                    <h3 className="juego-teclado-subtitle"> {t("juegoFichero.sub")}</h3>
                    <input type="file" onChange={this.handleChange}/>
                    {(this.state.error) ? <h1 className="juego-teclado-title">{t("juegoFichero.error")}</h1> : (this.state.file === null) ? <h1 className="juego-teclado-title">{t("juegoFichero.wait")}</h1> :
                        <div>
                            <h1 className="juego-teclado-title">{t("juegoFichero.done")}</h1>
                            <img src={this.state.file} alt="Foto seleccionada"/>
                        </div>
                    }
                </div>
        );
    }
}

export default withTranslation("global")(JuegoFichero);