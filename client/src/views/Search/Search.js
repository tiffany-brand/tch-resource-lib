import React, { useEffect } from 'react'
import ResourceList from '../../components/ResourceList/ResourceList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Container, Typography } from '@material-ui/core';

import { getResources, searchResources } from '../../actions/resources';
import { useDispatch } from 'react-redux';

const Search = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getResources())
        // search test:
        dispatch(searchResources('zoom'));
    }, [dispatch]);

    return (
        <Container>
            <Typography gutterBottom variant="h6">Search for Resources</Typography>
            <SearchForm />
            <ResourceList />
        </Container>
    )
}

export default Search
