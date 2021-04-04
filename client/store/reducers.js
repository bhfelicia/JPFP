import { combineReducers } from "redux";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  UNREGISTER_STUDENT,
  GET_CAMPUSES,
  ADD_CAMPUS,
  DELETE_CAMPUS,
  EDIT_CAMPUS,
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

    case EDIT_STUDENT:
      return state.map((student) =>
        student.id === action.student.id ? action.student : student
      );

    case UNREGISTER_STUDENT:
      return state.map((student) =>
        student.id === action.student.id ? action.student : student
      );

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

    case EDIT_CAMPUS:
      const newState = state.map((campus) =>
        campus.id === action.campus.id ? action.campus : campus
      );
      return [...newState];

    // case UNREGISTER_STUDENT:
    //   const campus = state.find(action.student.campusId === campus.id);
    //   const students = campus.students.filter(student => student.id !== action.student.id)
    //   campus.students = students
    //   const campuses

    default:
      return state;
  }
};

//exported combineReducers
export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
});
