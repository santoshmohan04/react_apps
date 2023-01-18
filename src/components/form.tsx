import * as React from 'react';
import { useState } from 'react';

interface IProps {}
interface IState {
  user: {
    username: string;
    password: string;
  };
}

let LoginForm: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    user: {
      username: '',
      password: '',
    },
  });

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  let login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(state.user);
  };
  return (
    <React.Fragment>
      <hr />
      <pre>{JSON.stringify(state.user)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                <p className="h3">Login Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-2">
                    <input
                      type="text"
                      required={true}
                      name="username"
                      value={state.user.username}
                      onChange={updateInput}
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      required={true}
                      name="password"
                      value={state.user.password}
                      onChange={updateInput}
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="mb-2">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginForm;
