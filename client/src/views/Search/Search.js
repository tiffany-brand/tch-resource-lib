import React, { useEffect } from 'react'
import ResourceList from '../../components/ResourceList/ResourceList';
import { Container, Typography } from '@material-ui/core';

import { getResources } from '../../actions/resources';
import { useDispatch } from 'react-redux';

const Search = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResources())
    }, [dispatch]);

    return (
        <Container>
            <Typography gutterBottom variant="h6">Search for Resources</Typography>
            <ResourceList />
        </Container>
    )
}

export default Search
