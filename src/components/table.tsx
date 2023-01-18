import * as React from 'react';
import { useState } from 'react';
import { userDataType } from '../model/useModel';
import { userData } from '../services/userData.service';

interface IProps {}
interface IState {
  users: userDataType[];
}

let Table: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    users: userData.getallUsers(),
  });
  return (
    <React.Fragment>
      <hr />
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designamtion</th>
          </tr>
        </thead>
        <tbody>
          {state.users.length > 0 &&
            state.users.map((user) => {
              return (
                <tr key={user.sno}>
                  <td>{user.sno}</td>
                  <td>{user.name}</td>
                  <td>{user.age}yrs</td>
                  <td>{user.designation}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
