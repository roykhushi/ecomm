import React from 'react'

const HomeWomenClothing = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3'>
        {/* image div */}
        <div className='h-[13rem] w-[10rem]'>
            <img className = 'object-cover object-top w-full h-full'  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5400010b-4fcd-486f-8cfb-0456fd692477/jordan-girlfriend-t-shirt-mBrB58.png" alt="" />
        </div>

        {/* content div */}
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Women's T-shirt</h3>
            <p className='mt-3 text-sm text-gray-500'> Women's Girlfriend T-shirt </p>
        </div>
    </div>
  )
}

export default HomeWomenClothing;