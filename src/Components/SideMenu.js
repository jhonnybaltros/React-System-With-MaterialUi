import React from 'react-dom'
import { makeStyles, withStyles } from '@material-ui/core';

// WithStyles & MakeStyles

const style = {
  sideMenu: {  
        display:'flex',
        flexDirection:'colum',
        position: 'absolute',
        left: '0px',
        width: '120px',
        height: '100%',
        backgroundColor: '#253053' 
    }
}




const SideMenu = (props) => {

    const {classes} = props;

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(style)(SideMenu);