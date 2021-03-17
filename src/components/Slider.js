import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


class Slider extends Component {

    render() {

        return (

            <div id="slider">
                <div className="sliderContent">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        ¡Nunca es demasiado tarde!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        yayOS es una plataforma web interactiva que permite al usuario aprender a hacer cosas sencillas
                        con un ordenador.
                        ¡Aqui empieza el camino a la autosuficiencia tecnológica!
                    </Typography>
                    <div className="sliderButtons">
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <NavLink to="/leccion1" style={{textDecoration: 'none'}}>
                                    <Button variant="contained"
                                            color="primary">
                                        ¡Quiero saber más!
                                    </Button>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="/g" style={{textDecoration: 'none'}}>
                                    <Button variant="outlined"
                                            color="primary">
                                        ¡Me gustaría dar mi opinón!
                                    </Button>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        );
    }


}

export default Slider;