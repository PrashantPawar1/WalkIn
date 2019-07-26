import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

import { getRoundedButtonHeight } from './../../../comman/utils/index';


const buttonHeight = getRoundedButtonHeight();

const RoundedButton = props => (
    <TouchableOpacity style={[styles.buttonStyle, props.styles]} onPress={props.onPress} onLayout={props.onLayout}>
        <Image
            style={styles.facebookIconStyle}
            source={props.source}
            resizeMode='contain'
        />
    </TouchableOpacity>
);

RoundedButton.propTypes = {
    onPress: PropTypes.func,
    onLayout: PropTypes.func,
    styles: PropTypes.object,
    source: PropTypes.number,
};


const styles = StyleSheet.create({
    buttonStyle: {
        height: buttonHeight,
        width: buttonHeight,
        backgroundColor: '#DFE4EA',
        borderRadius: buttonHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    facebookIconStyle: {
        height: buttonHeight === 30 ? 18 : 14,
        width: buttonHeight === 30 ? 18 : 14,
       // resizeMode: Image.resizeMode.contain,
    },

});

export default RoundedButton;
