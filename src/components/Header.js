import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    let counter = 0;
    const onClick = (e) => {
        
        counter ++;
        console.log(counter)
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
        

    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// const headingStyle= {
//     backgroundColor: 'red',
//      color: 'white',
// }

export default Header

