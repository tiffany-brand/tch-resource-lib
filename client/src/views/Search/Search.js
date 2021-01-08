import React, { useEffect } from 'react'
import ResourceList from '../../components/ResourceList/ResourceList';

import { getResources } from '../../actions/resources';
import { useDispatch } from 'react-redux';

const Search = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResources())
    }, [dispatch]);

    return (
        <div>
            <h1>SEARCH VIEW</h1>
            <ResourceList />
        </div>
    )
}

export default Search
