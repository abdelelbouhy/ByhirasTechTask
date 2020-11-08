import React, {useEffect, useState} from 'react';
import Dice from '../Dice'

const DiceContainer = ({diceCount}) => {
    const arr = [];
    
    return (
        <div className='diceConatiner'>
            {new Array(diceCount).fill(0).map((item) => {
                const value = Math.floor(Math.random() * 6);
                const diceValue = `&#x268${value}`;
                
                arr.push(value + 1);
                
                return <Dice diceValue={diceValue} />
            }
            )}
            {console.log(arr, arr.reduce((total, currentValue) => total + currentValue, 0))}
        </div>
    )
}

export default DiceContainer;