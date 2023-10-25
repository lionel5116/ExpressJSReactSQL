import { PRODUCT_DATA } from "./types";
import { setAlert } from './alert';
import  {
    LOGIN_FAIL,
 } from './types';

/*
export const setProductData = (products) => dispatch => {
    dispatch( {
        type: PRODUCT_DATA,
        payload:{products}
    });
};
*/

export const setProductData = (products) => async dispatch => {
   //your server fetch can go here!!!!
    try {
        dispatch({
          type: PRODUCT_DATA,
          payload:products
        });
 
    } catch (err) {
        dispatch(setAlert(err.msg,'danger'))
        dispatch({
            type: LOGIN_FAIL
          })
    }
 };
 