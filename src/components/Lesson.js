import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next';


function checkBannerColor(n) {
    if (n < 3) return "background";
    else if (n > 7) return "error"
    else if (n === 3 || n === 5 || n === 7) return "secondary";
    else return "primary";
}

export function Lesson({n, lesson}) {

    const [t] = useTranslation("global")
    return (
        <Card className="card">
            <CardMedia
                className="cardMedia"
                src={lesson.image}
                component={"img"}
                title="Image title"
            />
            <CardContent className="cardContent">
                <Typography align="center" variant="subtitle1" color={checkBannerColor(n)}>
                    {t(lesson.banner)}
                </Typography>
                <h2 align="center"> {t(lesson.title)}</h2>
                <hr/>
                <Typography align="center">
                    {t(lesson.description)}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={'/leccion' + n} style={{textDecoration: 'none'}}>
                    <Button size="large" color="secondary" title={t("photo-hover-title.learn")}>
                        {t('lesson.btn')}
                    </Button>
                </NavLink>
                <NavLink to={'/valoracion' + n} style={{textDecoration: 'none'}}>
                    <Button size="large" color="primary" title={t("photo-hover-title.rate")}>
                        {t('valoracion.btn')}
                    </Button>
                </NavLink>
            </CardActions>
        </Card>
    );
}
