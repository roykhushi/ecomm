import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3'>
        {/* image div */}
        <div className='h-[13rem] w-[10rem]'>
          
            <img className = 'object-cover object-top w-full h-full'  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25c19e95-faba-48e7-97a0-f3e0f0428972/jordan-flight-essentials-85-t-shirt-9XTqRC.png" alt="" />
        </div>

        {/* content div */}
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Men Clothing</h3>
            <p className='mt-3 text-sm text-gray-500'>Men solid black tee</p>
        </div>
    </div>
  )
}

export default HomeSectionCard