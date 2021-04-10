import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from "../Global";
import ReactStars from "react-rating-stars-component";
import {useTranslation} from "react-i18next";
import {LessonSlider} from "./LessonSlider";

//Validación formularios y alertas
var rateValue = 0;

class CreateComment extends Component {

    nameRef = React.createRef();
    opinionRef = React.createRef();

    state = {
        comment: {},
        status: null
    };

    changeState = () => {
        this.setState({
            comment: {
                name: this.nameRef.current.value,
                content: this.opinionRef.current.value,
                rate: rateValue
            }
        })
    }

    ratingChanged = (newRating) => {
        rateValue = newRating;
        this.changeState();
    };

    sendComment = (e) => {
        e.preventDefault();
        this.changeState();
        axios.post(Global.url + '/save', this.state.comment)
            .then(res => {
                if(res.status === 200) {this.setState({
                    comment: res.data.comment,
                    status: 'success'
                });}
                else {
                    this.setState({
                        comment: res.data.comment,
                        status: 'failed'
                    });
                    alert("Se ha producido un error. Asegurate de haber rellenado todos los campos")
                }

            });
    }

    render() {
        if (this.state.status === 'success') {
            return <Redirect to="/valoracion1"/>
        }
        return (
            <div>
                <LessonSlider title="Crear comentario"/>

                <form className="mid-form" onSubmit={this.sendComment}>
                    <div className="form-group">
                        <label htmlFor="nombre"> Nombre </label>
                        <input type="text" name="nombre"
                               placeholder="Escribe tu nombre o uno inventado..."
                               ref={this.nameRef}
                               onChange={this.changeState}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="opinion"> Opinión</label>
                        <textarea name="opinion"
                                  placeholder={"Escribe tu opinión sobre la lección: ¿Está bien redactada? ¿Hay algo que no quede claro? ¿Crees que falta información?"}
                                  ref={this.opinionRef}
                                  onChange={this.changeState}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate"> "Haz clic izquierdo en las estrellas y califica la lección"</label> <br/><br/><br/>
                        <ReactStars
                            count={5}
                            onChange={this.ratingChanged}
                            size={50}
                            activeColor="#FCCF00"
                        />,
                    </div>
                    <input className="submitButton" type="submit" value="Enviar comentario"/>
                </form>

            </div>
        );
    }
}

export default CreateComment;