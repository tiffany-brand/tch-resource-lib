import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

function Hero() {

    const classes = useStyles();

    return (
        <section className={classes.hero}>
            <Container>
                <div className={classes.title}>
                    {/* <Typography variant="h2" component="h1">TR Lib</Typography>
                    <Typography component="h2" variant="h5">Search & Save</Typography> */}
                </div>
            </Container>
        </section>
    )
}

export default Hero
