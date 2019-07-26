
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import SplashComponent from '../component/SplashComponent';


class SplashContainer extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.getLoginStatus();
    }

    // Redirect to login or CafeListScreen on checking login status.
    getLoginStatus() {
        let navActions;
        navActions = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CafeList' }),
            ],

        });
        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <SplashComponent />
        );
    }
}

SplashContainer.propTypes = {
    navigation: PropTypes.object,
};

export default SplashContainer;
