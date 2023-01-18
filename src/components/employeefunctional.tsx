import * as React from 'react';
import { useState } from 'react';

interface IProps {}
interface IState {
  name: string;
  age: number;
  title: string;
}

let Employee: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    name: 'Tamire Santosh',
    age: 34,
    title: 'UI Developer',
  });

  let increment = (): void => {
    setState({
      name: 'Tamire Santosh',
      age: state.age + 1,
      title: 'UI Developer',
    });
  };
  let decrement = (): void => {
    setState({
      name: 'Tamire Santosh',
      age: state.age - 1,
      title: 'UI Developer',
    });
  };

  return (
    <React.Fragment>
      <hr />
      <h3>Employee Functional Component</h3>
      <ul className="list-group">
        <li className="list-group-item">Name: {state.name}</li>
        <li className="list-group-item">Age: {state.age}</li>
        <li className="list-group-item">Title: {state.title}</li>
      </ul>
      <button
        type="button"
        className="btn btn-primary me-1"
        onClick={increment}
      >
        Increase age
      </button>
      <button type="button" className="btn btn-danger" onClick={decrement}>
        Decrease age
      </button>
    </React.Fragment>
  );
};
export default Employee;
