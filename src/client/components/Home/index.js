import React, {Component} from 'react';
import HomeStyle from './style';
import Button from '../Button';
import DiceConatiner from '../DiceConatiner';
import {connect} from 'react-redux';
import {setDiceIsRolling, setDiceTotal} from '../../redux/actions';

class Home extends Component {
    playerScore = 100;
    monsterScore = 100;

    handleOnClick = () => {
        this.props.dispatch(setDiceIsRolling(false));
        this.props.dispatch(setDiceIsRolling(true));
    };

    setDiceTotal = ({total, name}) => {
        this.props.dispatch(setDiceTotal({total, name}));
    }

    updateScore = ({player, monster}) => {
        this.playerScore = player;
        this.monsterScore = monster;
    }

    render() {
        const DICE_COUNT = 2;
       
        return (
            <HomeStyle>
                {this.props.diceIsRolling && (
                <>
                    <div>
                        player
                        <DiceConatiner 
                            diceCount={DICE_COUNT} 
                            name='player'
                            setDiceTotal={this.setDiceTotal}
                            updateScore={this.updateScore}
                            playerScore={this.playerScore}
                            monsterScore={this.monsterScore}
                        />
                    </div>
                
                </>
                )        
                }
                <Button handleOnClick={this.handleOnClick} />
            </HomeStyle>)
    }
}

const mapStateToProps = (state) => {
    const player = state.diceRoller.player;
    const diceIsRolling = state.diceRoller.diceIsRolling;

    return {
        diceIsRolling,
        player,
    }
};

export default connect(mapStateToProps)(Home);