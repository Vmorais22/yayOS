//REACT AND MATERIAL-UI IMPORT
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';


import Router from "./Router";


export default function App() {

    return (
        <React.Fragment>
            <CssBaseline />
                <Router />
        </React.Fragment>
    );
}