import React,{Component} from 'react'
import { connect } from 'react-redux';
import './add.scss';

class Add extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
          <div className="ipt-wrap">
            <input type="text" className="ipt" ref="iptDom"/>
            <button className="btn" onClick={()=>this.addInfor()}>Add</button>
          </div>
      </div>
    )
  }

  addInfor(){
    const {onAdd}=this.props;
    onAdd(this.refs.iptDom.value);
  }

}

export {
  Add
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onAdd: (task) => { 
//       dispatch({ 
//         type: "ADD", 
//         task 
//       }) 
//     }
//   }
// }

// export default connect(() => { return {} }, mapDispatchToProps)(Add);
