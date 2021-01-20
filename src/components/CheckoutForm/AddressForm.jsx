import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider} from 'react-hook-form'

import { commerce } from '../../lib/commerce'

import FormInput from "./CustomTextField"

const AddressForm = ({ checkoutToken }) => {
    const [shippingCountries, setShippingCountries ] = useState([])
    const [shippingCountry, setShippingCountry ] = useState('')

    const [shippingSubdivisions, setShippingSubdivisions ] = useState([])
    const [shippingSubdivision, setShippingSubdivision ] = useState('')

    const [shippingOptions, setShippingOptions ] = useState([])
    const [shippingOption, setShippingOption ] = useState('')

    const methods = useForm()

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        console.log(countries)
        setShippingCountries(countries)
    }

   useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
   }, []) 

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
                        <FormInput  required name='state' label='state' />
                        <FormInput  required name='zip' label='postal code' />
                        <FormInput  required name='country' label='country' />
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}
                    </Grid>
                </form>
           </FormProvider>
        </>
    )
}

export default AddressForm
