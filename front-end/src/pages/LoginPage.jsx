import React, { useState } from "react";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  //   const dispatch = useDispatch();

  //   const onSubmitHandler = (event) => {
  //     // 버튼만 누르면 리프레시 되는것을 막아줌
  //     event.preventDefault();

  //     console.log("ID:", id);
  //     console.log("Password:", password);

  //     let body = {
  //         id: id,
  //         password: password,
  //     }

  //     dispatch(loginUser(body));
  //     }

  const handleLogin = () => {
    // 로그인 로직 구현
    console.log("ID:", id);
    console.log("Password:", password);
  };

  const handleSignUp = () => {
    // 회원가입 로직 구현
    console.log("Sign Up");
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>드루와</h2>
      <input
        type="text"
        placeholder="example@exam.com"
        value={id}
        onChange={handleIdChange}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default LoginPage;