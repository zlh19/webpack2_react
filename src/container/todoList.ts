import {connect} from 'react-redux'
import { TodoList } from './../components/todoList/todoList'

function mapStateToProps(state) {
  const { todos } =state;
  return { 
    todos:todos.todoss
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