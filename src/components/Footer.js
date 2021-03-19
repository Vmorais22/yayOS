import React from "react";
import CopyrightBanner from './CopyrightBanner';
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const [t] = useTranslation("global");
    return(
        <footer className="footer">
            <Typography variant="h4" align="center" gutterBottom>
                yayOS
            </Typography>
            <Typography variant="subtitle1" align="center" color="black" component="p">
                {t("footer.banner")}
            </Typography>
            <CopyrightBanner />
        </footer>
    );
}

export default Footer;