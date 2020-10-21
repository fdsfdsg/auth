import React, { useEffect } from "react";
import axios from "axios";
import { logout } from "../../../_actions/user_action";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
        console.log(response)
      if (response.data.success) {
        history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
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
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
};

export default withRouter(LandingPage);
