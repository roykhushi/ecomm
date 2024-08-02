import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg hover:shadow-2xl border '>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item sx={6}>
                <div className='flex cursor-pointer'>
                    <img className="w-[5rem] h-[5rem] object-cover" src="https://lp2.hm.com/hmgoepprod?set=source[/bc/fd/bcfd3f19e72773a735a3261355f490f6e2554238.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]" alt="img" />
                    <div className='ml-5 space-y-2'>
                        <p>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-60 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-60 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>Rs 1999</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered on March 3 2024
                    </span>
                    
                    </p>
                    <p className='text-xs ml-6'>
                        Your Item Has Been Delivered
                    </p>
                </div>}
                
                {false && <p>
                    <span>
                        Expected Delivery on March 4
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard