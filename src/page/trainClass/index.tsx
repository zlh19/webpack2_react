import * as React from 'react'
import { Component } from 'react'
import axios from 'axios'
import './index.scss';

// import TrainClass from './../../container/trainClass'
import { TrainClass } from './trainClass/trainClass'

class Index extends Component<any,any> {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const { getLessonInfo, getClassInfo}=this.props;
        getLessonInfo()
        getClassInfo()
    }
    render() {
        const { lessonList, bicycleList }=this.props;
        return (
            <TrainClass lessonList={lessonList}></TrainClass>
        );
    }
}

export{
    Index
}