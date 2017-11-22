import {connect} from 'react-redux'
import axios from 'axios'
import { ClassPanel } from './../components/classPanel/classPanel'

function mapStateToProps(state) {
  const { classPanel } = state;
  return {
    lesson: classPanel.lesson
  }
}
const getClassType=(data)=>{
  return {
    type: 'GETCLASS',
    data: data
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getLesson:()=>{
      axios
        .get('/json/friendsList.json')
        .then((res) => {
          return dispatch(getClassType(res.data.list))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassPanel);