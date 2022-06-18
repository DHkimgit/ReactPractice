import React, { useReducer, useState } from "react";
import Student from "./student";

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {

    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case "del-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (students) => students.id !== action.payload.id
        ),
      };

    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };

    default:
      return state;
  }
};

const Attendence = () => {
  const [studentInfo, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const onClick = () =>{
    dispatch({ type: "add-student", payload: { name } });
    setName('')
  };
  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      onClick();
    }
  };
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button
        onClick={onClick}
      >
        추가
      </button>
      {studentInfo.students.map((students) => {
        return (
          <Student
            key={students.id}
            name={students.name}
            dispatch={dispatch}
            id={students.id}
            isHere={students.isHere}
          />
        );
      })}
    </div>
  );
};
export default Attendence;
