//import axios
import axios from "axios";
//import action creators
import {
  getStudents,
  addStudent,
  deleteStudent,
  getCampuses,
  addCampus,
  deleteCampus,
  editCampus,
} from "./actions";

//Thunk Creators
export const fetchStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch(getStudents(students));
  };
};

export const setStudent = (student, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/students", student);
    dispatch(addStudent(created));
    history.push(`/students/${created.id}`);
  };
};

export const destroyStudent = (student, history) => {
  return async (dispatch) => {
    console.log(student);
    await axios.delete(`/api/students/${student.id}`);
    dispatch(deleteStudent(student));
    history.push("/students");
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
    history.push(`/campuses/${created.id}`);
  };
};

export const destroyCampus = (campus, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/campuses/${campus.id}`);
    dispatch(deleteCampus(campus));
    history.push("/campuses");
  };
};

export const updateCampus = (campus, history) => {
  return async (dispatch) => {
    const { data: updateCampus } = await axios.put(
      `/api/campuses/${campus.id}/edit`,
      campus
    );
    dispatch(editCampus(campus));
    history.push(`/campuses/${updateCampus.id}`);
  };
};
