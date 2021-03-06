import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Slider extends Component {

    render() {

        return(

            <div className="sliderContent">
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        ¡Nunca es demasiado tarde!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        yayOS es una plataforma web interactiva que permite al usuario aprender a hacer cosas sencillas con un ordenador.
                        ¡Aqui empieza el camino a la autosuficiencia tecnológica!
                    </Typography>
                    <div className="sliderButtons">
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    ¡Quiero saber más!
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    ¡Me gustaría dar mi opinón!
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>

            </div>
        );
    }
}

export default Slider;