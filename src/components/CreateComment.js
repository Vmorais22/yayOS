import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from "../Global";
import ReactStars from "react-rating-stars-component";
import {withTranslation} from "react-i18next";
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
            className: "form-warning",
            messages: {
                required: this.props.t('create-comment-form.required'),
                default: this.props.t('create-comment-form.default')
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
        if (this.validator.allValid()) {
            axios.post(Global.url + '/save', this.state.comment)
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            comment: res.data.comment,
                            status: 'success'
                        });
                        sweetalert({
                            title: this.props.t('create-comment-form.swal.1'),
                            text: this.props.t('create-comment-form.swal.2'),
                            icon: "success",
                        });
                    } else {
                        this.setState({
                            comment: res.data.comment,
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

    render() {
        const t = this.props.t;
        if (this.state.status === 'success') {
            return <Redirect to={"/valoracion" + this.state.lesson.lesson}/>
        }
        return (
            <div className="all">
                <LessonSlider title={t('create-comment-form.title')}/>

                <form className="mid-form" onSubmit={this.sendComment}>
                    <div className="form-group">
                        <label htmlFor="nombre"> {t('create-comment-form.nombre')} </label>
                        <input type="text" name="nombre"
                               placeholder={t('create-comment-form.nombre-placeholder')}
                               ref={this.nameRef}
                               onChange={this.changeState}/>
                        {this.validator.message('nombre', this.state.comment.name, 'required')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="opinion"> {t('create-comment-form.opinion')}</label>
                        <textarea name="opinion"
                                  placeholder={t('create-comment-form.opinion-placeholder')}
                                  ref={this.opinionRef}
                                  onChange={this.changeState}/>
                        {this.validator.message('opinion', this.state.comment.content, 'required')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate"> {t('create-comment-form.rate')}</label> <br/><br/><br/>
                        <ReactStars
                            count={5}
                            value={0}
                            onChange={this.ratingChanged}
                            size={50}
                            activeColor="#FCCF00"/>,
                    </div>
                    <input className="submitButton" type="submit" value={t('create-comment-form.btn')}
                           title={t("photo-hover-title.sendC")}/>
                </form>

            </div>
        );
    }
}

export default withTranslation('global')(CreateComment);

/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
  )*/