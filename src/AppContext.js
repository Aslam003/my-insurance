import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();
const UpdateUserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserUpdate = () => {
  return useContext(UpdateUserContext);
};

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({ signInButtonClicked: false });

  const signInButtonClick = (logout) => {
    if (logout) {
      console.log("USER IS LOGGED IN");
      setState((currentState) => ({
        ...currentState,
        signInButtonClicked: false,
      }));
    } else {
      console.log("USER IS LOGGED IN");
      setState((currentState) => ({
        ...currentState,
        signInButtonClicked: true,
      }));
    }
  };

  return (
    <UserContext.Provider value={state}>
      <UpdateUserContext.Provider value={signInButtonClick}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
};
