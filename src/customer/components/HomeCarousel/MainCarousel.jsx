import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const item = mainCarouselData.map((i)=> <img src={i.path} alt="banner" role='presentation' className='cursor-pointer' />)
  return (
    <AliceCarousel
        items={item}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
    />
  )
}

export default MainCarousel