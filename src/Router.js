import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListOfLessons from './components/ListOfLessons';
import Error from './components/Error';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LessonContent from "./components/LessonContent";
import ScrollToTop from "./components/ScrollToTop";


class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Header/>

                    <main>
                        <Switch>
                            <Route exact path="/" component={ListOfLessons}/>
                            <Route exact path="/leccion1" render={(props) => (
                                <LessonContent {...props} lesson={1}/>
                            )}
                            />
                            <Route component={Error}/>
                            {/*<Route path="/segundo" component={Slider} />*/}
                        </Switch>
                    </main>

                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>

        );
    }
}

export default Router;