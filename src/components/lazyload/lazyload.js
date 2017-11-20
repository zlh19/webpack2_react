import React,{Component} from 'react'
import './lazyload.scss';

class Lazyload extends Component{
  
  constructor(props){
    super(props)
    this.state={
      status:false,
      rndNumber:0
    }
  }
  componentDidMount(){
    const rndNumber=Math.random()
    this.setState({
      rndNumber: rndNumber
    })
    // this.getWindow()
    window.onscroll=()=>{
      this.getWindow()
    }
  }
  getElement(){
    const { children } = this.props
    return (
      <div>
        {
          React.Children.map(children, function (childDom) {
            return (
              <div>{childDom}</div>
            )
          })
        }
      </div >
    )

  }
  getWindow() {
      const elemTop = this.refs[this.state.rndNumber].getBoundingClientRect().top //元素顶端到可见区域顶端的距离
      const windowSeeHeight = document.documentElement.clientHeight //浏览器可见区域高度。
      const status = this.state.status;
      console.log(elemTop,'++')
      if (elemTop <= windowSeeHeight && !status) {
        this.setState({
          status:true
        })
      }
  }
  render(){
    if (this.state.status){
      return (
        <div ref={this.state.rndNumber}>{this.getElement()}</div>
      )
    }else{
      return(
        <div ref={this.state.rndNumber}>{this.state.rndNumber}</div>
      )
    }
  }
}

export {
  Lazyload
} 



