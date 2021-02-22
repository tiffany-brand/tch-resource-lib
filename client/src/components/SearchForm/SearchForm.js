import React, { useState } from 'react'
import { TextField, Grid, Button, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

import { getResources, searchResources } from '../../actions/resources';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");

    // Handles updating component state when the user types into the input field
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(searchTerm.split(" ").join("+").trim())
        dispatch(searchResources(searchTerm.split(" ").join("+").trim()))
    };

    return (
        <Container className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={10}>
                        <TextField className={classes.input} id="standard-search" label="search" type="search" name="search" variant="outlined" onChange={handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button className={classes.buttons} variant="contained" color="secondary" type="submit">Search</Button>
                    </Grid>
                </Grid>

            </form>
        </Container>
    )

}

export default SearchForm;