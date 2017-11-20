import React,{Component} from 'react'
import { connect } from 'react-redux';
import './todoList.scss';
import { Lazyload } from './../lazyload/lazyload'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.windowObj={
      size:0,
      elem:[]
    }
  }
  componentDidMount(){
    // this.getElement()
    // window.onscroll=()=>{
    //   this.getWindow()
    // }
  }
  getElement(){
    const infor4 = this.refs.infor4;
    const $windowWrap = this.refs.windowWrap;
    const $inforList = $windowWrap.childNodes;
    console.log($inforList)
    $inforList.forEach((item, index) => {
      this.windowObj.size++
      const obj={}
      obj['dom'] = item
      obj['status'] = false
      this.windowObj['elem'].push(obj)
    })
  }
  getWindow(){
    this.windowObj.elem.map((item, index) => {
      const elemTop = item.dom.getBoundingClientRect().top //元素顶端到可见区域顶端的距离
      const windowSeeHeight = document.documentElement.clientHeight //浏览器可见区域高度。
      if (elemTop <= windowSeeHeight&&!item.status) {
        item['status']=true
        console.log(index)
      }
    })
    
  }
  render(){
    const {todos=[],removeItem}=this.props;
    console.log(this.props,'=====')
    
    return(
      <div>
          <div className="infor-list">
            <ul>
              {
                todos.map((item,index)=>{
                  return (
                    <li onClick={() => { return removeItem(item)}}>{item.task}</li>
                  )
                })
              }
            </ul>
          </div>
          <div style={{height:'100px'}}>
          <Lazyload>
            <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
          </Lazyload>
        </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
          <div style={{ height: '100px' }}>
            <Lazyload>
              <img src="https://www.baidu.com/img/bd_logo1.png" style={{ width: '100px', height: '100px' }} />
            </Lazyload>
          </div>
         
          
          
      </div>
    )
  }

}

export {
  TodoList
}

