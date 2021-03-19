import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App from './App'
import theme from './theme'
import './index.css'

//TRANSLATION IMPORTS
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/es.json"
import global_en from "./translations/en/en.json"
import global_cat from "./translations/cat/cat.json"

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        },
        cat: {
            global: global_cat
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>
    </I18nextProvider>,
    document.querySelector('#root'),
);