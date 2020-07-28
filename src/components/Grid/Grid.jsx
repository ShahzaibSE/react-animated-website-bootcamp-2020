import React, {useEffect, useRef} from 'react'
import {Grid} from "@material-ui/core"
// Component.
import Header from "./../Header/Header"
import Menu from "./../Menu/Menu"

const GridComponent = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Menu />
            </Grid>
        </Grid>
    )
}

export default GridComponent
