import React, { Component } from 'react'
import './freeBicycle.scss';
import moment from 'moment'

import PressButton from '../../components/PressButton/PressButton.js'
import Dialog from '../../components/dialog/dialog.js'


export default class freeBicycle extends Component{
  constructor(props){
    super(props)
    this.state={
        // 返回信息
        resData:{
          // 骑行
          bicycleIndexData:{
            categorys:[],
            distanceKm:'',
            haveBikeFlag:''
          }
        },
        train:{
          duration:0,
          startTime:0
        },
        bicycleTimer:0,
        bicycleState: 3, // state: 1 未扫码 ; 2 扫码成功，未开始骑行; 3 准备骑行; 4 骑行中; 5 骑行暂停
        minDuration:60,
        courseStatus:true,
        showModal: false
    }
  }
  confirmExit() {
    if(this.state.train.duration<this.state.minDuration){
      this.setState({
        showModal:true
      })
    }else{
      
    }
  }
  // 开始按钮
  tapBegain(){
    this.renderBicycleData();
   
    const startTime=new Date()
    this.setState({
      train:{
        duration:0,
        startTime:startTime
      },
      bicycleState:4
    })
  }
  // 继续
  tapAgain(){
    this.setState({
      courseStatus:true,
      bicycleState:4
    })
    this.renderBicycleData();
  }
  // 暂停
  tapPause(){
    clearInterval(this.state.bicycleTimer)
    this.setState({
      courseStatus:false,
      bicycleState:5
    })
  }

  changeTimer(value){
     return moment.utc(value * 1000).format("HH:mm:ss")
  }

  dialogOk(){
    this.setState({
        showModal:false
    })
  }

  dialogCancel(){
    this.setState({
        showModal:false
    })
  }

  // 渲染内容
  renderBicycleData(){
    const bicycleTimer=setInterval(()=>{
      if(!this.state.courseStatus){
        clearInterval(this.state.bicycleTimer)
      }
      const startTime=this.state.train.startTime
      const duration=this.state.train.duration+1
      this.setState({
        train:{
          startTime:startTime,
          duration:duration
        }
      })
    },1000)

    this.setState({
      bicycleTimer:bicycleTimer
    })
  }

  render(){
    return (
      <div className="tb-page">
        <div className="tfb-page">
          <div className="tfb-header">
            <div className="tfb-kiloes">111</div>
            <div className="tfb-kiloes-desc">km</div>
          </div>
          
          <div className="tfb-params">
            <div className="tfb-param" style={{width:'36%'}}>
              <div className="tfb-param-result">222</div>
              <div className="tfb-param-desc" style={{left:'4px'}}>速度（km/h）</div>
            </div>
            
            <div className="tfb-param" style={{width:'32%'}}>
              <div className="tfb-param-result">333</div>
              <div className="tfb-param-desc" style={{left:'4px'}}>燃脂量（kcal）</div>
            </div>
            
            
            <div className="tfb-param" style={{width:'32%'}}>
              <div className="tfb-param-result">1</div>
              <div className="tfb-param-desc">阻力</div>
            </div>
          </div>
          
          <div className="tfb-result">
            <div className="tfb-result-time">{this.changeTimer(this.state.train.duration)}</div>
            <div className="tfb-result-desc">用时</div>
          </div>
          
          <div style={{paddingTop:'32px',display:`${this.state.bicycleState==3?'block':'none'}`}}>
            <a className="tfb-button" onClick={this.tapBegain.bind(this)}>开始</a>
          </div>

          <div style={{paddingTop:'32px',display:`${this.state.bicycleState==4?'block':'none'}`}}>
            <a className="tfb-button" onClick={this.tapPause.bind(this)}>暂停</a>
          </div>
          
          <div style={{paddingTop:'61px',display:`${this.state.bicycleState==5?'block':'none'}`}}>
            <a className="tfb-button tfb-button-small" style={{marginRight:'95px'}} onClick={this.tapAgain.bind(this)}>继续</a>
            <PressButton longpress={this.confirmExit.bind(this)}><div>长按</div><div>结束</div></PressButton>
          </div>
          
          <Dialog visible={this.state.showModal} ok={this.dialogOk.bind(this)} cancel={this.dialogCancel.bind(this)}>你这次训练时间太短了，无法保存。你真的尽力了吗？</Dialog>
        </div>
      </div>
    )
  }
}
