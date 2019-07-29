/**
 * Created by Rahul Nakate on 17/05/18
 */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as actions from './../src/comman/actions/cafeListAction';
import Constants from './../src/comman/constants/index';
import config from './../src/comman/config';
import createSagaMiddleware from 'redux-saga';
import TestConfig from './../src/TestConfig'
//
//
//
// const middlewares = [createSagaMiddleware];
// const mockStore = configureMockStore(middlewares);
//
// describe('Signup Actions', () => {
//
//     it('get Cafe List API', async () => {
//         fetchMock
//             .once(`${config.BASE_URL}`, TestConfig.GET_CAFE_RESPONSE_BODY);
//         const expectedActions = [
//             { type: Constants.CAFFE_LIST_REQUEST_STARTED, payload: '' },
//             {
//                 type: Constants.CAFFE_LIST_SUCCESS,
//                 payload: { data: TestConfig.GET_CAFE_RESPONSE_BODY },
//             }
//         ];
//         const store = mockStore();
//         await store.dispatch(actions.getStateAPIRequest()).then(() => {
//             expect(store.getActions()).toEqual(expectedActions);
//         });
//     });
// });
