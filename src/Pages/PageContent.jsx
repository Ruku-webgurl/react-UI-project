import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
    return (
        <div className="pb-18 pt-6 h-auto md:h-[90vh] flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center" >
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default PageContent