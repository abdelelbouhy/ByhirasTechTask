  
const DiceRoller = (state = {}, action) => {

    switch (action.type) {
        case 'IS_ROLLING':
            return {
                ...state,
                ...action.payload.data,
                isRolling: faltrue,
            };
        default:
            return state;
    }
};

const reducers = {
    DiceRoller,
};

export default reducers;