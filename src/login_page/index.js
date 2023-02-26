import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import admin_img from "../assets/image/admin_image.svg";

const Login = () => {
  const notify = (msg) => {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const navigate = useNavigate();

  const RedirectCheck = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    RedirectCheck();
  }, []);

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sender = async (final_data) => {
    try {
      const res = await axios.post("/login", final_data);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  };

  const form_handler = async (e) => {
    e.preventDefault();
    {
      var final_data = { userName, password };
      const { msg, token } = await sender(final_data);
      console.log(msg);
      if (msg === "success") {
        setUsername("");
        setPassword("");
        navigate("/homepage");
        localStorage.setItem("token", token);
      } else {
        toast(msg);
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <div className="main-div">
      <div id="form-container">
        <div>
          <div id="image-container">
            <div>
              <img src={admin_img}></img>
            </div>
          </div>
          <h1>Welcome!</h1>
          <div id="desc">
            <p>Let's connect to your workspace.</p>
            <p>Please enter your credentials to continue.</p>
          </div>
        </div>
        <form id="form-main">
          <div className="inputBox" id="margin">
            <input
              type="text"
              name="UserName"
              required="required"
              placeholder="Email Address"
              value={userName}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="Password"
              required="required"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>

          <div id="forgot_pswd">
            <p>Forgot Password?</p>
          </div>

          <div className="SubmitBox">
            <input
              type="submit"
              name="send"
              value="Sign In"
              onClick={(e) => form_handler(e)}
            ></input>
          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Login;
