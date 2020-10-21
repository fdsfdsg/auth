import React, { useEffect } from "react";
import axios from "axios";
import { logout } from "../../../_actions/user_action";
import { useDispatch } from "react-redux";

const LandingPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);

  const onClickHandler = () => {
    dispatch(logout());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      시작 페이지
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
};

export default LandingPage;
