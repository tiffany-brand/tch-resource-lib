import { makeStyles } from '@material-ui/core';
import heroImg from '../../assets/images/blocks.jpg'

export default makeStyles((theme) => ({
    hero: {
        height: 300,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover"
    },
    title: {
        paddingTop: 100,
        color: theme.palette.text.primary,
        textAlign: "right",
        textShadow: "1px 1px #FFF"
    }
}));