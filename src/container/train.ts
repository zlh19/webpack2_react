import {connect} from 'react-redux'
import axios from 'axios'
import { TrainClass } from './../page/trainClass/trainClass/trainClass'

function mapStateToProps(state) {
  const { trainClass } = state;
  return {
    lessonList: trainClass.lessonList
  }
}
const getLessonType = (data)=>{
  return {
    type: 'GETLESSONINFO',
    lessonList: data
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getLessonInfo:()=>{
      axios
        .get('/json/trainList.json')
        .then((res) => {
          dispatch(getLessonType(res.data.list))
        })
        .catch((error) => {
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainClass);