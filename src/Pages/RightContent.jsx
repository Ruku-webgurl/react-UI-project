import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
    const users = props.users || []

    return (
        <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-6 md:gap-10 p-4 md:p-6 w-full md:w-2/3'>
            {users.map(function (elem, idx) {
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} />
            })}
        </div>
    )
}

export default RightContent