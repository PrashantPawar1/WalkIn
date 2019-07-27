
import React from 'react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import renderer from 'react-test-renderer';
import TestConfig from './../src/TestConfig'
import CafeListContainer from './../src/mobile/container/CafeListViewContainer'

describe('Cafe List Container Snapshot', () => {
    const mockStore = configureStore([createSagaMiddleware]);
    const store = mockStore({
        cafeListReducer: {
            cafeListData: TestConfig.GET_CAFE_RESPONSE_BODY,
            loading:false,
        },
    });
    it('+++capturing Snapshot of Cafe List Container', () => {
        const renderedValue = renderer.create(<CafeListContainer store={store} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    });
});

