import React from 'react';
import {useTranslation} from "react-i18next";
import img1 from "../assets/images/ins1.png"
import img2 from "../assets/images/ins2.JPG"
import img3 from "../assets/images/ins3.JPG"
import img4 from "../assets/images/ins4.JPG"
import img5 from "../assets/images/ins5.JPG"
import img6 from "../assets/images/ins6.png"
import img7 from "../assets/images/ins7.JPG"
import img8 from "../assets/images/ins8.JPG"

const Instrucciones = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div>
            <br/>
            <br/>
            <div id="center" className="instruction-card">
                <img className="leftimg" src={img1} alt="ins1"/>
                <h2>yayOS es una herramienta que te va a enseñar a hacer cosas muy básicas y muy sencillas con un
                    ordenador. Esta plataforma web ha sido específicamente creada para personas mayores que no tienen ni
                    idea de cómo funciona un ordenador y ha sido adaptada a sus necesidades mediante un riguroso estudio
                    académico. ¡El saber está a tu alcance, empieza hoy mismo!</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img2} alt="ins1"/>
                <h2>En el Menú Principal de yayOS encontrarás un surtido de lecciones ordenadas de manera que el
                    aprendizaje sea progresivo. Si esta es la primera vez que utilizas yayOS te recomiendo
                    encarecidamente que las hagas en orden. De izquierda a derecha y de arriba a abajo. Si por el
                    contrario buscas algo más concreto puedes ir consultando las descripciones de cada lección así como
                    su dificultad. ¡Solo has de coger el ratón y hacer clic izquierdo sobre la palabra "Aprender" de la
                    lección que eligas!</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="excepimgl" src={img3} alt="ins1"/>
                <h2>Encontrarás cada lección dividida en distintos apartados. Puedes ir al siguiente apartado haciendo
                    clic izquierdo con el ratón en la flecha de la derecha e ir al anterior con la flecha de la
                    izquierda. ¡También puedes clicar en un apartado de la lista e ir directamente a él! El apartado que
                    estés viendo en ese momento estará resaltado.</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="excepimgr" src={img4} alt="ins1"/>
                <h2>¿La letra no es lo suficiente grande? No te preocupes, ¡está todo pensado! Haz clic izquierdo con el
                    ratón sobre el icono en forma de lupa y pasa el cursor por el texto. ¡Tachán, lupa virtual!</h2>
            </div>
            <br/>
            <br/>
            <div id="center" className="instruction-card">
                <img className="leftimg" src={img5} alt="ins1"/>
                <h2>yayOS ha sido creada para ayudar a cuantas más personas mejor. ¿No entiendes el idioma? No te
                    preocupes, puedes traducirlo directamente desde la cabecera de la plataforma. Solo tienes que hacer
                    clic izquierdo con el ratón en el idioma que quieras y la apliación se traduce automáticamente. Por
                    ahora solo está disponible en castellano, catalán e inglés, pero en el futuro el plan es ser más
                    plurilingüista. </h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img8} alt="ins1"/>
                <h2>¿Hay algo que no se entienda? ¿Crees que falta profundizar más algún lugar? No dudes en enviarnos todas tus sugerencias para poder mejorar. También puedes valorar individualmente cada lección y puntuarla, o ver que opinan el resto de usuarios. ¡Rectificar es de sabios!</h2>
            </div>
            <br/>
            <br/>
            <div className="instruction-card">
                <img className="rightimg" src={img6} alt="ins1"/>
                <img className="leftimg" src={img7} alt="ins1"/>
                <h2>Esta plataforma es un proyecto de final de carrera para la Facultad de Informática de Barcelona y la Universidad Politécnica de Catalunya.</h2>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default Instrucciones;