import React, {Component} from "react";
import {LessonSlider} from "./LessonSlider";
import {withTranslation} from "react-i18next";
import SimpleReactValidator from "simple-react-validator";
import sweetalert from "sweetalert";
import axios from "axios";
import Global from "../Global";
import {Redirect} from "react-router-dom";




class Formulario extends Component {
    name = React.createRef();
    opinion = React.createRef();
    email = React.createRef();

    state = {
        suggest: {},
        status: null,
        operative: false,
    };

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            className: "form-warning",
            messages: {
                required: 'Este campo es obligatorio.'
            }
        });
    }

    changeState = () => {
        this.setState({
            suggest: {
                name: this.name.current.value,
                content: this.opinion.current.value,
                email: this.email.current.value,
            }
        })
        this.validator.showMessages();
        this.forceUpdate();
    }

    sumbitForm = (e) => {
        e.preventDefault();
        this.changeState();
        if (this.validator.allValid()) {
            axios.post(Global.url + '/form/save', this.state.suggest)
                .then(res => {
                    if (res.status === 200) {

                        this.setState({
                            suggest: res.data.suggest,
                            status: 'success'
                        });
                        sweetalert({
                            title: "¡Gracias por tu colaboración!",
                            text: "Tu sugerencia ha llegado y será procesada",
                            icon: "success",
                        });
                    } else {
                        this.setState({
                            comment: res.data.suggest,
                            status: 'failed'
                        });

                    }

                });
        } else {
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();

        }
    }
    checkBD = () => {
        axios.get(Global.url + '/form/save').then(res => {
            if(res.status === 200) {
                this.setState({
                    operative: true
                });
            }
        })
    }

    render() {
        const t = this.props.t;
        if (this.state.status === 'success') {
            return <Redirect to="/"/>
        }
        return (
            <React.Fragment>
                <LessonSlider title={t('form.title')}/>
                <form className="mid-form" onSubmit={this.sumbitForm}>
                    <div className="form-group">
                        <label htmlFor="nombre"> {t('form.name-label')} </label>
                        <input type="text" name="nombre" placeholder={t('form.name-placeholder')} ref={this.name}
                               onChange={this.changeState}/>
                        {this.validator.message('nombre', this.state.suggest.name, 'required')}

                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> {t('Email (Opcional)')} </label>
                        <input type="text" name="email" placeholder={t('Email...')} ref={this.email}
                               onChange={this.changeState}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="opinion"> {t('form.opinion-label')}</label>
                        <textarea name="opinion" placeholder={t('form.opinion-placeholder')} ref={this.opinion}
                                  onChange={this.changeState}/>
                        {this.validator.message('opinion', this.state.suggest.content, 'required')}

                    </div>
                    <input className="submitButton" type="submit" value={t('form.submit')}/>
                    {(!this.state.operative) && <h3>Atención, BD no lista</h3>}
                </form>
            </React.Fragment>);
    }

}

export default withTranslation('global')(Formulario);
