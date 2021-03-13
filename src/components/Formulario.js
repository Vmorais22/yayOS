import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


class Formulario extends Component {

    render() {

        return(
            <div>
                <div className="sliderContent">
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            ¡Tu opinión es importante!
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Dile a yayOS cómo puede mejorar
                        </Typography>
                    </Container>
                </div>
                <div className="center">
                    <h1> hola </h1>
                </div>
            </div>

        );
    }
}

export default Formulario;