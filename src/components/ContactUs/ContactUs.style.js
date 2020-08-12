import { makeStyles } from '@material-ui/core/styles';

export const contactUsStyle = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    submitBtn:{
        minWidth: "65ch",
        minHeight: "8ch",
        marginTop:40,
        background:"#003a78"
    },
    textFields: {
        marginTop: 20
    }
}));
