import React from 'react'
import Header from 'components/Header/Header'
import Content from 'components/Content/Content'

const Course = ({course}) => {

    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </div>
    )
}

export default Course