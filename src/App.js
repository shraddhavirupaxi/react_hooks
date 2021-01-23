import React, { useState } from "react";
import "./App.css";

let students = [
  { label: "Name", key: "name", name: "name" },
  { label: "USN Number", key: "usn", name: "usn" },
  { label: "Branch Name", key: "branch", name: "branch" },
  { label: "Email", key: "email", name: "email" },
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
    const latest_data = {};
    students.forEach((student) => {
      latest_data[student.name] = formData[student.key];
    });
    setState([...studentData, latest_data]);
    e.target.reset();
  };

  return (
    <div className="App">
      Student Information
      <form onSubmit={onSubmit}>
        {students.map((student) => {
          return (
            <div>
              {student.label}
              <input name={student.name} onChange={handleChange} />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
      {JSON.stringify(studentData)}
    </div>
  );
}

export default App;
