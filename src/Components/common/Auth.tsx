import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { User } from "../../models/User";
import { AuthService } from "../../services/AuthService";

// import store from "../../redux/store";
import { Provider } from "react-redux";
import { RequestState } from "../../RequestState";

const Auth: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [userRequestState, setUserRequestState] = useState<RequestState>(
    RequestState.INITIAL
  );

  let history = useHistory();
  if (!token) {
    const token = AuthService.getToken();
    console.log("token find or not", token);
    if (token) {
      setToken(token);
    } else {
      console.log("no token found");
      for (const key in sessionStorage) {
        if (key !== "selectedPackage") {
          sessionStorage.removeItem(key);
        }
      }
      sessionStorage.clear();
      window.location.href = "/home";
    }
  }

  useEffect(() => {
    if (token && !user && userRequestState === RequestState.INITIAL) {
      setUserRequestState(RequestState.LOADING);
      AuthService.getMe()
        .then((res) => {
          if (res.success) {
            setUser(res.data);
            history.push(`/home`);
            setUserRequestState(RequestState.SUCCESS);
          } else {
            setUserRequestState(RequestState.FAILED);
          }
        })
        .catch(() => {
          setUserRequestState(RequestState.FAILED);
        });
    }
  }, []);
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  switch (userRequestState) {
    case RequestState.FAILED:
      logout();
      return <br />;
    case RequestState.SUCCESS:
      return (
        <div>
          {/* <Provider>
              {children}
            </Provider> */}
        </div>
      );
    default:
      return (
        <div className="pre-loader">
          <div className="pre-loader-box">
            <div className="loader-logo"></div>
            <div className="loader-progress" id="progress_div">
              <div className="bar" id="bar1"></div>
            </div>
            <div className="percent" id="percent1">
              0%
            </div>
            <div className="loading-text">Loading...</div>
          </div>
        </div>
      );
  }
};

export default Auth;
