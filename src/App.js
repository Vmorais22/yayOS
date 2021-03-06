//REACT AND MATERIAL-UI IMPORT
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

//COMPONENT'S IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";

import Router from "./Router";


export default function App() {

    return (
        <React.Fragment>

            <CssBaseline />

            <Header />

            <main>

                <Router />

            </main>

            <Footer />

        </React.Fragment>
    );
}