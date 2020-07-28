import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "@material-ui/core"
// Assets.
import useSyles from "./Header.styles"
import earth_cosmos_technologies from "./../../images/earth-cosmos-technologies.png"

const Header = () => {
    const classes = useSyles()
    return (
        <div>
            <AppBar position="fixed" className={classes.app_bar_container}>
                <Toolbar>
                    <img className={classes.cosmos_technologies_logo} src={earth_cosmos_technologies} alt="Cosmos Technologies logo" width={50}/>
                    <Typography variant="h6" className={classes.title}>
                        <span>Cosmos Technologies</span>
                    </Typography>
                    <Link href="#" className={classes.link} style={{textDecoration:"none"}}>Home</Link>
                    <Link href="#" className={classes.link} style={{textDecoration:"none"}}>About Us</Link>
                    <Link href="#" className={classes.link} style={{textDecoration:"none"}}>Services</Link>
                    <Link href="#" className={classes.link} style={{textDecoration:"none"}}>Career</Link>
                    <Link href="#" className={classes.link} style={{textDecoration:"none"}}>Contact</Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header