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
import {NavLink} from "react-router-dom";

const Header = () => {

    const [t, i18n] = useTranslation("global");

    return (
        <div id="header">
            <AppBar position="relative">
                <Toolbar>
                    <NavLink to="/" style={{textDecoration: 'none'}}>
                    <img id="logo" src={logo} className="logo" alt="yayOS logo" title={t("photo-hover-title.menu")}/>
                    </NavLink>
                    <Typography variant="h6" color="inherit" noWrap>
                        {t("header.title")}
                    </Typography>
                    <div id="flags" >
                    <img onClick={() => i18n.changeLanguage("es")}  src={es} alt="es" title={t("photo-hover-title.es")}/>
                    <img onClick={() => i18n.changeLanguage("en")}  src={en} alt="en" title={t("photo-hover-title.en")}/>
                    <img  onClick={() => i18n.changeLanguage("cat")} src={cat} alt="cat" title={t("photo-hover-title.cat")}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Header;