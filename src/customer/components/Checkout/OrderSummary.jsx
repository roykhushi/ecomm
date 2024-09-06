import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
      </div>
      <div>
      <div className="lg:grid grid-cols-2 relative py-5">
        <div className="col-span-1">
          {[1, 1, 1].map((i) => (
            <CartItem />
          ))}{" "}
        </div>
        <div className="px-5 py-5 sticky h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-3 px-3 pt-2">
              Order Details
            </p>
            <hr />
            <div className="flex justify-between pt-3 px-3 text-black">
              <span className="font-semibold">Price</span>
              <span>Rs1999</span>
            </div>

            <div className="flex justify-between pt-3 px-3  text-black">
              <span className="font-semibold">Delivery Charges : </span>
              <span>Rs 50</span>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between pt-3 px-3  text-black">
              <span className="font-bold pb-4">Total Amount : </span>
              <span className="text-green-500">Rs 2050</span>
            </div>
          </div>
          <Button
            className="w-full"
            variant="contained"
            sx={{ px: "2rem", py: "1rem", mt: "20px" }}
            type="submit"
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary