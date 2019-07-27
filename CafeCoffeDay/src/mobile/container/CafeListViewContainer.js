
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View,Text ,StyleSheet,Dimensions,ActivityIndicator} from "react-native";
import CafeListViewComponent from '../component/CafeListComponent'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as cafeListActionCreator from './../../comman/actions/cafeListAction';
import {getCCDList} from "./../../comman/selector/cafeListSelector";
import BadgeContainer from './BadgeContainer'



class CafeListViewContainer extends Component {


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
                    Product List
                </Text>
            </View>
        ),
        headerLeft: (
           null
        ),
        headerRight: (
            <View style={{ flexDirection: 'row', paddingRight: 0 }}>
                <BadgeContainer />
            </View>
        ),
        headerStyle: {
            //backgroundColor: '#629ee4',
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
        // this.state = {
        //     cartList : this.props.cafeListData?this.props.cafeListData:[]
        // }
        //this.onCartPress = this.onCartPress.bind(this);
    }

    componentDidMount() {
        // this.props.navigation.setParams({
        //     cartPress: this.onCartPress,
        // });
       // this.props.cafeListAction.selectedCart(false);
        this.props.cafeListAction.getCafeList();
    }

    // onCartPress () {
    //     console.log("On Cart Press")
    // }

    // onCartPress = () => {
    //    console.log("On Cart Press")
    // }
    onRowPress = (item) => {
        this.props.cafeListAction.modifiedCafeList(item,this.props.cafeListData)
        // const finalRegisterObject = Object.assign(districtObject, districtCustomObje);
    }

    render() {
        return (
             <View style={{flex:1}} >
                 {
                     this.props.loading ?
                         <View style={style.maskBox}>
                             <ActivityIndicator
                                 animating = {true}
                                 color = 'black' // color of your choice
                                 size="large" />
                         </View>
                         :
                         <CafeListViewComponent
                             data={this.props.cafeListData}
                             onRowPress={this.onRowPress}
                         />
                 }
             </View>
        );
    }
}


const style = StyleSheet.create({
    maskBox: {
       // position: 'absolute',
       //  width: Dimensions.get('window').width,
         height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: 'transparent',
    },
});

CafeListViewContainer.propTypes = {
    cafeListData: PropTypes.array,
    navigation: PropTypes.object,
    cafeListAction: PropTypes.shape({
        getCafeList: PropTypes.func,
        modifiedCafeList:PropTypes.func,
        selectedCart:PropTypes.func
    }),
};

const mapStateToProps = state => ({

   // cafeListData: state.cafeListReducer.cafeListData,
    cafeListData: getCCDList(state),
    loading:state.cafeListReducer.loading,
});

const mapDispatchToProps = dispatch => ({
    cafeListAction: bindActionCreators(cafeListActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CafeListViewContainer);
