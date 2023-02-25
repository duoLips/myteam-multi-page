import React from 'react'
import Button from './Button.jsx'

const GetStarted = () => {
    return (
        <div className='get-started'>
            <div className="wrapper">
                <div className='get-started--container'>
                    <h2 >Ready to get started?</h2>
                    <Button btnClass="button button_primary" btnTitle="contact us" />
                </div>
            </div>
        </div>
    )
}

export default GetStarted
