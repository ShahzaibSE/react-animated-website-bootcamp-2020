import React from 'react'
import {StyleRoot} from 'radium'
import {Grid} from "@material-ui/core"
import {ScrollAnimation} from "react-animate-on-scroll"
import useWebAnimations, {fadeIn,fadeInLeft} from "@wellyshen/use-web-animations"
// For Services List Details.
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// Assets.
import "./Services.scss"
import "animate.css/animate.min.css" // Scroller dependency.
import service_landing_animation from "./../../images/services-landing-animation.gif"
import {services_animations} from "./Services.style"
import {serviceUseStyles} from "./Services.style";

const ServicesComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    const classes = serviceUseStyles();
    const [open, setOpen] = React.useState(true);
    // Collapser.
    const handleClick = () => {
        setOpen(!open);
    };
    //
    return (
        <Grid container>
            <Grid item xs={6}>
                <div ref={ref} className="service_page_heading_container">
                    <StyleRoot>
                            <h2 className="service_page_heading" 
                                style={services_animations.service_landing_heading_animation}>
                                <span>Impactful,<br/></span>
                                <span>Innovative and,<br/></span>
                                <span>Insightful<br/></span>
                            </h2>    
                    </StyleRoot>
                </div>
            </Grid>
            <Grid item xs={6}>
            <StyleRoot>  
                    <div className="telling_about_services">
                            <div>
                                <img src={service_landing_animation} alt="Services we provide"/>
                            </div>
                    </div>
                </StyleRoot> 
            </Grid>
            <Grid item xs={12}>
                        <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                    </ListSubheader>
                }
                className={classes.root}
                >
                <ListItem button>
                    <ListItemIcon>
                    <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                    </List>
                </Collapse>
                </List>
            </Grid>
        </Grid>
    )
}

export default ServicesComponent
