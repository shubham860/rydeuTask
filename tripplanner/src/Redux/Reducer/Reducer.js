import { ADD_TRANSFER, DELETE_TRANSFER, UPDATE_TRANSFER } from '../Actions/actionTypes';

const Reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TRANSFER:
            return [...state, action.payload];
        case DELETE_TRANSFER:
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}

export default Reducer;