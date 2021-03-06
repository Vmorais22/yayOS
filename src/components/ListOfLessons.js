import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Lesson from "./Lesson";
import {lessonsInfo} from "../assets/MainMenuData";
import Container from "@material-ui/core/Container";
import Slider from "./Slider";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class ListOfLessons extends Component {

    render() {

        return(
            <div>
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
            </div>
        );
    }
}

export default ListOfLessons;
