import React, { Component } from 'react'
import { Observable } from 'rxjs/Rx';

import axios from 'axios'
import './testPage.scss';

import Add from '../../container/addTodo'
import TodoList from '../../container/todoList'
import { Tabs, Tab} from '../../components/tab/tab'

class TestPage extends Component {
    constructor(props) {
        super(props);
    }
    btnTap(saveStatus, buyStatus, status,index){
        switch(index){
            case 0:
                switch (status) {
                    case 'begin':
                        this.renderOneBegin(saveStatus, buyStatus)
                        break;
                    case 'start':
                        this.renderOneStart(saveStatus, buyStatus)
                        break;
                    case 'end':
                        this.renderOneEnd(saveStatus, buyStatus)
                        break;
                } 
                break
            case 1:
                switch (status) {
                    case 'begin':
                        this.renderTwoBegin(saveStatus, buyStatus)
                        break;
                    case 'start':
                        this.renderTwoStart(saveStatus, buyStatus)
                        break;
                    case 'end':
                        this.renderTwoEnd(saveStatus, buyStatus)
                        break;
                }
                break
        }
         
    }
    renderOneBegin(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买

        }
        console.log('start1')
    }
    renderOneStart(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买
        }
        console.log('start2')
    }
    renderOneEnd(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买

        }
        console.log('start3')
    }
    renderTwoBegin(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买

        }
        console.log('start11')
    }
    renderTwoStart(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买
        }
        console.log('start22')
    }
    renderTwoEnd(saveStatus, buyStatus) {
        if (buyStatus) {
            // 已购买
            if (saveStatus) {
                // 已保存
            } else {
                // 未保存
            }
        } else {
            // 未购买

        }
        console.log('start33')
    }
    render() {
        let obj=[
            {
                'status': 'begin',
                'titleText': '标题一',
                'isSave': false,
                'isBuy':false,
                'begin': {
                    'status':'hasBuy',
                    'hasBuy': {
                        'btnText': '分享',
                        'btnActive':'share'
                    },
                    'nullBuy': {
                        'btnText': '购买',
                        'btnActive':'buy'
                    }
                },
                'start': {
                    'status': 'hasBuy',
                    'hasBuy': {
                        'btnText': '分享',
                        'btnActive': 'share'
                    },
                    'nullBuy': {
                        'btnText': '购买',
                        'btnActive': 'buy'
                    },
                    'hasSave':{
                        'btnText': '换装',
                        'btnActive': 'change'
                    }
                },
                'end': {
                    'status': 'hasBuy',
                    'hasBuy': {
                        'btnText': '分享',
                    },
                    'nullBuy': {
                        'btnText': '购买',
                    },
                    'hasSave': {
                        'btnText': '换装',
                        'btnActive': 'change'
                    }
                }
            },
            {
                'status': 'start',
                'titleText': '标题一',
                'isSave':false,
                'begin': {
                    'status': 'nullBuy',
                    'hasBuy': {
                        'btnText': '分享',
                        'btnActive': 'share'
                    },
                    'nullBuy': {
                        'btnText': '购买',
                        'btnActive': 'buy'
                    }
                },
                'start': {
                    'status': 'nullBuy',
                    'hasBuy': {
                        'btnText': '分享',
                        'btnActive': 'share'
                    },
                    'nullBuy': {
                        'btnText': '购买',
                        'btnActive': 'buy'
                    },
                    'hasSave': {
                        'btnText': '换装',
                        'btnActive': 'change'
                    }
                },
                'end': {
                    'status': 'hasBuy',
                    'hasBuy': {
                        'btnText': '分享',
                        'btnActive': 'share'
                    },
                    'nullBuy': {
                        'btnText': '购买',
                        'btnActive': 'buy'
                    },
                    'hasSave': {
                        'btnText': '换装',
                        'btnActive': 'change'
                    }
                }
            },
        ]
        return(
            <div className="main">
                <div id="J_LinkBuy" style={{'display':'none'}}>123</div>
                <Add></Add>
                {/* a=document.getElementById('J_LinkBuy') */}
                {/* b=setInterval(function(){if(a.style.display!='none'){a.click();clearInterval(b)}else{}},10) */}
                {/* <TodoList>
                    <img src="//www.baidu.com/img/bd_logo1.png" style="width:100px;height:100px;" class="infor"/>
                    <img src="//www.baidu.com/img/bd_logo1.png"/>
                </TodoList> */}
                <div className="dialog-message">
                    <Tabs width="80%">
                        {
                            obj.map((item,index)=>{
                                let status=item.status;
                                let activeStatus = item[status];
                                let saveStatus=item.isSave;
                                let buyStatus=item.isBuy;
                                let timeStatus = item[status].status;
                                let statusItem = activeStatus[timeStatus];
                                return (
                                    <Tab name={item.titleText}>
                                        <div className="tab-infor">
                                            <button onClick={() => this.btnTap(saveStatus, buyStatus,status,index)} ref="btn" >{statusItem.btnText}</button>
                                        </div>
                                    </Tab>
                                )
                            })
                        }
                    </Tabs>
                </div>
            </div>
        )
    }
}

export{
    TestPage
}

