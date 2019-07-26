import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from '../../mobile/reducer/index';
import rootSaga from './../sagas/index';

export default function configureStore() {

    const sagaMiddleware = createSagaMiddleware();
    const middleware = createReactNavigationReduxMiddleware(
        'root',
        state => state.nav,
    );
    const store = createStore(rootReducer, applyMiddleware(thunk, middleware,sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}

