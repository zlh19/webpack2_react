import {connect} from 'react-redux'
import { TodoList } from './../components/todoList/todoList'

function mapStateToProps({todos} =state) {
  return { 
    todos:todos.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem:(item)=>{
      dispatch({
        type:'REMOVE_ITEM',
        id:item.id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);