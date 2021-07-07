import { AppBar, Badge, Grid, InputBase, IconButton, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon  from '@material-ui/icons/PowerSettingsNew'

export default function Header() {
    return (
       <AppBar position="static">
           
           <Toolbar>
        <Grid container>
            <Grid item> 
                <InputBase />
            </Grid>
            <Grid item sm></Grid>
            <Grid item> 
                <IconButton>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <IconButton>
                    <Badge badgeContent={3} color="primary">
                        <ChatBubbleOutlineIcon />
                    </Badge>
                </IconButton>
                <IconButton>
                        <PowerSettingsNewIcon />                  
                </IconButton>
            </Grid>
        </Grid>

           </Toolbar>

       </AppBar>
    )
}
