import * as React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './trainClass.scss';

import { ClassPanel } from './../classPanel/classPanel'
interface Props{
    getLessonInfo(): void,
    lessonList:Array<object>
}
class TrainClass extends Component<any, any> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentWillReceiveProps(){
        
    }
    componentDidUpdate(){
        console.log(this.props)
        console.log(1)
    }
    render() {
        const { lessonList=[] } = this.props;
        return (
            <div className="main">
                <div className="p-main">
                    {
                        lessonList.map((value, index) => {
                            console.log(value)
                            return (
                                <ClassPanel lessonInfo={value}></ClassPanel>
                            )
                        })
                    }
                    
                </div>
            </div>
        );
    }
}

export {
    TrainClass
}