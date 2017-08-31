import React from 'react'
import { render } from 'react-dom'
import {HashRouter,Route,Link,Switch,hashHistory} from 'react-router-dom';


import './public/css/reset.scss'

// const Message = ({ match }) => (
//   <div>
//     <h3>new messages</h3>
//     <h3>{match.params.id}</h3>
//   </div>
// )

// const Inbox = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <Route path={`${match.url}/messages/:id`} component={Message}/>

//   </div>
// ) 
// import App from './components/app/app.js'
import trainClass from './page/trainClass/trainClass.js'
import friendsList from './page/friendsList/friendsList.js'
import trainBicycle from './page/trainBicycle/trainBicycle.js'
import freeBicycle from './page/freeBicycle/freeBicycle.js'
import login from './page/login/login.js'

// 配置路由
render((
    <HashRouter>
      	<div>
	      <Route exact path="/" component={trainClass} />
          <Route path='/trainClass' component={trainClass} />
          <Route path='/friendsList' component={friendsList} />
          <Route path='/trainBicycle' component={trainBicycle} />
          <Route path='/freeBicycle' component={freeBicycle} />
          <Route path='/login' component={login} />
    	</div>
    </HashRouter>
), document.getElementById('app'));