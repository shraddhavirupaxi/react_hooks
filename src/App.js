import React, { useState } from "react";
import JSONPretty from "react-json-pretty";
import "./App.css";

let students = [
  { label: "Name *", key: "name" },
  { label: "USN Number *", key: "usn" },
  { label: "Branch Name *", key: "branch" },
  { label: "Email *", key: "email" },
];

const initialFormData = Object.freeze({
  name: "",
  usn: "",
  branch: "",
  email: "",
});

function App() {
  const [studentData, setState] = useState([]);
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const isEmpty = Object.values(formData).every((x) => x === "");
    if (isEmpty === false) {
      setState([...studentData, formData]);
    }
    updateFormData({
      ...initialFormData,
    });
  };

  return (
    <div className="App">
      Student Information
      <form onSubmit={onSubmit}>
        {students.map((student) => {
          return (
            <div>
              <label>{student.label} </label>
              <input name={student.key} onChange={handleChange} />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
      <JSONPretty
        id="json-pretty"
        data={JSON.stringify(studentData)}
      ></JSONPretty>
    </div>
  );
}

export default App;
