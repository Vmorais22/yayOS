import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from "../Global";
import ReactStars from "react-rating-stars-component";
import {useTranslation} from "react-i18next";
import {LessonSlider} from "./LessonSlider";
import SimpleReactValidator from "simple-react-validator";
import sweetalert from "sweetalert";

//Validación formularios y alertas
var rateValue = 0;

class CreateComment extends Component {

    nameRef = React.createRef();
    opinionRef = React.createRef();

    state = {
        comment: {},
        status: null,
        lesson: this.props.location.aboutProps
    };

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es obligatorio.',
                default:'Alguno de los carácteres que has escrito no están permitidos.'
            }
        });
    }

    changeState = () => {
        this.setState({
            comment: {
                name: this.nameRef.current.value,
                content: this.opinionRef.current.value,
                rate: rateValue,
                lesson: this.state.lesson.lesson
            }
        })
        this.validator.showMessages();
        this.forceUpdate();
    }

    ratingChanged = (newRating) => {
        rateValue = newRating;
        this.changeState();
    };

    sendComment = (e) => {
        e.preventDefault();
        this.changeState();
        console.log(this.state.comment)
        if(this.validator.allValid()){axios.post(Global.url + '/save', this.state.comment)
            .then(res => {
                if(res.status === 200) {this.setState({
                    comment: res.data.comment,
                    status: 'success'
                });
                    sweetalert({
                        title: "¡Felicidades!",
                        text: "Tu comentario ha sido añadido. ¡Gracias por tu ayuda!",
                        icon: "success",
                    });
                }
                else {
                    this.setState({
                        comment: res.data.comment,
                        status: 'failed'
                    });

                }

            });}
        else{
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();

        }

    }

    render() {
        if (this.state.status === 'success') {
            return <Redirect to={"/valoracion"+this.state.lesson.lesson} />
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
                        {this.validator.message('nombre', this.state.comment.name, 'required|alpha_space')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="opinion"> Opinión</label>
                        <textarea name="opinion"
                                  placeholder={"Escribe tu opinión sobre la lección: ¿Está bien redactada? ¿Hay algo que no quede claro? ¿Crees que falta información?"}
                                  ref={this.opinionRef}
                                  onChange={this.changeState}/>
                        {this.validator.message('opinion', this.state.comment.content, 'required')}
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