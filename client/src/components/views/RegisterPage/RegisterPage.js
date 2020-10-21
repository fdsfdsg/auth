import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter} from 'react-router-dom';
import { registerUser } from "../../../_actions/user_action";
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  
  const onNameHandler = (event) => {
    setName(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    let body = {
      email: email,
      name: name,
      password: password,
    };

    if(password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야합니다")
    }

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        history.push("/login");
      } else {
        alert("Failed to sign up");
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        
        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />
        
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
