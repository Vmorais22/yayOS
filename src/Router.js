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
import CreateCommennt from "./components/CreateComment";
import Instrucciones from "./components/Instrucciones";


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
                            <Route exact path="/valoracion1" render={(props) => (
                                <ListOfComments {...props} lesson={1}/> )}
                            />

                            <Route exact path="/leccion2" render={(props) => (
                                <LessonContent {...props} lesson={2}/>
                            )}
                            />
                            <Route exact path="/valoracion2" render={(props) => (
                                <ListOfComments {...props} lesson={2}/> )}
                            />

                            <Route exact path="/leccion3" render={(props) => (
                                <LessonContent {...props} lesson={3}/>
                            )}
                            />
                            <Route exact path="/valoracion3" render={(props) => (
                                <ListOfComments {...props} lesson={3}/> )}
                            />

                            <Route exact path="/leccion4" render={(props) => (
                                <LessonContent {...props} lesson={4}/>
                            )}
                            />
                            <Route exact path="/valoracion4" render={(props) => (
                                <ListOfComments {...props} lesson={4}/> )}
                            />

                            <Route exact path="/leccion5" render={(props) => (
                                <LessonContent {...props} lesson={5}/>
                            )}
                            />
                            <Route exact path="/valoracion5" render={(props) => (
                                <ListOfComments {...props} lesson={5}/> )}
                            />

                            <Route exact path="/leccion6" render={(props) => (
                                <SkypeLesson />
                            )}
                            />
                            <Route exact path="/valoracion6" render={(props) => (
                                <ListOfComments {...props} lesson={6}/> )}
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
                            <Route exact path="/valoracion7" render={(props) => (
                                <ListOfComments {...props} lesson={7}/> )}
                            />

                            <Route exact path="/leccion8" render={(props) => (
                                <LessonContent {...props} lesson={8}/>
                            )}
                            />
                            <Route exact path="/valoracion8" render={(props) => (
                                <ListOfComments {...props} lesson={8}/> )}
                            />

                            <Route exact path="/leccion9" render={(props) => (
                                <LessonContent {...props} lesson={9}/>
                            )}
                            />
                            <Route exact path="/valoracion9" render={(props) => (
                                <ListOfComments {...props} lesson={9}/> )}
                            />
                            <Route exact path={"/nuevoComentario"} component={CreateCommennt} />
                            <Route exact path="/form" component={Formulario}/>
                            <Route exact path="/instr" component={Instrucciones} />
                            )}
                            />
                            <Route component={Error}/>
                        </Switch>
                    </main>

                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>

        );
    }
}

export default Router;