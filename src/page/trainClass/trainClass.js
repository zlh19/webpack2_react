import React, { Component } from 'react'
import axios from 'axios'
import './trainClass.scss';

import ClassPanel from '../../components/classPanel/classPanel.js'
import Nav from '../../components/nav/nav.js'
import TitleCenter from '../../components/titleCenter/titleCenter.js'

export default class trainClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleList:[{
          name:'课程',
          link:'/trainClass',
          current:true
        },{
          name:'动感单车',
          link:'/trainBicycle',
          current:false
      }],
      resData:{
         "list":[]
      }
    };
  }

  componentDidMount(){
      axios.get('/json/trainList.json')
            .then((res)=>{
              this.setState({
                resData:{
                  list:res.data.list
                }
              })
            })
            .catch((error)=>{
            })
  }
  render() {
        const lists=this.state.resData.list;
        return(
            <div className="main">
              <TitleCenter titleList={this.state.titleList}></TitleCenter>
              <div className="p-main">
                  {
                    lists.map((value,index)=>{
                      return(
                        <div className="tt_type" key={index}>
                          <div className="tt_title">{value.categoryName}</div>
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
        );
    }
}

