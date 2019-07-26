
import { Dimensions, Platform, PixelRatio } from 'react-native';
import _ from 'lodash';

const { height, width } = Dimensions.get('window');
export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export const createReducer = (initialState, reducerMap) => (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];

    return reducer
        ? reducer(state, action.payload)
        : state;
};


export const checkStatus = (response) => {
    if (!response.ok) { // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        error.statusCode = response.status;
        throw error;
    }
    return response;
};

export const getAccoladeObject = (id, accolades) => {
    const filteredObjects = _.filter(accolades, data => data.accoladeId === id);
    if (filteredObjects.length > 0) {
        return filteredObjects[0];
    }
    return null;
};


export const parseJSON = response => response.json().catch(() => ({}));

export function parseError(response) {
    return response.json();
}

export function normalizeFont(size) {
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size));
    }
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
}

export const isIphoneX = () => (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
);

export const getRoundedButtonHeight = () => {
    let buttonHeight = 30;
    if (Platform.OS === 'ios') {
        if (height === 568) {
            buttonHeight = 24;
        } else {
            buttonHeight = 30;
        }
    }
    return buttonHeight;
};
