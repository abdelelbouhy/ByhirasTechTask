export const setDiceIsRolling = (value) => ({
    type: 'IS_ROLLING',
    value,
});

export const setDiceTotal = (payload) => ({
    type: 'SET_DICE_TOTAL',
    payload,
});
