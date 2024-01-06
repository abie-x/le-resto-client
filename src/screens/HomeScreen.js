import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

const HomeScreen = () => {
    return (
        <div className='bg-black w-screen h-screen py-5 text-white'>
            <div className='w-full h-full  text-white px-8 py-4'>
                <Navbar isProfile={true}/>
                <div className='w-full h-40 p-6 mt-4'>
                    <h3 className='text-lg font-medium mb-2'>Find your perfect ambience</h3>
                    <div className='flex justify-start items-center'>
                        <img src='romantic.png' className='w-24 h-24 object-contain mr-2' />
                        <img src='livemusic.png' className='w-24 h-24 object-contain mr-2' />
                        <img src='retro.png' className='w-24 h-24 object-contain mr-2' />
                        <img src='sportsbar.png' className='w-24 h-24 object-contain mr-2' />
                        <img src='family.png' className='w-24 h-24 object-contain mr-2' />
                    </div>
                </div>
                <div className='w-full h-72 p-6'>
                    <h3 className='text-lg font-medium mb-2'>Explore restaurents by cuisine</h3>
                    <div className=' w-full grid grid-cols-6 gap-y-2'>
                        <img src='vegetarian.png' className='w-72 h-40 object-contain' />
                        <img src='ricedishes.png' className='w-72 h-40 object-contain' />
                        <img src='bbq.png' className='w-72 h-40 object-contain' />
                        <img src='vegetarian.png' className='w-72 h-40 object-contain' />
                        <img src='vegetarian.png' className='w-72 h-40 object-contain' />
                        <img src='vegetarian.png' className='w-72 h-40 object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen