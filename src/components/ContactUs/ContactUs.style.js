import { makeStyles } from '@material-ui/core/styles';
import Radium from 'radium';
import {fadeInUp,fadeIn, pulse} from "react-animations"

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

export const contactAnimations = {
    fadeIn_formcontrols: {
        animation: "form_control_animation 1s",
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    },
    text_animation: {
        animation:"text_animation 2s 2s Infinite",
        animationName: Radium.keyframes(pulse, 'pulse')
    },
    gif_animation: {
        animation: "gif_animation 3s",
        animationName: Radium.keyframes(fadeIn, "fadeIn")
    }
}
