import {ADD_TRANSFER, DELETE_TRANSFER, UPDATE_TRANSFER} from "./actionTypes";
import uuidv4 from 'uuid/v4';

export const createTransfer = (obj) => ({
    type: ADD_TRANSFER,
    payload :  {id: uuidv4(), ...obj}
})

export const deleteTransfer = id => ({
    type: DELETE_TRANSFER,
    payload: id
});

export const udpdateTransfer = obj => ({
    type: UPDATE_TRANSFER,
    payload: obj
});