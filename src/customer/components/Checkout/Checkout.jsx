import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Shipping Address', 'Order Summary', 'Payment'];

export default function Checkout() {

const [activeStep, setActiveStep] = React.useState(0);

//staying on the same page after refresh
// const location = useLocation();
// console.log(location);
// const search = location.pathname;
// const qs = new URLSearchParams(location.search);
// console.log(querySearch);
// const s = qs.get("step");
// console.log(s);


const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};


  return (
    <div className='p-10 lg:px-20'>
      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}> {steps[activeStep]}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>

          </Box>
          <div className='mt-10'>
            {
              activeStep <= 1 ? <DeliveryAddress /> : <OrderSummary />
            }
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
    
  );
}
