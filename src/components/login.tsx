import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
  const [password, setPasswordValue] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [emailInput, setemailInput] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setemailInput(event.target.value);
    setPasswordInput(event.target.value);
  };
  const onPasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const onEmailChange = (e) => {
    setemailInput(e.target.value);
  };
  const toggle = (e) => {
    e.preventDefault();
    if (password === "password") {
      setPasswordValue("text");
      return;
    }
    setPasswordValue("password");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://www.addwebsolution.com/sites/default/files/2022-01/eCommerce%20Store%20_%20Mobile%20App.png"
              alt="onlineStore"
              width="400px"
              height="300px"
            />
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">LOGIN</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <label>E-Mail </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      id="email"
                      onChange={onEmailChange}
                      value={emailInput}
                      placeholder="Enter email"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <label>Password </label>
                  <div className="input-group mb-3">
                    <input
                      type={password}
                      onChange={onPasswordChange}
                      value={passwordInput}
                      placeholder="Enter password"
                      name="password"
                      className="form-control"
                      minLength={6}
                    />
                    <button className="btn btn-primary" onClick={toggle}>
                      {password === "password" ? (
                        <i className="bi bi-eye-slash"></i>
                      ) : (
                        <i className="bi bi-eye"></i>
                      )}
                    </button>
                  </div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ float: "right" }}
                  >
                    Login
                  </button>
                </form>
                <p style={{ float: "left" }}>
                  Don't have an account?{" "}
                  <a style={{ color: "blue" }}>Register</a>
                </p>
              </div>
            </div>
            <p>
              Your details email:{emailInput}, password: {passwordInput}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
