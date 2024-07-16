import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((i)=> <img src={i.image} alt="lehenga" role='presentation' className='cursor-pointer' />)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
    />
  )
}

export default MainCarousel