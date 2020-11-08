import React, {useEffect, useState} from 'react';
import dompurify from 'dompurify';

const Dice = ({diceValue}) => {
    const sanitizer = dompurify.sanitize;

    return (<div className='dice'  dangerouslySetInnerHTML={{__html: sanitizer(diceValue)}} />);
}

export default Dice;