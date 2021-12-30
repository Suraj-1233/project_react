import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { icons } from 'react-icons/lib';

const Bigbox=(props)=> {
    return (
        <div className='box1'>
          
          <p>{props.name}</p>

        </div>
    )
}

export default Bigbox
