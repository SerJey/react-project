import React from 'react';
import './Char.css'

const char = (props) => {
    return <div className="Char" onClick={props.click}>{props.symbol}</div>
};

export default char;