import React, { Component } from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import './nav.scss';

export default class Nav extends Component {
  navState(navState){
    const state=this.props.state;
    return state==navState?'current':''
  }
  render() {
        return (
          <div>
            <div className="nav">
              <div className={`${this.navState(0)} nav-item`}>
                <Link to="/trainClass">
                  <i className="nav-icon icon-tain"></i>
                  <p className="nav-text">训练</p>
                </Link>
              </div>
              <div className={`${this.navState(1)} nav-item`}>
                <Link to="/trainClass">
                  <i className="nav-icon icon-challenge"></i>
                  <p className="nav-text">挑战</p>
                </Link>
              </div>
              <div className={`${this.navState(2)} nav-item`}>
                <Link to="/friendsList">
                  <i className="nav-icon icon-firends"></i>
                  <p className="nav-text">秀圈</p>
                </Link>
              </div>
              <div className={`${this.navState(3)} nav-item`}>
                <Link to="/">
                  <i className="nav-icon icon-mine"></i>
                  <p className="nav-text">我的</p>
                </Link>
              </div>
            </div>
            
          </div>
        );
    }
}

