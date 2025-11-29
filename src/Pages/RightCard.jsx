import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    // console.log(props.img);
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80  rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} />
            <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />


        </div>
    )
}

export default RightCard