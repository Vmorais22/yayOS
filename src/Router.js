import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListOfLessons from './components/ListOfLessons';
import Error from './components/Error';


class Router extends Component {

    render(){

        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ListOfLessons} />
                    <Route component={Error} />
                    {/*<Route path="/segundo" component={Slider} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;