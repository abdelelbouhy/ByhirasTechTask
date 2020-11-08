import React, {useEffect, useState} from 'react';

const Button = ({handleOnClick}) => {
    return (<button onClick={handleOnClick} className='button'>Play</button>)
}

export default Button