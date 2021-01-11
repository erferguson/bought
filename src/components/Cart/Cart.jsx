import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import classes from '*.module.scss';

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length

    const EmptyCart = () => {
        <Typography variant='subtitle1'>There are no items in the Cart</Typography>
    }

    const FilledCart = () => {
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>
            ))}
        </Grid>
        </>
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} varaint='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
