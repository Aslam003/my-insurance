import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Sign";
import Navbar from "./components/Navbar";
import ContentBar from "./components/ContentBar";
import { useUser, useUserUpdate } from "./AppContext";

function App() {
  let loggedUser = localStorage.getItem("Name");

  const userUpdate = useUserUpdate();
  const user = useUser();
  useEffect(() => {
    if (loggedUser && !user.signInButtonClicked) {
      userUpdate();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ContentBar />} />

        <Route path='sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
