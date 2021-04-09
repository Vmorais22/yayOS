import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListOfLessons from './components/ListOfLessons';
import Error from './components/Error';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {LessonContent} from "./components/LessonContent";
import ScrollToTop from "./components/ScrollToTop";
import SkypeLesson from "./components/SkypeLesson";
import Formulario from "./components/Formulario";
import ListOfComments from "./components/ListOfComments";


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
                            <Route exact path="/valoracion1" component={ListOfComments}/>
                            <Route exact path="/leccion2" render={(props) => (
                                <LessonContent {...props} lesson={2}/>
                            )}
                            />

                            <Route exact path="/leccion3" render={(props) => (
                                <LessonContent {...props} lesson={3}/>
                            )}
                            />

                            <Route exact path="/leccion4" render={(props) => (
                                <LessonContent {...props} lesson={4}/>
                            )}
                            />

                            <Route exact path="/leccion5" render={(props) => (
                                <LessonContent {...props} lesson={5}/>
                            )}
                            />

                            <Route exact path="/leccion6" render={(props) => (
                                <SkypeLesson />
                            )}
                            />

                            <Route exact path="/leccion6/inst" render={(props) => (
                                <LessonContent {...props} lesson={61}/>
                            )}
                            />
                            <Route exact path="/leccion6/func" render={(props) => (
                                <LessonContent {...props} lesson={62}/>
                            )}
                            />

                            <Route exact path="/leccion7" render={(props) => (
                                <LessonContent {...props} lesson={7}/>
                            )}
                            />

                            <Route exact path="/leccion8" render={(props) => (
                                <LessonContent {...props} lesson={8}/>
                            )}
                            />

                            <Route exact path="/leccion9" render={(props) => (
                                <LessonContent {...props} lesson={9}/>
                            )}
                            />
                            <Route exact path="/form" component={Formulario}/>
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