  
const diceRoller = (state = {}, action) => {

    switch (action.type) {
        case 'IS_ROLLING':
            return {
                ...state,
                diceIsRolling: action.value,
            };
        case 'SET_DICE_TOTAL':
            const {name, total} = action.payload;
            return {
                ...state,
               [name]: total,
            };
        default:
            return state;
    }
};

const reducers = {
    diceRoller,
};

export default reducers;