import React from "react";
import {LessonSlider} from "./LessonSlider";
import {useTranslation} from "react-i18next";

const Formulario = () => {
    const [t] = useTranslation("global");
    return (
        <React.Fragment>
            <LessonSlider title={t('form.title')}/>
        <form className="mid-form">
            <div className="form-group">
                <label for="nombre"> {t('form.name-label')} </label>
                <input type="text" name="nombre" placeholder={t('form.name-placeholder')}/>
            </div>
            <div className="form-group">
                <label for="descripcion"> {t('form.opinion-label')}</label>
                <textarea name="descripcion" placeholder={t('form.opinion-placeholder')}/>
            </div>
        <div className="form-group radiobuttons">
                <input type="radio" name="genero" value="hombre"/> {t('form.rb1')}
                <input type="radio" name="genero" value="mujer"/> {t('form.rb2')}
                <input type="radio" name="genero" value="otro"/> {t('form.rb3')}
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

