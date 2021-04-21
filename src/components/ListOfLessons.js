import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Lesson} from "./Lesson";
import {lessonsInfo} from "../assets/MainMenuData";
import Container from "@material-ui/core/Container";
import Slider from "./Slider";
import {withTranslation} from "react-i18next";


let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class ListOfLessons extends Component {

    componentWillMount() {
        //el select se reinicia, con esto concuerda lo mostrado pero hace que no recuerde la selección de filtrado.
        // Eliminar metodo para que recuerde.
        cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    constructor(props) {
        super(props);
        this.state = {value: '0'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.filtrar(event.target.value)
    }

    filtrar(result) {
        if (result === "0") cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        if (result === "1") cards = [1, 2];
        if (result === "2") cards = [3, 5, 7];
        if (result === "3") cards = [4, 6];
        if (result === "4") cards = [8, 9];
    }

    render() {
        const t = this.props.t
        return(
            <div>
            <Slider />
            <br/>
                <div className="filtrar">
                    <select onChange={this.handleChange}>
                        <option value="0">{t("filter.0")}</option>
                        <option value="1">{t("filter.1")}</option>
                        <option value="2">{t("filter.2")}</option>
                        <option value="3">{t("filter.3")}</option>
                        <option value="4">{t("filter.4")}</option>
                    </select>
                    <h2>{t("filter.title")}</h2>

                </div>
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

export default withTranslation("global")(ListOfLessons);
