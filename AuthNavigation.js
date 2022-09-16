import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
import { SignedInStack, SignedOutStack } from './screens/Navigation';

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);

  return (
    <>
      {/* {currentUser ? (
        <SignedInStack
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <SignedOutStack />
      )} */}
      <SignedInStack />
    </>
  );
};

export default AuthNavigation;
