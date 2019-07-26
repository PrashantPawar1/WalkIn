import { createSelector } from 'reselect';
import _ from 'lodash';
import cafeListReducer from "../reducers/cafeList";
const cafeData = state => state.cafeListReducer.cafeListData


export const getCCDList = createSelector(
    [cafeData],
    (dataList) => {
        // const cafeList = [];
        // _.each(dataList, (cafeItem ,index) => {
        //     cafeItem. isSelected = false
        //     cafeItem.id = index
        //     cafeList.push(cafeItem);
        // });
        // console.log("Selector Data List :::::::",cafeList)
        return dataList;
    },
);