import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({onAddUser}) => {
  const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();
	
  const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
  };
	
  const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
  };
	
  const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message:'Please enter a valid name and age (non-empty values)'
			})
			return;
		}
		
		if (+enteredAge < 0) {
			setError({
				title: 'Invalid input',
				message:'Please enter a valid age (> 0)'
			})
			return;
		}
		
		onAddUser(enteredUsername, enteredAge)
		setEnteredUsername('');
		setEnteredAge('');
	};
	
	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						onChange={usernameChangeHandler}
						value={enteredUsername}
						type="text"
						id="username"
					/>
					<label htmlFor="age">Age (years)</label>
					<input
						onChange={ageChangeHandler}
						value={enteredAge}
						type="number"
						id="age"
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
  );
};

export default AddUser;
