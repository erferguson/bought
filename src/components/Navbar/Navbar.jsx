import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/bought-basket.png'
import useStyles from './styles'

export const Navbar = ({ totalItems}) => {
    const classes = useStyles()
    const location = useLocation()

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit' >
                        <img src={logo} alt='Bought' height='25px' className={classes.image}  />
                        Bought
                    </Typography>
                    <div className={classes.grow} />
                    { location.pathname === '/' && (
                        <dive className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'  >
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </dive>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar