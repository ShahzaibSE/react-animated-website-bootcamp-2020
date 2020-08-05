import { makeStyles } from '@material-ui/core/styles';
import { bounceIn, shake } from 'react-animations';
import Radium from 'radium';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      minHeight: 200,
      borderRadius: 20
    },
    avatar: {
        backgroundColor: red[500]
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
    }
}