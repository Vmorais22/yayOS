import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatings from 'react-star-ratings';
import axios from "axios";
import Global from "../Global";


export const RatingSlider = ({n, showAllCallback}) => {
    const [t] = useTranslation("global")
    const [allRates, setAllRates] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        console.log(Global.url + "/rates/" + n)
        axios.get(Global.url + "/rates/" + n).then(res => {
            setAllRates(res.data.rates)
            setLoading(false)
        });
    }, [])

    function getAverage() {
        let sum = 0
        if(allRates.length === 0) return 0
        for (let i = 0; i < allRates.length; ++i) {
            sum += allRates[i].rate
        }
        return sum / allRates.length
    }

    return (

        <div id="slider">
            <div className="sliderContent">
                <div className="rating">
                    <StarRatings
                        rating={getAverage()}
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
                    {t("ratings.line31") + (Number.parseFloat(getAverage().toString()).toFixed(2)) * 100 / 5 + t("ratings.line32")}
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