import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga"
import rootSaga from "../sagas";
import thunk from "redux-thunk"


const configStore = () => {

    const sagaMiddleWare = createSagaMiddleware();

    const store = createStore(
        rootReducer,

        compose(
        applyMiddleware(sagaMiddleWare),
        // applyMiddleware(thunk)
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    )

    sagaMiddleWare.run(rootSaga)

    return store;
}

export default configStore;