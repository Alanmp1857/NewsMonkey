import React, { Component } from 'react'
import Snake from './Snake.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={Snake} alt="loading" />
            </div>
        )
    }
}

export default Spinner