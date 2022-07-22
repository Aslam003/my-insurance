import React from "react";
import "./page-style.css";
import Typography from "@mui/material/Typography";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useUser, useUserUpdate } from "../AppContext";

const Navbar = () => {
  const user = useUser();
  const userUpdate = useUserUpdate();
  const logout = () => {
    localStorage.clear("Name");
    userUpdate(true);
  };
  return (
    <div>
      <div className='page-header'>
        <div className='left'>
          <LocalHospitalIcon fontSize='large' />
          <Typography variant='h4' component='h4'>
            My Insurance
          </Typography>
        </div>
        <div className='right'>
          {!user.signInButtonClicked ? (
            <Button
              style={{ borderRadius: "20px", background: "#A0318C" }}
              variant='contained'
            >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to='sign-in'
              >
                Sign In{" "}
              </Link>
            </Button>
          ) : (
            <Button
              style={{ borderRadius: "20px", background: "#A0318C" }}
              variant='contained'
              onClick={logout}
            >
              Logout{" "}
            </Button>
          )}
        </div>
      </div>
      <div className='page-body'></div>
    </div>
  );
};

export default Navbar;
