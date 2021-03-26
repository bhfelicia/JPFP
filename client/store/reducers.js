import { combineReducers } from "redux";
import { GET_STUDENTS, ADD_STUDENT, GET_CAMPUSES, ADD_CAMPUS } from "./actions";

//individual reducers
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
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

    default:
      return state;
  }
};

//exported combineReducers
export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
});
