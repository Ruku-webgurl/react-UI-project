import React from 'react'

import 'remixicon/fonts/remixicon.css'


const LeftContent = () => {
    return (
        <div className='h-full flex flex-col justify-between w-1/3' >

            <div className='p-6'>
                <h3 className='text-6xl font-bold mb-7 leading-[1.4]'>Obito <br /> <span className='bg-gray-200'>Loved</span> <br />Rin</h3>
                <p className='text-xl font-medium text-gray-600'>Obito was an Uchiha whose dream was to become Hokage. He Was a member of Team Minato, along with Rin Nohara and Kakashi, He Was sensitive Like Naruto;</p>
            </div>

            <div className='text-8xl'>
                <i className='ri-arrow-right-up-line'></i>
            </div>

        </div>
    )
}

export default LeftContent