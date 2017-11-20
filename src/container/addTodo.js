import {connect} from 'react-redux'
import { Add } from './../components/add/add'


function mapDispatchToProps(dispatch) {
  return {
    onAdd: (task) => { 
      dispatch({ 
        type: "ADD", 
        task 
      }) 
    }
  }
}

export default connect(() => { return {} }, mapDispatchToProps)(Add);