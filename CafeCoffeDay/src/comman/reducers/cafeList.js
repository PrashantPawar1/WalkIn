
import { createReducer } from './../utils/index';
import Constant from '../constants/index';

const initialState = {
    loading: false,
    loadingMessage: '',
    cafeListData:[],
    cartListData:[],
    badgeCount:0,
    isCartSelected:false
};

export default createReducer(initialState, {
    [Constant.CAFFE_LIST_REQUEST_STARTED]: (state, payload) => Object.assign({}, state, {
        loading: true,
        loadingMessage: payload,
    }),
    [Constant.CAFE_LIST_REQUEST_FAILED]: state => Object.assign({}, state, {
        loading: false,
        loadingMessage: '',
    }),
    [Constant.CAFFE_LIST_SUCCESS]: (state, payload) => Object.assign({}, state, {
        cafeListData: payload,
        loading: false,
    }),
    [Constant.ADD_CART_LIST]: (state, payload) => Object.assign({}, state, {
        cafeListData: payload.data.cartList,
        badgeCount:payload.data.badgeCount,
        cartListData: payload.data.productCartList,
    }),
    [Constant.CART_SELECTED]: (state, payload) => Object.assign({}, state, {
        isCartSelected: payload
    }),
});

