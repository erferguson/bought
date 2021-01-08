import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/bought-basket.png'
import useStyles from './styles'

export const Navbar = () => {
    const classes = useStyles()

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' >
                        <img src={logo} alt='Bought' height='25px' className={classes.image}  />
                        Bought
                    </Typography>
                    <div className={classes.grow} />
                    <dive className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'  >
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </dive>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar