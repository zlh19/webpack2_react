import {combineReducers} from 'redux'

import { todos } from './todo.js'

const appReducer=combineReducers({
    todos
})

export default appReducer

