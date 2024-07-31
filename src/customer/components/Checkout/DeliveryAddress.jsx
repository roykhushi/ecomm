import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, Grid, TextField } from '@mui/material'

const DeliveryAddress = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            firstName : data.get("firstname"),
            lastName : data.get("lastname"),
            address : data.get("address"),
            city : data.get("city"),
            state : data.get("state"),
            zipcode : data.get("zipcode"),
            phonenumber : data.get("phonenumber"),
        }
        console.log('address' , address);
    }
  return (
    <div>
        <Grid container spacing={4}>
            <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">

                <div className='p-5 py-7 border-b cursor-pointer'>
                    <AddressCard />
                    <Button sx={{mt:"25px"}} size='large' variant='contained'>Deliver Here</Button>
                </div>

            </Grid>

            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadown-md p-5">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='firstname'
                                name='firstname'
                                label="First Name"
                                fullWidth
                                autoComplete='given-name'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='lastname'
                                name='lastname'
                                label="Last Name"
                                fullWidth
                                autoComplete='given-name'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                required
                                id='address'
                                name='address'
                                label="Address"
                                fullWidth
                                autoComplete='given-name'
                                multiline
                                rows={2}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='city'
                                name='city'
                                label="City"
                                fullWidth
                                autoComplete='city'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='state'
                                name='state'
                                label="State/Province/Region"
                                fullWidth
                                autoComplete='state'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='zipcode'
                                name='zipcode'
                                label="Zip/Postal Code"
                                fullWidth
                                autoComplete='zipcode'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id='phonenumber'
                                name='phonenumber'
                                label="Phone Number"
                                fullWidth
                                autoComplete='phonenumber'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Button sx={{mt:"25px"}} size='large' variant='contained' type='submit'>Deliver Here</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddress