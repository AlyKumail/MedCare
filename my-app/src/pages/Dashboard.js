import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Doctor from "../pages/Doctor";
import Patient from "../pages/Patient";

import { reset } from "../features/auth/authSlice";

const Dashboard = () => {
  const [userType, setUserType] = useState("");
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/landing");
    } else {
      if (user.specialization) {
        setUserType("Doctor");
      } else {
        setUserType("Patient");
      }
      //   dispatch(getGoals());
    }

    if (isError) {
      toast.error(message);
    }
    console.log(isSuccess, user);
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return <div>{userType === "Doctor" ? <Doctor /> : <Patient />}</div>;
};

export default Dashboard;
