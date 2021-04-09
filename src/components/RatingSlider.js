import React from "react";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatings from 'react-star-ratings';


export function RatingSlider() {
    const [t] = useTranslation("global")

    return (
        <div id="slider">
            <div className="sliderContent">
                <div className="rating">
                    <StarRatings
                        rating={4}
                        starRatedColor="#FCCF00"
                        numberOfStars={5}
                        starDimension="100px"
                    />
                </div>

                <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                    {t("Permíteme que te muestre los últimos comentarios registrados")}
                </Typography>
                <div className="sliderButtons">
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <NavLink to="/g" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        color="primary">
                                    {t("Añadir comentario")}
                                </Button>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/form" style={{textDecoration: 'none'}}>
                                <Button variant="outlined"
                                        color="primary">
                                    {t("Ver todos los comentarios")}
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}