import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import photoError from "../assets/images/photoError.png"
import logo from "../assets/images/logo.png";

const Error = () => {
    return (
        <div className="sliderContent">
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Error 404: Página no encontrada</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>¡Anda! Parece que acabas de buscar una página que no existe. Si este es tu primer error 404 no te preocupes.</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>Este error significa que la página a la que intentas acceder no existe. Vuelve hacia atrás y prueba otra cosa.</Typography>
                <img src ={photoError} alt="photoError" className="photoError" />
            </Container>
        </div>
    )
}

export default Error;