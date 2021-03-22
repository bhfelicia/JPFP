import { combineReducers } from "redux";

//individual reducers
const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    default:
      return state;
  }
};

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
};

//exported combineReducers
export default combineReducers({
  students: studentsReducer,
  campuses: campusesReducer,
});
