/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, AppState } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigation from './RootNavigationContainer';
import {createReduxBoundAddListener} from "react-navigation-redux-helpers";

// get current route name(screen name) from navigatin state
const getCurrentRouteName = (navigationState) => {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
};


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
        };
        this.addListener = createReduxBoundAddListener('root');
    }
    // get current screen (route) name
    getCurrentRoute() {
        const { nav } = this.props;
        const currentRoute = getCurrentRouteName(nav);
        return currentRoute;
    }

    render() {
        return (
            <View style={{ flex: 1, opacity: 1 }}>
                <RootNavigation navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener: this.addListener,
                })}
                />
            </View>
        );
    }
}

AppContainer.propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func,
    navigation: PropTypes.object,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

//export default AppContainer;
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
