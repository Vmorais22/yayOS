import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListOfLessons from './components/ListOfLessons';
import Error from './components/Error';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lesson1 from "./components/Lesson1";



class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Header/>

                <main>
                    <Switch>
                        <Route exact path="/" component={ListOfLessons}/>
                        <Route exact path="/leccion1" component={Lesson1}/>
                        <Route component={Error}/>
                        {/*<Route path="/segundo" component={Slider} />*/}
                    </Switch>
                </main>

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;