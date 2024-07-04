"use client";

import Image from 'next/image'
import  CustomButton  from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover")

        if(nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth"})
        }
    }

  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
               Car showcase demo
            </h1>
            <p className="hero__subtitle dark:text-gray-400">
               Search, watch and read about your favorite cars.
            </p>
            <p className="hero__subsubtitle dark:text-gray-400">
               Sorry for missing pictures, but api key expired.
            </p>
            <CustomButton 
                title="Read more"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero" fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero