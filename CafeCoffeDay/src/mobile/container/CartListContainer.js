
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View,TouchableOpacity,Image,Text ,StyleSheet,Dimensions} from "react-native";
import CafeListViewComponent from '../component/CafeListComponent'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as cafeListActionCreator from './../../comman/actions/cafeListAction';
import BackButton from './../../comman/images/back_button.png'



class CartListContainer extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        color:'black',
                        fontSize:20,
                        fontWeight:'700'
                    }}>
                    Cart List
                </Text>
            </View>
        ),
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.state.params.handleBack()}>
                <Image source={BackButton} style={{ height: 20, width: 20, marginLeft: 16 }} />
            </TouchableOpacity>
        ),
        headerStyle: {
           // backgroundColor: '#629ee4',
            borderBottomWidth: 0,
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
            },
            shadowRadius: 0,
            elevation: 0,
        },
        headerTitleStyle: { alignSelf: 'center' },
    });

    constructor(props){
        super(props)
        this.onBackPress = this.onBackPress.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({
            handleBack: this.onBackPress,
        });
    }

    onRowPress = (item) => {

    }

    onBackPress () {
        this.props.cafeListAction.restCafeList(this.props.cafeListData)
        this.props.cafeListAction.goBack();
    }

    render() {
        return (
            <View style={{width:'100%',height:'100%',borderBottomLeftRadius:10,borderBottomRightRadius:10}} >
                <CafeListViewComponent
                    data={this.props.cartListData}
                    onRowPress={this.onRowPress}
                />
            </View>
        );
    }
}


const style = StyleSheet.create({
    maskBox: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: 'transparent',
    },
});

CartListContainer.propTypes = {
    cafeListData: PropTypes.array,
    navigation: PropTypes.object,
    cafeListAction: PropTypes.shape({
        getCafeList: PropTypes.func,
        goBack:PropTypes.func,
        restCafeList:PropTypes.func
    }),
};

const mapStateToProps = state => ({

    cafeListData: state.cafeListReducer.cafeListData,
    cartListData: state.cafeListReducer.cartListData,
    loading:state.cafeListReducer.loading
});

const mapDispatchToProps = dispatch => ({
    cafeListAction: bindActionCreators(cafeListActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
