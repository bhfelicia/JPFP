//Action types

export const GET_STUDENTS = "GET_STUDENTS";
export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const EDIT_STUDENT = "EDIT_STUDENT";

export const GET_CAMPUSES = "GET_CAMPUSES";
export const ADD_CAMPUS = "ADD_CAMPUS";
export const DELETE_CAMPUS = "DELETE_CAMPUS";
export const EDIT_CAMPUS = "EDIT_CAMPUS";

//Action creators

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student,
  };
};

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};

export const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    student,
  };
};

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus,
  };
};

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus,
  };
};

export const editCampus = (campus) => {
  return {
    type: EDIT_CAMPUS,
    campus,
  };
};
