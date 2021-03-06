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
import Footer from "./components/Footer";
import Lesson from "./components/Lesson";

//NUMBER OF LESSONS
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ListOfLessons() {

    return (
        <React.Fragment>

            <CssBaseline />

            <Header />

            <main>

                <Slider />

                <Container className="cardGrid" maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>

                                <Lesson n={card} lesson={lessonsInfo[card-1]} />

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <Footer />

        </React.Fragment>
    );
}