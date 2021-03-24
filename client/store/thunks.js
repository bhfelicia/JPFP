//import axios
import axios from "axios";
//import action creators
import { getStudents, getCampuses, addCampus } from "./actions";

//Thunk Creators
export const fetchStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch(getStudents(students));
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/api/campuses");
    dispatch(getCampuses(campuses));
  };
};

export const setCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/campuses", campus);
    dispatch(addCampus(created));
    history.push("/campuses");
  };
};
