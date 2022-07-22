import React from "react";
import { useUser } from "../AppContext";
import IsLogout from "./IsLogout";
import IsLogin from "./IsLogin";

const ContentBar = () => {
  const user = useUser();

  return <>{user.signInButtonClicked ? <IsLogin /> : <IsLogout />}</>;
};

export default ContentBar;
