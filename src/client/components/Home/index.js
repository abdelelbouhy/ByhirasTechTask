import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from "react-redux";
import HomeStyle from './style';
import Button from '../Button';
import DiceConatiner from '../DiceConatiner';

const Home = () => {
    const handleOnClick = useCallback(() => console.log(7777))
    const DICE_COUNT = 2;

    return (
        <HomeStyle>
            <div>
                player
                <DiceConatiner diceCount={DICE_COUNT} name='player' />
            </div>
            <div>
                monster
                <DiceConatiner diceCount={DICE_COUNT} nmae='monster' />
            </div>
            <Button handleOnClick={handleOnClick} />
        </HomeStyle>)
};

export default Home;