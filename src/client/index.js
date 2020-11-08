  
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Home from './components/Home/index'
import configureStore from './configureStore'

const initialState = {};
const store = configureStore(initialState);

const App = () => <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Home} exact={true}  />
    </Router>
</Provider>;

ReactDOM.render(<App />, document.querySelector('#container'));