import React from "react";
import CopyrightBanner from './CopyrightBanner';
import Typography from "@material-ui/core/Typography";


const Footer = () => {
    return(
        <footer className="footer">
            <Typography variant="h4" align="center" gutterBottom>
                yayOS
            </Typography>
            <Typography variant="subtitle1" align="center" color="black" component="p">
                Proyecto estríctamente académico
            </Typography>
            <CopyrightBanner />
        </footer>
    );
}

export default Footer;