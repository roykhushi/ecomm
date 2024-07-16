import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid className='bg-black text-center text-white mt-10 '
        container
        sx={{bgcolor:"black", color:"white", py:3}}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-2 pt-2' variant='h6'>Company</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>About</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Blog</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Jobs</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Press</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Investors</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-2 pt-2' variant='h6'>Solutions</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Marketing</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Analytics</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Commerce</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Insights</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Support</Typography>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-2 pt-2' variant='h6'>Documentation</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Guide</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>API Status</Typography>
            </Grid>


            <Grid item xs={12} sm={6} md={3}>
                <Typography className='pb-2 pt-2' variant='h6'>Legal</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Claim</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Privacy</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Terms</Typography>
                <Typography className='pb-2 cursor-pointer' variant='h6'>Contact</Typography>
            </Grid>

            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component="p" align='center'>
                    &copy; 2024 UrbanCart. All rights reserved.
                </Typography>
                

            </Grid>

        </Grid>
    </div>
  )
}

export default Footer