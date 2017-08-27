import React,{Component} from 'react'
import './dialog.scss';

export default class Dialog extends Component{
  constructor(props){
    super(props)
    this.state={
      // visible:false
    }
  }
  tapAgain(){
    this.props.ok()
    // this.setState({
    //   visible:false
    // })
  }
  tapCancel(){
    this.props.cancel()
    // this.setState({
    //   visible:false
    // })
  }
  render(){
    return(
      <div className="modal-mask" style={{display:`${this.props.visible?'table':'none'}`}}>
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <a className="modal-button" onClick={this.tapAgain.bind(this)} style={{background:'#FFEB3B'}}>继续骑行</a>
              <a className="modal-button" onClick={this.tapCancel.bind(this)}>确定退出</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

