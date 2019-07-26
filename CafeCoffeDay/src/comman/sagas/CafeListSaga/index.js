
import { put,takeLatest ,call} from 'redux-saga/effects';
import {makeApiCall} from './../../services/index';
import _ from 'lodash';
import {
    cafeListFalied,
    cafeListSuccess,
} from './../../actions/cafeListAction';
import config from './../../config';
import Constants from './../../constants/index';



function* handleCafeListServiceStartEvents(){
    try {
        const response = yield call(makeApiCall,`${config.BASE_URL}/getFoods`,'get');
        // dispatch a success action to the store
        console.log("Data List ",response.data.results)
        var cafeList = [];
        _.each(response.data.results,(cafeItem ,index) => {
            cafeItem.isSelected = false
            cafeItem.id = index
            cafeList.push(cafeItem);
        });
       // yield put(cafeListSuccess(response.data));
        yield put(cafeListSuccess(cafeList));


    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(cafeListFalied());
    }
}

export function* watchForCafeListServiceStartEvents() {
    yield takeLatest(Constants.CAFFE_LIST_REQUEST_STARTED, handleCafeListServiceStartEvents);
}
