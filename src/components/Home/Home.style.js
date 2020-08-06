import { makeStyles } from '@material-ui/core/styles';
import { bounceIn, shake, pulse, fadeIn } from 'react-animations';
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
    },
    service_over_desc: {
      animation:"service_overview_description 3s",
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    service_preview_boxes: {
      revenue_cycle_management: {
        animation: "revenue_cycle_management 2s infinite 3s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      payment_posting:{
        animation: "revenue_cycle_management 2s infinite 4s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      virtual_assistant:{
        animation: "revenue_cycle_management 2s infinite 5s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      staff_augmentation:{
        animation: "revenue_cycle_management 2s infinite 6s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      reason_code_mapping:{
        animation: "revenue_cycle_management 2s infinite 7s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      correspondence_management:{
        animation: "revenue_cycle_management 2s infinite 8s",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
      product_management:{
        animation: "revenue_cycle_management 2s infinite 9s",
        animationName: Radium.keyframes(pulse, 'pulse')
      }
    }
}