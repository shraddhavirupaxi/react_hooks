import React, { useState, useEffect } from 'react';

let student = [
	{
		key: 'name',
		label: 'Enter your Name '
	},
	{
		key: 'usn',
		label: 'Enter your University Number'
	},
	{
		key: 'branch',
		label: 'Enter your Branch'
	},
	{
		key: 'email',
		label: 'Enter your Email'
	}
];

function isEmpty(obj) {
	return Object.keys(obj).length !== 0;
}

function App() {
	const [ formData, updateFormData ] = useState({});
  const [ studentData, updateStudentData ] = useState([]);
  
	const onSubmit = (event) => {
		event.preventDefault();
		if (isEmpty(formData)) {
			updateStudentData([ ...studentData, formData ]);
			event.target.reset();
      updateFormData({});
      localStorage.removeItem("Shraddha")
		}
	};

	const onChange = (event) => {
		updateFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				{student.map((entry) => {
					return (
						<div>
							<label>{entry.label}</label>
							<input label={entry.label} name={entry.key} onChange={onChange} />
						</div>
					);
				})}
				<button type="submit">submit</button>
			</form>
			{JSON.stringify(formData)}
			<p>{JSON.stringify(studentData)}</p>
		</div>
	);
}

export default App;
