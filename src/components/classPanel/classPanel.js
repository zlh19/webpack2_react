import React, { Component } from 'react'
import './classPanel.scss';
export default class ClassPanel extends Component{
  changeTimer(timer){
    return parseInt(timer/60)
  }
  render(){
    const lesson=this.props.lesson
    return(
      <div>
        {
          lesson.map((value,index)=>{
            return(
              <div className="tc_class" key={index} style={{backgroundImage:`url(${value.img})`}}>
                <div className="tc_title">{value.lessonName}</div>
                <div className="tc_desc">{this.changeTimer(value.totaltimeDesc)} 分钟 {value.calorie} kcal</div>
              </div>
            )
          })
        }
      </div>
    )

  }
  
}

