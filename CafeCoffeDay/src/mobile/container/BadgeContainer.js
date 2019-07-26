

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as cafeListActionCreator from './../../comman/actions/cafeListAction';

import cartButton from './../../comman/images/shopping-cart.png';
import RoundedButton from '../component/CustomComponent/RoundedButton'
import { normalizeFont } from './../../comman/utils/index';


class BadgeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onCardPress = this.onCardPress.bind(this);
    }

    // Function will navigate to the cart screen.
    onCardPress() {
        console.log("onCardPress")

       // this.props.cafeListAction.selectedCart(true);
        if(this.props.cartCount != 0){
            this.props.cafeListAction.navigateToCartContainer();
        }
    }

    // Badge UI will render according to number of notification cart count.
    render() {
        let badgeUI = null;
        if (this.props.cartCount === 0 || this.props.cartCount === undefined) {
            badgeUI = (
                <View />
            );
        } else {
            badgeUI = (
                <View style={styles.badgeStyle}>
                    <Text allowFontScaling={false} style={styles.badgeTextStyle}>{this.props.cartCount}
                    </Text>
                </View>
            );
        }

        // let badgeUI =  badgeUI = (
        //     <View style={styles.badgeStyle}>
        //         <Text allowFontScaling={false} style={styles.badgeTextStyle}>0
        //         </Text>
        //     </View>
        // );


        return (
            <View style={{ flexDirection: 'column' }}>
                <RoundedButton
                    onPress={() => { this.onCardPress(); }}
                    styles={{ marginRight: 20 }}
                    source={cartButton}
                />
                {badgeUI}
            </View>
        );
    }
}

BadgeContainer.propTypes = {
    cafeListAction: PropTypes.shape({
       // getCartCount: PropTypes.func,
        selectedCart:PropTypes.func,
        navigateToCartContainer: PropTypes.func,
    }),
     cartCount: PropTypes.string,
};

const styles = StyleSheet.create({

    badgeStyle: {
        width: 20,
        height: 20,
        position: 'absolute',
        marginTop: -10,
        marginLeft: 14,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DAF8FA',
        borderRadius: 10,

    },
    badgeTextStyle: {
        fontSize: normalizeFont(10),
        color: 'white',
        fontWeight: '800',
    },
});


const mapStateToProps = state => ({
    //loading: state.app.loading,
     cartCount: state.cafeListReducer.badgeCount,
});

const mapDispatchToProps = dispatch => ({
    cafeListAction: bindActionCreators(cafeListActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BadgeContainer);
