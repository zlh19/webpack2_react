import {combineReducers} from 'redux'

import { todos } from './todo'
import { classPanel } from './classPanel'

const appReducer=combineReducers({
    todos,
    classPanel
})

export default appReducer

