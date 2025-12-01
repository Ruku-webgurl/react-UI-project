import React from 'react'

const RightCardContent = (props) => {

    return (
        <div className="absolute top-0 left-0 h-full w-full p-4 md:p-8 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center font-semibold">{props.id + 1}</h2>
            <div>
                <p className='text-base md:text-xl leading-normal text-white mb-6 md:mb-10'>{props.intro}</p>


                <div className='flex justify-between items-center space-x-2'>
                    <button className='bg-blue-500 text-white font-medium px-4 md:px-8 py-2 rounded-full text-sm md:text-lg'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-3 py-2 rounded-full text-sm md:text-lg'><i className='ri-arrow-right-line '></i></button>
                </div>
            </div>

        </div>

    )
}

export default RightCardContent