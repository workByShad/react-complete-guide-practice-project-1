import React, { useState } from 'react';
import UserInput from './components/UserInput';
import RenderedUser from './components/RenderedUser';
import './index.css';

const dummyUsersList = [];

function App() {
  const [usersList, setUsersList] = useState(dummyUsersList);

  const onSubmitUserDataHandler = (submittedUser) => {
    setUsersList((prevList) => {
      return [submittedUser, ...prevList];
    });

    // console.log(usersList);
  };

  return (
    <div className="border flexbox-container">
      <UserInput onSubmitUserData={onSubmitUserDataHandler} />

      {usersList.map((el) => {
        return (
          <RenderedUser
            username={el.username}
            age={el.age}
            key={el.username + el.age + Math.random()}
          />
        );
      })}
    </div>
  );
}
export default App;
