import React, { useState } from "react";
import { Button, TextField, Stack, SnackbarContent } from '@mui/material';
import { paths } from "../../constants";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value.trim());
    setEmailError("");
  };

  const handleBlurEmail = () => {
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    setEmailError(emailValid ? "" : "Email is incorrect");
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value.trim());
    setPasswordError("");
  };

  const handleBlurPassword = () => {
    const passwordValid = password.length >= 6;
    setPasswordError(passwordValid ? "" : "Password is too short");
  };

  const handleSubmit = async () => {
    setLoginError("");
    await history.push(paths.user.plan());
  }

  const action = (
    <Button
      color="secondary"
      size="small"
      onClick={async()=>await history.push(paths.home())}
    >
        Go to back
    </Button>
  );

  return (
    <div>
      <div className="App-header">
        <h2 className="text-header" style={{color: "#e3f2fd"}}>Smart Weather App</h2>
      </div>
      <form className="demoForm" style={{ width: "500px", margin: "auto" }}>
        <Stack
          spacing={2}
          sx={{ maxWidth: 600 }}
          style={{ marginTop: '1rem'}}>
          <SnackbarContent
            style={{ background: "rgba(255, 255, 0, 0.4)", color: "rgba(167, 17, 17, 0.863)" }}
            message="Authorization will work soon! Possibly the functionality of obtaining your own API. (Click for back “Go to back” or on the “Login” button to open the demo)"
            action={action}
          />
        </Stack>
        <div className="form-group" style={{marginTop: "1rem"}}>
          <TextField
            color="warning"
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            value={email}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            className="form-control"
            name="email"
            helperText={emailError}
            error={!!emailError}
          />
        </div>
        <div className="form-group">
          <TextField
            color="warning"
            id="outlined-password-input"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            className="form-control"
            name="password"
            helperText={passwordError}
            error={passwordError}
          />
        </div>
        {/* <div>login for admin</div> */}
        <Button
          className="buttonLogin"
          variant="contained"
          color="warning"
          disabled={emailError || passwordError}
          onClick={handleSubmit}
        >
          Login
        </Button>

        {loginError ? (
          <div
            style={{
              textAlign: "start",
              marginTop: 30,
              paddingLeft: "25px",
              color: "rgb(182, 43, 43)",
            }}
          >
            - {loginError}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
