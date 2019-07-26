
import Constants from './../constants/index';
import _ from 'lodash';
import {navigateToCartList,navigateToBack} from './../../comman/routing'


export const navigateToCartContainer = () => (dispatch) => {
    navigateToCartList(dispatch)
};

export const goBack = () => (dispatch) => {
    navigateToBack(dispatch);
};
// Cafe List Success  Request
export const cafeListSuccess = data => ({
    type: Constants.CAFFE_LIST_SUCCESS,
    payload: data,
});

export const cafeListFalied = () => ({
    type: Constants.CAFE_LIST_REQUEST_FAILED,
    payload: ''
});

export const getCafeList = () => ({
    type: Constants.CAFFE_LIST_REQUEST_STARTED,
    payload: ''
});


export const modifiedCafeList = (selectedObject , cafeList) => {
    const  modifedCafeList = [];
    const productCartList = []
    _.each(cafeList, (cafeItem) => {
          if(cafeItem.id === selectedObject.id){

              if(cafeItem.isSelected == true){
                  cafeItem.isSelected = false
              }else{
                  cafeItem.isSelected = true
              }
          }
        modifedCafeList.push(cafeItem);
    });

      var badgeCount = 0
    _.each(modifedCafeList, (cafeItem) => {
        if(cafeItem.isSelected == true){
            badgeCount = badgeCount + 1
            productCartList.push(cafeItem)
        }
    });
      const cartInfo = {
           badgeCount:badgeCount,
           cartList:modifedCafeList,
           productCartList:productCartList
      }
    return {
        type: Constants.ADD_CART_LIST,
        payload: { data: cartInfo },
    };
}

export const restCafeList = (cafeList) => {
    const  modifedCafeList = [];
    const productCartList = []
    _.each(cafeList, (cafeItem) => {
        cafeItem.isSelected = false
        modifedCafeList.push(cafeItem);
    });

    var badgeCount = 0
    const cartInfo = {
        badgeCount:badgeCount,
        cartList:modifedCafeList,
        productCartList:productCartList
    }
    return {
        type: Constants.ADD_CART_LIST,
        payload: { data: cartInfo },
    };
}

export const selectedCart = data => ({
    type: Constants.CART_SELECTED,
    payload: data,
});

