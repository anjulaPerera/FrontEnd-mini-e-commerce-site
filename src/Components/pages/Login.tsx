import React, { useState, useEffect } from "react";
import { RequestState } from "../../RequestState";
import { AuthService } from "../../services/AuthService";
import { useHistory } from "react-router-dom";
import { LoginData } from "../../models/LoginModel";

const LoginPage: React.FC = () => {
  const token = AuthService.getToken();
  const history = useHistory();
  let loginData: LoginData = {
    email: "",
    password: "",
    loginMethod: "",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(loginData);
  const [error, setError] = useState<string>();
  const [loginRequestState, setLoginRequestState] = useState<RequestState>(
    RequestState.INITIAL
  );

  const handleChange = (event: any) => {
    // console.log(event.target.checked);
  };
  useEffect(() => {
    if (loginRequestState === RequestState.LOADING) {
      AuthService.userLogin(userData)
        .then(async (res) => {
          if (res.success) {
            AuthService.setToken(res.data.token);
            setLoginRequestState(RequestState.SUCCESS);
          } else {
            setError(res.error);
            setLoginRequestState(RequestState.FAILED);
          }
        })
        .catch((e) => {
          setError(e);
          setLoginRequestState(RequestState.FAILED);
        });
    } else if (loginRequestState === RequestState.FAILED) {
      alert(`user login error:${error}`);
    }
  }, [loginRequestState]);
  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserData({
      email: (
        event.currentTarget.elements.namedItem("email") as HTMLInputElement
      ).value,
      password: (
        event.currentTarget.elements.namedItem("password") as HTMLInputElement
      ).value,
      loginMethod: "EMAIL",
    });
    setLoginRequestState(RequestState.LOADING);
  };
  const verifyUser = async () => {
    try {
      const res = await AuthService.getMe();
      if (res.success) {
        const { userType, userStatus, isVerified, _id } = res.data;
        if (userStatus === "ACTIVE") {
          history.push("/home");
        } else {
          if (!isVerified) {
            for (const key in sessionStorage) {
              if (key !== "selectedPackage") {
                sessionStorage.removeItem(key);
              }
            }
            sessionStorage.clear();
            alert("User not verified yet!");
          }
        }
      } else {
        for (const key in sessionStorage) {
          if (key !== "selectedPackage") {
            sessionStorage.removeItem(key);
          }
        }
        sessionStorage.clear();
        alert("User not verified yet!");
      }
    } catch (error) {
      console.error("Error while verifying user:", error);
    }
  };

  if (token || loginRequestState === RequestState.SUCCESS) {
    verifyUser();
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={submitLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Username:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={username}
              name="email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
