import * as React from 'react'
import { Component } from 'react'
import './classPanel.scss';

interface Props {
    lessonInfo:any
}

class ClassPanel extends Component<Props, any> {
    changeTimer(timer: number) {
        const timers = (timer / 60).toString();
        return parseInt(timers)
    }
    render() {
        const { lessonInfo={}} = this.props;
        const { categoryName } = lessonInfo;
        const { lesson } = lessonInfo;

        return (
            <div className="tt_type">
                <div className="tt_title">{categoryName}</div>
                <div className="tc_classes">
                    {
                        lesson.map((value, index) => {
                            return (
                                <div className="tc_class" key={index} style={{ backgroundImage: `url(${value.img})` }}>
                                    <div className="tc_title">{value.lessonName}</div>
                                    <div className="tc_desc">{this.changeTimer(value.totaltimeDesc)}分钟 {value.calorie} kcal</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export {
    ClassPanel
}