import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Slider = () => {
    const [t] = useTranslation("global");
    return (

        <div id="slider">
            <div className="sliderContent">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {t("slider.title")}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {t("slider.sub")}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {t("slider.sub2")}
                </Typography>
                <div className="sliderButtons">
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <NavLink to="/instr" style={{textDecoration: 'none'}}>
                            <Button variant="contained"
                                    color="primary">
                                {t("slider.btn1")}
                            </Button>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/form" style={{textDecoration: 'none'}}>
                                <Button variant="outlined"
                                        color="primary">
                                    {t("slider.btn2")}
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </div>
    );


}

export default Slider;