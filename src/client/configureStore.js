import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import createReducer from './reducers';
// import configureReactotron from './configureReactotorn'

export default function configureStore(initialState = {}, history) {
    const enhancers = [];

    // const Reactotron = configureReactotron();

    // enhancers.push(Reactotron.createEnhancer());

    // enhancers.unshift(applyMiddleware(...middlewares));
    const composeEnhancers = composeWithDevTools({});

    const store = createStore(
        createReducer(history),
        initialState,
        composeEnhancers(...enhancers)
    );

    store.injectedReducers = {};

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }

    return store;
}