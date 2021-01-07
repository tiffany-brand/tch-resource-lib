import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';


function Nav() {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Teaching Resource Library
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
