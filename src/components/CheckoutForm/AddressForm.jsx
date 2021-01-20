import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider} from 'react-hook-form'

import FormInput from "./CustomTextField"

const AddressForm = () => {
    const methods = useForm()

    return (
        <>
           <Typography variant='h6' gutterBottom>Shipping Address</Typography>
           <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput  required name='firstName' label='first name' />
                        <FormInput  required name='lastName' label='last name' />
                        <FormInput  required name='address1' label='address' />
                        <FormInput  required name='email' label='email' />
                        <FormInput  required name='city' label='city' />
                        <FormInput  required name='zip' label='postal code' />

                    </Grid>
                </form>
           </FormProvider>
        </>
    )
}

export default AddressForm
