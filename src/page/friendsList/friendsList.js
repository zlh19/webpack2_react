import React, { Component } from 'react'
import axios from 'axios'
import './friendsList.scss';

import Nav from '../../components/nav/nav.js'


export default class friendsList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      resData:{
	         "topic":[]
	      }
	    };
	}
	componentDidMount(){
	      axios.get('/json/friendsList.json')
	            .then((res)=>{
	              this.setState({
	                resData:{
	                  topic:res.data.list
	                }
	              })
	            })
	            .catch((error)=>{
	            })
	}
	render(){
		const lists=this.state.resData.topic;
		return(
			<div className="main">
				<div className="m_list">
			          <ul className="clearfix">
			          	{
				          	lists.map((item,index)=>{
				          		return(
				          			<li key={index}>
						              <div className="p_pic_wrap"><img className="load-img" src={item.img}/></div>
						              <div className="p_title">{item.memo}</div>
						              <div className="p_infor">
						                <div className="u_user">
						                	<i style={{backgroundImage:`url(${item.headImg})`}}></i><span>{item.userNickname}</span>
						                </div>
						                <div className={`u_zang ${item.selfLike==1?'current':''}`}>
						                  <i></i><span className="submitBtnClickFun">{item.likeCount}</span>
						                </div>
						              </div>
						            </li>
				          		)
				          	})
			          	}
			          </ul>
	        	</div>
	        	<Nav state="2"></Nav>
	    	</div>
		)
	}
}
