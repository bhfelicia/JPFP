import { combineReducers } from "redux";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_CAMPUSES,
  ADD_CAMPUS,
  DELETE_CAMPUS,
} from "./actions";

//individual reducers
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return [...state, action.student];

    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.student.id);

    default:
      return state;
  }
};

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state, action.campus];

    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campus.id);

    default:
      return state;
  }
};

//exported combineReducers
export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
});
