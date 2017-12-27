/// <reference path="../index.d.ts" />

import * as React from 'react';
import { render } from 'react-dom'
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { remToPxFun} from './public/js/model'

import './public/css/reset.scss'

import { TestPage } from './page/testPage/testPage'
import { IndexView as TrainClass} from './container/trainClass'
import appReducer from './reducer'
const store = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
    )
);

remToPxFun()
// 配置路由
render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={TrainClass} />
                <Route path='/testPage' component={TestPage} />
                <Route path='/trainClass' component={TrainClass} />
            </div>
        </HashRouter>
    </Provider>
), document.getElementById('app'));