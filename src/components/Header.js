import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import {useTranslation} from "react-i18next";
import es from "../assets/images/es.png"
import en from "../assets/images/en.png"
import cat from "../assets/images/cat.png"

const Header = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div id="header">
            <AppBar position="relative">
                <Toolbar>
                    <img id="logo" src={logo} className="logo" alt="yayOS logo"/>
                    <Typography variant="h6" color="inherit" noWrap>
                        {t("header.title")}
                    </Typography>
                    <div id="flags" >
                    <img onClick={() => i18n.changeLanguage("es")}  src={es} alt="es"/>
                    <img onClick={() => i18n.changeLanguage("en")}  src={en} alt="en"/>
                    <img  onClick={() => i18n.changeLanguage("cat")} src={cat} alt="cat"/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;