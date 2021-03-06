import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'
class Header extends Component {

    render() {

        return (
            <AppBar position="relative">
                <Toolbar>
                    <img id = "logo" src ={logo} className="logo" />
                    <Typography variant="h6" color="inherit" noWrap>
                        ¡Aprende a usar un ordenador hoy mismo!
                    </Typography>
                </Toolbar>
            </AppBar>
            );
        }
}

export default Header;