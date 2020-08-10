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
import list_number_1 from "./../../images/number-1.gif"
import list_number_2 from "./../../images/number-2.gif"
import list_number_3 from "./../../images/number-3.gif"

const ServicesComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, timing:{duration: 4000}})
    const classes = serviceUseStyles();
    const [open_1, setOpen1] = React.useState(true);
    const [open_2, setOpen2] = React.useState(true);
    const [open_3, setOpen3] = React.useState(true);
    // Collapser.
    const handleClick = (list_number) => {
       if (list_number === 1) {
           setOpen1(!open_1)
           console.log(`List Number ${list_number} expanded`)
       }
       if (list_number === 2) {
           setOpen2(!open_2)
           console.log(`List Number ${list_number} expanded`)
       }
       if(list_number === 3){
           setOpen3(!open_3);
           console.log(`List Number ${list_number} expanded`)
       }
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
                <div className="list-container">
                    <List component="nav" aria-labelledby="nested-list-subheader"
                       className={classes.root}
                >
                <ListItem button onClick={()=>{handleClick(1)}}>
                    <ListItemIcon>
                        <img className="list-item-number" src={list_number_1} alt="List Item 1" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Revenue Cycle Management</h5></ListItemText>
                    {open_1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemText><p class="list_item_desc">
                    Revenue Cycle Management – Within the wide spectrum of RCM, we can provide specific and 
                    tailored support into targeted areas that have a broad impact to the 
                    organization’s efficiency and bottom-line.
                        </p></ListItemText>
                        <ListItem style={{paddingLeft:"15%"}}>
                           <ListItemIcon><StarBorder/></ListItemIcon>
                           <ListItemText><h6 className="nested_list_item_desc">Payment Posting</h6></ListItemText>
                        </ListItem>    
                        <ListItem style={{paddingLeft:"15%"}}>
                            <ListItemText><p className="nested_list_item_explaination">
                            Update your accounts receivable efficiently so that downstream processes 
                            such as denials processing, patient payments, and collections are not delayed.
                                </p></ListItemText>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{handleClick(2)}}>
                    <ListItemIcon>
                    <img className="list-item-number" src={list_number_2} alt="List Item 2" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Staff Augmentation</h5></ListItemText>
                    {open_2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={()=>{handleClick(3)}}>
                    <ListItemIcon>
                    <img className="list-item-number" src={list_number_3} alt="List Item 3" /> 
                    </ListItemIcon>
                    <ListItemText><h5 className="list_text">Product Management</h5></ListItemText>
                    {open_3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open_3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                    </List>
                </Collapse>
                </List>
                </div>
            </Grid>
        </Grid>
    )
}

export default ServicesComponent
