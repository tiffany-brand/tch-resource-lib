import React from 'react'
import { useSelector } from 'react-redux';
import Resource from '../Resource/Resource';

const ResourceList = () => {
    const resources = useSelector((state) => state.resources)
    console.log(resources);
    return (
        <div>
            <h1>Resource List</h1>
            <Resource />
            <Resource />
        </div>
    )
}

export default ResourceList
