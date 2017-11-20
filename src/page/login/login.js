import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import './login.scss';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state={
      telErrorData:'',
      passwordErrorData:'',
      loginSuccess:false
    }
  }

  componentDidMount(){
      
  }
  // 登录提交
  loginSubmit(){
    if(!this.telVaidtion()||!this.passwordValition()){
      return
    }
    this.setState({
      loginSuccess:true
    })
  }

  validation(rule,value){
    const methods={
      vPhone(value){
        const reg=/^1[0-9]{10}$/;
        if(value){
          return reg.test(value);
        }
      },
      vPassword(value){
        const reg=/^(\w){6,20}$/;
        if(value){
          return reg.test(value);
        }
      }
    }
    return methods[rule](value)
    
  }
  // 手机号码移出
  telVaidtion(){
     const telValue=this.refs.$tel.value
     const telValidate=this.validation('vPhone',telValue)
     if(!telValidate){
        this.setState({
          telErrorData:'手机号格式有误'
        })
        return false
     }else{
        this.setState({
          telErrorData:''
        })
        return true
     }
  }

  // 密码移出
  passwordValition(){

     const passwordValue=this.refs.$password.value
     const passWordValidate=this.validation('vPassword',passwordValue)
     if(!passWordValidate){
        this.setState({
          passwordErrorData:'密码格式不正确'
        })
        return false 
     }else{
        this.setState({
          passwordErrorData:''
        })
        return true
     }
  }

  render() {
    const telStyle={
      display:`${this.state.telErrorData?'block':'none'}`
    }
    const passwordStyle={
      display:`${this.state.passwordErrorData?'block':'none'}`
    }

    // if(this.state.loginSuccess){
    //   return <Redirect to='/trainClass' push />
    // }
    return(
      <div className="login-main">
        <div className="p-title">登录</div>
        <div className="ipt-group">
          <input type="text" maxLength="11" className="ipt" onBlur={this.telVaidtion.bind(this)} ref="$tel" placeholder="请输入用户名" />
          <p className="error-infor" style={telStyle}>{this.state.telErrorData}</p>
        </div>
        <div className="ipt-group">
          <input type="password" className="ipt" onBlur={this.passwordValition.bind(this)} ref="$password" placeholder="请输入密码"/>
          <p className="error-infor" style={passwordStyle}>{this.state.passwordErrorData}</p>
        </div>
        <button className="btn" onClick={this.loginSubmit.bind(this)}>登录</button>
      </div>
    );
  }
}

