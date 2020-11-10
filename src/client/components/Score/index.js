import React, {useState} from 'react';

export default ({playerTotal, monsterTotal}) => {
    const [playerScore, setPlayerScore] = useState(100);
    const value = playerTotal > monsterTotal ? playerScore : playerScore - (monsterTotal  - playerTotal)

    return (
        <div>{`Score: ${value}`}</div>
    );
}