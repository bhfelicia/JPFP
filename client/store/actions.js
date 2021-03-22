//Action types

export const GET_STUDENTS = "GET_STUDENTS";
export const GET_CAMPUSES = "GET_CAMPUSES";

//Action creators

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};
