import React from "react";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatings from 'react-star-ratings';


export const RatingSlider = ({showAllCallback}) => {
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
                    {t("ratings.line1")}
                </Typography>
                <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                    {t("ratings.line2")}
                </Typography>
                <div className="sliderButtons">
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <NavLink to="/nuevoComentario" style={{textDecoration: 'none'}}>
                                <Button variant="contained"
                                        color="primary">
                                    {t("ratings.btn1")}
                                </Button>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined"
                                    color="primary"
                                    onClick={() => showAllCallback(true)}>
                                {t("ratings.btn2")}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}