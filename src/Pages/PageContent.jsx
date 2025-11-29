import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
    return (
        <div className="pb-18 pt-6 h-[90vh] flex gap-10 items-center" >
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default PageContent