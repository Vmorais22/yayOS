import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatings from 'react-star-ratings';
import axios from "axios";
import Global from "../Global";


export const RatingSlider = ({showAllCallback}) => {
    let averageRate = [];
    const [t] = useTranslation("global")
    const [allRates, setAllRates] = useState(0);

    function checkRating() {
        axios.get(Global.url + "/rates").then(res => {
            setAllRates(res.data.rates)
        })
        for (let i = 0; i < allRates.length; ++i) {
            averageRate.push(allRates[i].rate)
        }
        if(averageRate.length > 1){
            let sum = averageRate.reduce((a, b) => a + b, 0);
            let avg = sum / averageRate.length;
            return avg }

            else {return 0}
    }
    return (

        <div id="slider">
            <div className="sliderContent">
                <div className="rating">
                    <StarRatings
                        rating={checkRating()}
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
                <Typography component="h2" align="center" color="textPrimary" gutterBottom>
                    {t("ratings.line31") + (Number.parseFloat(checkRating().toString()).toFixed(2))*100/5 + t("ratings.line32")}
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