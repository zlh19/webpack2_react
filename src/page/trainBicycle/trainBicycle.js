import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './trainBicycle.scss'

import Nav from '../../components/nav/nav.js'
import TitleCenter from '../../components/titleCenter/titleCenter.js'
import ClassPanel from '../../components/classPanel/classPanel.js'

export default class trainBicycle extends Component{
  constructor(props){
    super(props)
    this.state={
        // 标题
        titleList:[{
          name:'课程',
          link:'/trainClass',
          current:false
        },{
          name:'动感单车',
          link:'/trainBicycle',
          current:true
        }],
        // 返回信息
        resData:{
          // 骑行
          bicycleData:{
            distanceKm:'',
            list:[]
          }
        },
        scanState: 0, // state: 1 未扫码 ; 2 扫码成功，未开始骑行;
        goFreePage:0
    }
  }

  componentDidMount(){
      axios.get('/json/trainBicycle.json')
            .then((res)=>{
              this.setState({
                resData:{
                  bicycleData:res.data.bicycleData
                }
              })
            })
            .catch((error)=>{
            })
  }
  // 状态点击
  scanClick(value){
    this.setState({
      scanState:value
    })
  }

  // 过滤公里数
  switchData(data){
    if(data==0){
      const newdata='0.0'
      return newdata
    }else{
      return data/1000
    }
  }

  clickFreePage(){
    this.setState({
      goFreePage:true
    })
  }

  render(){
    const lists=this.state.resData.bicycleData.list
    if(this.state.goFreePage){
      return <Redirect to='/freeBicycle' push />
    }

    return(
      <div className="tb-page">
        <TitleCenter titleList={this.state.titleList}></TitleCenter>
        <div className="main">
          <div className="tb-circle">
            <div className="tb-kiloes">
              <div className="tb-desc">骑行里程（公里）</div>
              <div className="tb-result">{this.switchData(this.state.resData.bicycleData.distanceKm)}</div>
            </div>
            <div className="tb-buttons" style={{display:`${this.state.scanState==0?'block':'none'}`}}>
              <a href="javascript:;" className="tb-button" onClick={this.scanClick.bind(this,1)} style={{width: '220px'}}><i></i><span>扫码骑单车</span></a>
            </div>
            <div className="tb-buttons" style={{display:`${this.state.scanState==1?'block':'none'}`}}>
              <a href="javascript:;" className="tb-button tb-button-ghost" onClick={this.scanClick.bind(this,0)}>断开连接</a>
              <a href="javascript:;" className="tb-button" style={{marginRight: '15px'}} onClick={this.clickFreePage.bind(this)}>自由骑行</a>
            </div>
          </div>
          {
            lists.map((value,index)=>{
              return(
                <div className="tb-trains" key={index}>
                  <div className="tb-title">{value.categoryName}</div>
                  <div className="tc_classes">
                    <ClassPanel lesson={value.lesson}></ClassPanel>
                  </div>
                </div>
              )
            })
          }
        </div>
        <Nav state="0"></Nav>
      </div>
    )
  }
}

