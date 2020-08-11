import { makeStyles } from '@material-ui/core/styles';
import { pulse, flash } from 'react-animations';
import Radium from 'radium';
import { red, green,lightBlue, cyan, amber, yellow, blueGrey, grey} from '@material-ui/core/colors';

export const serviceUseStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const services_animations = {
    service_landing_heading_animation: {
        animation:"landing_heading_animation 2s infinite",
        animationName: Radium.keyframes(pulse, 'pulse')
      },
    list_bullets_headings: {
      animation: "bullet_headings 1s 3s infinite",
      animationName: Radium.keyframes(flash, 'flash')
    }   
}
