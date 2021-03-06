//REACT AND MATERIAL-UI IMPORT
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

//DATA IMPORT
import {lessonsInfo} from './assets/MainMenuData';

//COMPONENT'S IMPORT
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer"


//DEFINITION OF STYLE CONSTANTS

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        width: '100%',
        height: '120',
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

}));

//NUMBER OF LESSONS
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function checkBannerColor(card) {
    if(card < 3) return "prove" ;
    else if(card > 7) return "error"
    else if (card == 3 || card == 5 || card == 7) return "secondary";
    else return "primary";
};

export default function ListOfLessons() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <Header />

            <main>

                <Slider />
                <Container className={classes.cardGrid} maxWidth="md">

                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        //className={classes.cardMedia}
                                        src = {lessonsInfo[card-1].image}
                                        component={"img"}// https://source.unsplash.com/random
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography align="center" variant="subtitle1" color={checkBannerColor(card)}>
                                            {lessonsInfo[card-1].banner}
                                        </Typography>
                                       <h2 align="center"> {lessonsInfo[card-1].title}</h2>
                                        <hr/>
                                        <Typography align="center">
                                            {lessonsInfo[card-1].description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large" color="secondary" >
                                            Aprender
                                        </Button>
                                        <Button size="large" color="primary">
                                            Desafío
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <Footer />

        </React.Fragment>
    );
}