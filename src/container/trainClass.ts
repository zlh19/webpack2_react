import {connect} from 'react-redux'
import axios from 'axios'
import { Index } from './../page/trainClass/index'

const mapStateToProps = (state)=>{
  const { trainClass, bicycle } = state;
  const { lessonList } = trainClass
  const { bicycleList } = bicycle
  return {
    lessonList,
    bicycleList
  }
}

const actionType={
  getLessonType: (data) => {
    return {
      type: 'GETLESSONINFO',
      lessonList: data
    }
  },
  getBicycleType: (data) => {
    return {
      type: 'GETBICYCLEINFO',
      bicycleList: data
    }
  }
}
const mapDispatchToProps=(dispatch) =>{
  const { getLessonType, getBicycleType}=actionType;
  return {
    getLessonInfo:()=>{
      axios
        .get('/json/trainList.json')
        .then((res) => {
          dispatch(getLessonType(res.data.list))
        })
        .catch((error) => {
        })
    },
    getClassInfo:()=>{
      axios
        .get('/json/trainBicycle.json')
        .then((res) => {
          dispatch(getBicycleType(res.data.bicycleData.list))
        })
        .catch((error) => {
        })
    }
  }
}

const IndexView = connect(mapStateToProps, mapDispatchToProps)(Index)
export {
  IndexView
} 