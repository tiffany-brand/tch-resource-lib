import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
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
                    <Link to='/'><Button className={classes.links}>Search</Button></Link>
                    <Link to='/add'><Button className={classes.links}>Add Resource</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
