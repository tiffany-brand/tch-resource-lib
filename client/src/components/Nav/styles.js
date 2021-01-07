import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: 0
    },
    title: {
        flexGrow: 1,
        color: "#FFF",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },

    links: {
        textDecoration: "none",
        color: "#fff"
    },
    offset: theme.mixins.toolbar,
}));