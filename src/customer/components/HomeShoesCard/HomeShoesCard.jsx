import React from 'react'

const HomeShoesCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-xl overflow-hidden w-[15rem] mx-3'>
        {/* image div */}
        <div className='h-[13rem] w-[10rem]'>
            <img className = 'object-cover object-top w-full h-full'  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/219f69db-4cda-4d4f-86f0-7afd036d23c3/zoom-vomero-5-shoes-gwmf2m.png" alt="" />
        </div>

        {/* content div */}
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Women Shoes</h3>
            <p className='mt-3 text-sm text-gray-500'> Zoom Vomero </p>
        </div>
    </div>
  )
}

export default HomeShoesCard