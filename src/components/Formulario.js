import React from "react";
import {LessonSlider} from "./LessonSlider";
import {useTranslation} from "react-i18next";

let name = React.createRef();
let opinion = React.createRef();
let h = React.createRef();
let m = React.createRef();
let o = React.createRef();
let user = null;

const sumbitForm = (e) => {
    e.preventDefault();
    alert(name.current.value + ", tu opinión: \"" + opinion.current.value + "\" ha sido almacenada. ¡Gracias por tu ayuda! \nPulsa el botón azul que dice Aceptar para continuar" );
    user = {
        nombre: name.current.value,
        opinion: opinion.current.value,
        genero: (h.current.checked) ? "hombre" : ((m.current.checked) ? "mujer" : "otro")
    }
}

const Formulario = () => {


    const [t] = useTranslation("global");
    return (
        <React.Fragment>
            <LessonSlider title={t('form.title')}/>
            <form className="mid-form" onSubmit={sumbitForm}>
                <div className="form-group">
                    <label htmlFor="nombre"> {t('form.name-label')} </label>
                    <input type="text" name="nombre" placeholder={t('form.name-placeholder')} ref={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="opinion"> {t('form.opinion-label')}</label>
                    <textarea name="opinion" placeholder={t('form.opinion-placeholder')} ref={opinion}/>
                </div>
                <div className="form-group radiobuttons">
                    <input type="radio" name="genero" value="hombre" ref={h}/> {t('form.rb1')}
                    <input type="radio" name="genero" value="mujer" ref={m}/> {t('form.rb2')}
                    <input type="radio" name="genero" value="otro" ref={o}/> {t('form.rb3')}
                </div>
                {/*<p>
                <select>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">B</option>
                </select>
            </p>*/}
                <input className="submitButton" type="submit" value={t('form.submit')}/>
            </form>
        </React.Fragment>);
}
export default Formulario;
