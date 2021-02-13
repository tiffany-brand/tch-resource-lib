import React from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const Resource = (props) => {

    const classes = useStyles();

    const { _id, title, author, description, image, tags } = props.resource

    return (
        <Container className={classes.root} >
            <Grid className={classes.resource} container spacing={2}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" paragraph>
                        {author && author.join(", ")}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <img className={classes.images} src={image} alt={title} />
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Tags: {tags.map((tag) => `${tag} `)}
                    </Typography>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Resource
