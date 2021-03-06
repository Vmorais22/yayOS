import Typography from "@material-ui/core/Typography";
import React from "react";

function CopyrightBanner() {
    return (
        <Typography variant="body2" color="black" align="center">
            {'Copyright © yayOS '+new Date().getFullYear()+'.'}
        </Typography>
    );
}

export default CopyrightBanner;