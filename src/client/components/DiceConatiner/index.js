import React, {useState} from 'react';
import Dice from '../Dice';
import Score from '../Score';

const DiceContainer = ({diceCount}) => {
    let playerTotal = 0;
    let monsterTotal = 0;
   
    const output = (
        <>
            <div className='diceConatiner'>
                {new Array(diceCount).fill(0).map((item) => {
                    const value = Math.floor(Math.random() * 6);
                    const diceValue = `&#x268${value}`;
                    
                    playerTotal += value + 1;
                    
                    return <Dice diceValue={diceValue} />
                })}

                <Score
                    playerTotal={playerTotal}
                    monsterTotal={monsterTotal}
                />
                

            </div>

            <div className='diceConatiner'>
                {new Array(diceCount).fill(0).map((item) => {
                    const value = Math.floor(Math.random() * 6);
                    const diceValue = `&#x268${value}`;
                    
                    monsterTotal += value + 1;
                    
                    return <Dice diceValue={diceValue} />
                })}

                <Score
                    playerTotal={playerTotal}
                    monsterTotal={monsterTotal}
                />
            </div>
        </>
    );
    
    return output;
}

export default DiceContainer;