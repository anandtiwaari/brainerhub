import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { isLogged } from "../redux/LoginSlice";
import { toast } from "react-toastify";
export const Login = () => {
  const Welcome = () => toast.success("Suucessfully Logged in");
  const location = useLocation();

  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [credAuth, setcredAuth] = useState(false);
  const dispatch = useDispatch();
  const LoginDetails = [
    { Email: "admin@gmail.com" },
    { password: "Abcd@1234" },
  ];
  const navigate = useNavigate();
  const selectorr = useSelector((state) => state.LoginSlice);
  useEffect(() => {});
  if (location.pathname === "/") {
    document.body.style.backgroundColor = "#7CB9E8";
  } else {
    document.body.style.backgroundColor = "#ffffff";
  }
  //   console.log(selectorr);
  const AuthUser = () => {
    if (selectorr.Email === Email && selectorr.password === Pass) {
      navigate("/dashboard");
      Welcome();
    }
    if (selectorr.Email !== Email || selectorr.password !== Pass) {
      setcredAuth(true);
    }
    dispatch(isLogged());
  };

  return (
    <div className="LoginWrapper">
      <Card sx={{ maxWidth: 810 }}>
        <CardContent>
          <div
            className="head"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Login To FreePik</h3>
          </div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </div>
            {Email.length > 1 && Email.length < 9 ? (
              <label className="error-email"> Invalid Email</label>
            ) : (
              ""
            )}

            <div>
              <TextField
                value={Pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              {/* <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              /> */}
            </div>
            {Pass.length > 1 && Pass.length < 9 ? (
              <label className="error-email">
                {" "}
                Password must be of 8 characters or more
              </label>
            ) : (
              ""
            )}
          </Box>
          {credAuth ? (
            <label className="error-email">Invalid Email or Password</label>
          ) : (
            ""
          )}
        </CardContent>
        <div
          className="loginbtn"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Button
            disabled={
              Email.includes(".com") > 0 && Pass.length > 7 ? false : true
            }
            size="small"
            variant="contained"
            onClick={AuthUser}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
};
