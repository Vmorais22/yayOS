import React from 'react';
import CopyrightBanner from './components/CopyrightBanner';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import logoyayOS from './assets/images/logo.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import photo1 from './assets/images/posible1.png';
import {lessonsInfo} from './assets/MainMenuData';
import Header from "./components/Header";


//DEFINITION OF STYLE CONSTANTS

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
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
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

//NUMBER OF LESSONS
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const cardsPhotos = [photo1,photo1,photo1, photo1,photo1,photo1,photo1,photo1,photo1];

export default function ListOfLessons() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            ¡Nunca es demasiado tarde!
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            yayOS es una plataforma web interactiva que permite al usuario aprender a hacer cosas sencillas con un ordenador.
                            ¡Aqui empieza el camino a la autosuficiencia tecnológica!
                        </Typography>
                        <div className={classes.heroButtons}>
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
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        //className={classes.cardMedia}
                                        src = {cardsPhotos[card-1]}
                                        component={"img"}// https://source.unsplash.com/random
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                       <h1 align="center"> {lessonsInfo[card-1].title}</h1>
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
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h4" align="center" gutterBottom>
                    yayOS
                </Typography>
                <Typography variant="subtitle1" align="center" color="black" component="p">
                    Proyecto estríctamente académico
                </Typography>
                <CopyrightBanner />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}