import React, { useState } from 'react';
import './App.css';

let students = [{
    label: "Name",
    key: 'name'
  },
  {
    label : "USN Number",
    key : 'usn'
  },
  {
    label : "Branch Name",
    key : 'branch'
  },
  {
    label : "Email",
    key : 'email'
  }

]



function App() {
    const[studentData,setstudentData]=useState("");
    

      const handlerChange =(event) =>{
        setstudentData(event.target.value);
      };

      const onSubmit=()=>{
        setstudentData(studentData);

      }
  return (

    <div className="App">
   
      <form>
      <fieldset>
        Student Information
        {
          students.map(student =>{
          return <div>
            {student.label}
          
           <input value={studentData[student.key]}
           onChange={handlerChange}/>
          </div>
        })}
        <button onClick={onSubmit}>submit</button>
      </fieldset>
      </form>

    </div>
  );
}

export default App;
