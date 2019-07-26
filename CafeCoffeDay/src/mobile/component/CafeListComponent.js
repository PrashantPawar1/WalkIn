/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    FlatList, Image,
} from 'react-native';

import PropTypes from 'prop-types';
import { normalizeFont } from './../../comman/utils';
import PlaceholderImage from '../../comman/images/PlaceholderImage.png'

const { width } = Dimensions.get('window');
const CafeListComponent = (props) => {



    const showImage = (item) => {
        if(item.thumbnail!= "")
        {
            return (
                <Image
                    //source={{uri:item.image}}
                    source={{uri:item.thumbnail}}

                   // source={{uri:"https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                   // }}
                    style={{
                        width: 100,
                        height: 100,
                        marginLeft:20,
                        resizeMode: 'contain',

                    }}
                />
            )
        }else
        {
            return (
                <Image
                    //source = {PlaceholderImage}
                    source={{
                        uri: "https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                    }}
                        style={{
                        width: 100,
                        height: 100,
                        marginLeft:20,
                        resizeMode: 'contain',

                    }}
                />
            )
        }
    }


    const renderItem = (item, index) => {
        const value = index + 1;
        return (
            <View key={'key'+value} style = {item.isSelected ? styles.cartStyle : styles.productStyle}>
                <TouchableOpacity  onPress={() => (props.onRowPress(item))}>
                    <View style={{
                        width:'100%',flexDirection: 'row', height: 100, alignItems: 'center',
                    }}
                    >
                        {showImage(item)}
                        <View style={{
                            flexDirection: 'column', alignItems: 'flex-start',width:'50%'
                        }}
                        >
                        <Text style = {styles.row} ellipsizeMode='tail'>
                            {/*{item.cuisine_name}*/}
                            {item.title}
                        </Text>
                            <Text style = {styles.row} ellipsizeMode='tail'>
                                {/*{item.price}*/}
                                50 $
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.divider} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{width:'100%',height:'100%'}}>
                <FlatList
                    data={props.data}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor = { (item, index) => index.toString() }
                />
            </View>
        </View>
    );
};

CafeListComponent.propTypes = {
    data: PropTypes.array,
    onRowPress: PropTypes.func,
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    divider: {
        height: 1,
        backgroundColor: '#F2F3F8',
    },
    row: {
       // backgroundColor: '#F2F3F8',
       // backgroundColor:'white',
        paddingLeft: 30,
        width:'100%',
        color: '#0F2C5A',
        fontWeight: '600',
        fontSize: normalizeFont(16),
    },
    cartStyle:{
        flex:1,
        backgroundColor:'lightgray'
    },
    productStyle:{
        flex:1,
        backgroundColor:'white'
    }

});

export default CafeListComponent;
