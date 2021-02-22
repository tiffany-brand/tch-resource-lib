import React, { useEffect } from 'react'
import ResourceList from '../../components/ResourceList/ResourceList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';

import { getResources, searchResources } from '../../actions/resources';
import { useDispatch } from 'react-redux';

const Search = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(getResources())
    //     // search test:
    //     dispatch(searchResources('zoom'));
    // }, [dispatch]);

    return (
        <Container className={classes.root}>
            <Typography gutterBottom variant="h6">Search for Resources</Typography>
            <SearchForm />
            <ResourceList />
        </Container>
    )
}

export default Search
