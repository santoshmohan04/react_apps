import * as React from 'react';

interface Iprops {}
interface Istate {
  name: string;
  age: number;
  title: string;
}

export class EmployeeClass extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      name: 'Tamire Santhosh',
      age: 34,
      title: 'UI Developer',
    } as Istate;
  }

  increment = () => {
    this.setState({age: this.state.age + 1});
  };
  decrement = () => {
    this.setState({age: this.state.age - 1});
  };

  render() {
    let { name, age, title } = this.state;
    return (
      <React.Fragment>
        <hr />
        <h3>Employee Class Component</h3>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Title: {title}</li>
        </ul>
        <button
          type="button"
          className="btn btn-primary me-1"
          onClick={this.increment}
        >
          Increase age
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.decrement}
        >
          Decrease age
        </button>
      </React.Fragment>
    );
  }
}
