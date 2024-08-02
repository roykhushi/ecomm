import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const OrderDetails = () => {
  return (
    <div className="px-5 mt-5 lg:px-20">
      <div className="border items-center justify-center shadow-lg text-center p-2">
        <h1 className="font-bold text-xl py-3">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-x-5 space-y-2">
        {[1, 1, 1].map((i) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border hover:shadow-2xl  cursor-pointer"
            sx={{ ml: "15px" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a89cc2c7-0303-4ff0-814e-f0860361c6d0/dri-fit-swift-uv-1-4-zip-running-top-DVr1MD.png"
                  alt="long-sleeve dri-fit"
                />
                <div className="space-y-2">
                  <p className="mt-2">Women Long Sleeve Nike Dri-Fit</p>
                  <p className="space-x-2 text-xs opacity-50">
                    <span>Size : M</span>
                    <span>Color: Black</span>
                  </p>
                  <p>Brand : Nike</p>
                  <p>Rs 1500</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box>
                <StarBorderPurple500Icon
                  sx={{ fontSize: "2rem" }}
                  className="cursor-pointer px-2"
                />
                <span>Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
