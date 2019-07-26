import { NavigationActions } from 'react-navigation';

export const navigateToCartList = (dispatch) => {
    dispatch(NavigationActions.navigate({
        routeName: 'CartList',
    }));
};


export const navigateToBack = (dispatch) => {
    dispatch(NavigationActions.back());
};