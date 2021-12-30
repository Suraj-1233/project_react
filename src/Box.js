import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { icons } from 'react-icons/lib';

const Box=(props)=> {
    return (
        <div className='box'>
          
          <h1>{props.name}</h1>

        </div>
    )
}

export default Box
