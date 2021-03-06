import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Header extends Component {

    render() {

        return (
            <AppBar position="relative">
                <Toolbar>
                    <img id = "logo" src ={logo} className="logo" />
                    <Typography variant="h6" color="inherit" noWrap>
                        yayOS
                    </Typography>
                </Toolbar>
            </AppBar>
            );
        }
}

export default Header;