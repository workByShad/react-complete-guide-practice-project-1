import React, { useState } from 'react';
import '../index.css';

const UserInput = (props) => {
  // states
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('');

  // on-change handlers
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredAge < 0) {
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSubmitUserData(userData);

    setUsername('');
    setAge('');
  };

  return (
    <form className="border" onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type={'text'}
          value={enteredUsername}
          onChange={usernameChangeHandler}
          required
        ></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type={'number'}
          min={0}
          value={enteredAge}
          onChange={ageChangeHandler}
          required
        ></input>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default UserInput;
