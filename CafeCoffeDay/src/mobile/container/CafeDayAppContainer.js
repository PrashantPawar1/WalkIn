
import React, { Component } from 'react';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import {StyleSheet , View} from "react-native";
import configureStore from '../../comman/store/configureStore';

const store = configureStore();

type Props = {};

class CafeDayAppContainer extends Component<Props> {
    render() {

        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default CafeDayAppContainer;