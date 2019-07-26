
import { all, fork } from 'redux-saga/effects';

import * as cafeListSaga from '../sagas/CafeListSaga';

export default function* rootSaga() {
    yield all(
        [
            ...Object.values(cafeListSaga),
        ].map(fork)
    );
}
