import React, {Component} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";


class Lesson extends Component {

    checkBannerColor(n) {
        if(n < 3) return "prove" ;
        else if(n > 7) return "error"
        else if (n === 3 || n === 5 || n === 7) return "secondary";
        else return "primary";
    }

    render() {
        const n = this.props.n;
        const lesson = this.props.lesson;
        return(
            <Card className="card">
                <CardMedia
                    className="cardMedia"
                    src = {lesson.image}
                    component={"img"}
                    title="Image title"
                />
                <CardContent className="cardContent">
                    <Typography align="center" variant="subtitle1" color={this.checkBannerColor(n)}>
                        {lesson.banner}
                    </Typography>
                    <h2 align="center"> {lesson.title}</h2>
                    <hr/>
                    <Typography align="center">
                        {lesson.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" color="secondary" >
                        Aprender
                    </Button>
                    {n > 2 &&
                    <Button size="large" color="primary">
                        Desafío
                    </Button>
                    }
                </CardActions>
            </Card>
        );
    }
}

export default Lesson;