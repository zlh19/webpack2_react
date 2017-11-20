import React from 'react'
import { render } from 'react-dom'
import {HashRouter,Route,Link,Switch,hashHistory} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './public/css/reset.scss'

import trainClass from './page/trainClass/trainClass.js'
import friendsList from './page/friendsList/friendsList.js'
import trainBicycle from './page/trainBicycle/trainBicycle.js'
import freeBicycle from './page/freeBicycle/freeBicycle.js'
import login from './page/login/login.js'
import { TestPage} from './page/testPage/testPage.js'

import appReducer from './reducer'
const store = createStore(appReducer);

let unsubscribe = store.subscribe(() =>{
    console.log('+++')
    console.log(store.getState(),'+++')
});
// 配置路由
render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={trainClass} />
                <Route path='/trainClass' component={trainClass} />
                <Route path='/friendsList' component={friendsList} />
                <Route path='/trainBicycle' component={trainBicycle} />
                <Route path='/freeBicycle' component={freeBicycle} />
                <Route path='/login' component={login} />
                <Route path='/testPage' component={TestPage} />
            </div>
        </HashRouter>
    </Provider>
), document.getElementById('app'));