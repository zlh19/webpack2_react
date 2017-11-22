import {connect} from 'react-redux'
import { Add } from './../components/add/add'


function mapDispatchToProps(dispatch) {
  return {
    onAdd: (iptInfor) => { 
      dispatch({ 
        type: "ADD", 
        iptInfor 
      }) 
    }
  }
}

export default connect(() => { return {} }, mapDispatchToProps)(Add);