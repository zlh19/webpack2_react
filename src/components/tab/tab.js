import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './tab.scss';



class Tabs extends Component{
  constructor(props){
    super(props)
    this.state={
      current:0
    }
  }
  
  getCurrentTitle(index){
    return this.state.current === index ? 'current':''
  }
  getCurrentContent(index){
    return this.state.current === index ? 'tab-content current' : 'tab-content'
  }
  switchTitle(index){
    this.setState({
      current: index
    })
    this.props.switchTitle && this.props.switchTitle(index)
  }
  render(){
    return(
      <div className="tab-main" style={{'width':this.props.width}}>
        <div className="tab-title">
          <ul>
          {
            React.Children.map(this.props.children, (elem, index) => {
                return(
                  <li className={this.getCurrentTitle(index)} onClick={() => this.switchTitle(index)}>{elem.props.name}</li>
                )
            })
          }
          </ul>
        </div>
        {
          React.Children.map(this.props.children,(elem,index)=>{
            return(
              <div className={this.getCurrentContent(index)}>{elem}</div>
            )
              
          })
        }
      </div>
    )
  }

}

Tabs.propTypes = {
  switchTitle: PropTypes.func,
  width: PropTypes.number
}

class Tab extends Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>{this.props.children}</div>
      )
    }
}

export {
  Tabs,
  Tab
}
