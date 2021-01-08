import React from 'react'
import { Container, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Resource from '../Resource/Resource';

const ResourceList = () => {
    const resources = useSelector((state) => state.resources)
    console.log(resources);
    return (

        !resources.length ? <CircularProgress /> : (
            <Container>
                {
                    resources.map((resource) => (

                        <Resource key={resource._id} resource={resource} />

                    ))
                }
            </Container>
        )


    )
}

export default ResourceList
