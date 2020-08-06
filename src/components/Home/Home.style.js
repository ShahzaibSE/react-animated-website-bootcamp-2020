import { makeStyles } from '@material-ui/core/styles';
import { bounceIn, shake, pulse } from 'react-animations';
import Radium from 'radium';
import { red, green,lightBlue, cyan, amber, yellow, blueGrey, grey} from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      minHeight: 200,
      borderRadius: 20,
      backgroundColor: grey[100]
    },
    revenue_cycle_management: {
      backgroundColor: red[500]
    },
    payment_posting: {
      backgroundColor: lightBlue[200]
    },
    virtual_assistant: {
      backgroundColor: green[200]
    },
    staff_augmentation: {
      backgroundColor: blueGrey[200]
    },
    reason_code_mapping: {
      backgroundColor: cyan[200]
    },
    correspondence_management: {
      backgroundColor: amber[200]
    },
    product_management: {
      backgroundColor: yellow[300],
    }
}));

export const animation_styles = {
    bounceIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounceIn, 'bounceIn')
    },
    shake_meeting: {
        animation: 'x 3s infinite',
        animationName: Radium.keyframes(shake, 'shake')   
    },
    landing_heading_animation: {
      animation:"landing_heading_animation 2s infinite",
      animationName: Radium.keyframes(pulse, 'pulse')
    }
}