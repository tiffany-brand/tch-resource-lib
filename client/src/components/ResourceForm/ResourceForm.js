import React, { useState } from 'react'
import { TextField, Button, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { createResource } from '../../actions/resources';

const ResourceForm = () => {
    const [resourceData, setResourceData] = useState({
        title: '',
        description: '',
        author: '',
        tags: '',
        image: '',
        links: '',
        files: ''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createResource(resourceData))
        clear();
    }

    const clear = () => {
        setResourceData({
            title: '',
            description: '',
            author: '',
            tags: '',
            image: '',
            links: '',
            files: ''
        })
    }

    return (
        <Container className={classes.container}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add a New Resource</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={resourceData.title}
                    onChange={(e) => setResourceData({ ...resourceData, title: e.target.value })}
                />
                <TextField
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    value={resourceData.description}
                    onChange={(e) => setResourceData({ ...resourceData, description: e.target.value })}
                />
                <TextField
                    name="author"
                    variant="outlined"
                    label="Author"
                    fullWidth
                    value={resourceData.author}
                    onChange={(e) => setResourceData({ ...resourceData, author: e.target.value })}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>

        </Container>
    )
}

export default ResourceForm
