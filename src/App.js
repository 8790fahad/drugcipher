import React, { useEffect } from "react";
import "./App.css";
import AppNavigation from "./Routes/AppNavigation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { _fetchApi } from "./utils/helper";
import { NotificationError } from "./utils/Notification";
import { toast } from "react-toastify";
const App = function AppWrapper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recover = useCallback(() => {
    const token = localStorage.getItem("@@cipher");
    const _token = token?.split(" ");
    if (token) {
      return (dispatch) => {
        _fetchApi(
          `/v1/load-with-token?token=${_token[1]}`,
          (resp) => {
            console.log(resp);
            console.log("resp");
            if (resp.success) {
              dispatch({ type: "RECOVER_ACCOUNT", payload: resp });
              console.log(resp);
            } else {
              navigate("/");
            }
          },
          (err) => {
            toast(<NotificationError text="Failed, try again" />);
            console.log(err);
            navigate("/");
          }
        );
      };
    }
  }, [navigate]);
  useEffect(() => {
    dispatch(recover());
  }, [dispatch, recover]);
  //..
  return (
    <div className="" style={{ margin: 0 }}>
      <AppNavigation />
    </div>
  );
};

export default App;
