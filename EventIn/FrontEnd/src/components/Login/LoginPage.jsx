import "./LoginPage.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const success = () => {
    toast.success("Logged in Successfully!.");
  };

  return (
    <div>
      <div className="title-wrapper">
        <div className="title-name">EventZa</div>
      </div>
      <div className="login">
        <form>
          <br />
          <h1>Log in</h1>
          <br />

          <label className="label-email">Email ID</label>

          <input
            type="email"
            className="input-email"
            placeholder="e-mail id"
          ></input>
          <br />
          <br />

          <label className="label-password">Password</label>

          <input
            type="password"
            className="input-password"
            placeholder="enter password"
          ></input>
          <br />
          <br />

          <button className="login-button" onClick={success}>
            Log in
          </button>

          <p>
            Don't have an account?{" "}
            <a href="link" className="sign-up-link">
              Sign up
            </a>
          </p>
          <br />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Open+Sans"
          />

          <p className="or">
            <span>or</span>
          </p>

          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google"
              />
            </div>
            <p class="btn-text">
              <b>Log in with google</b>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
