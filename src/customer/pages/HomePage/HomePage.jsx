import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import HomeShoesCarousel from '../../components/HomeShoesCarousel/HomeShoesCarousel'
import HomeWomenCarousel from '../../components/HomeWomenCarousel/HomeWomenCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />

        <div className='space-y-10 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel sectionName={"Men's Clothing"}/>
          <HomeShoesCarousel sectionName={"New Arrivals"}/>
          <HomeWomenCarousel sectionName={"Women's Clothing"}/>
        </div>
    </div>
    
  )
}

export default HomePage