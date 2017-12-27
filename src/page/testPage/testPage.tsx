import * as React from 'react'
import { Component } from 'react'
import { Observable } from 'rxjs/Rx';

import axios from 'axios'
import './testPage.scss';

import Add from '../../container/addTodo'
import TodoList from '../../container/todoList'
import ClassPanel from '../../container/classPanel'

class TestPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="main">
                <div id="J_LinkBuy" style={{'display':'none'}}>123</div>
                <Add></Add> 
                <TodoList></TodoList>
                <ClassPanel></ClassPanel>
            </div>
        )
    }
}

export{
    TestPage
}

