import React from 'react';

const validation = (props) => {
    const outputText = (props.textLength < 5) ? "Text too short" : "Text long enough";
    return <p>{outputText}</p>
};

export default validation;