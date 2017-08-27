import React,{Component} from 'react'
import {Link} from 'react-router-dom';

import './titleCenter.scss';
export default class TitleCenter extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const titleList=this.props.titleList;

    return(
      <div className="title-center">
        <div className="title-wrap">
          {
            titleList.map((item,index)=>{
              return(
                <Link to={item.link} key={index} className={`title-item ${item.current?'current':''}`}>{item.name}</Link>
              )
            })
          }
        </div>
      </div>
    )
  }

}

