import { Step, StepLabel, Stepper} from '@mui/material'
import React from 'react'

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full px-5 lg:px-20'>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label)=><Step>
            <StepLabel sx={{fontSize:"44px", color:"black"}}>{label}</StepLabel>
          </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker