//REACT AND MATERIAL-UI IMPORT
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

//COMPONENT'S IMPORT
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ListOfLessons from "./components/ListOfLessons";
import Router from "./Router";


export default function App() {

    return (
        <React.Fragment>

            <CssBaseline />

            <Header />

            <main>

                <Slider />

                <Router />

            </main>

            <Footer />

        </React.Fragment>
    );
}