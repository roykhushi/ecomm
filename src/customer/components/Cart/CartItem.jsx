import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center border">
        <div className="w-[15rem] h-[15rem] lg:w-[15rem] lg:h-[15rem] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="https://lp2.hm.com/hmgoepprod?set=source[/bc/fd/bcfd3f19e72773a735a3261355f490f6e2554238.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]"
            alt="hnm jeans"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold ">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-60"> Size: M</p>
          <p className="opacity-60 mt-2">Sold by : H&M</p>
          <p className="font-semibold">Rs 1999</p>

          <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="py-1 px-9 border rounded-sm">
                Qty:  1
              </span>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div>
              <Button className="mr-5">remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
