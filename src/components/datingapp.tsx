import * as React from "react";
import { useEffect, useState } from "react";
import "../dating.css";
import DatingCards from "./dating_cards";
import DatingHeader from "./dating_header";
import SwipeButtons from "./swipebuttons";

interface IProps {}
interface IState {}

let DatingApp: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({});

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="app">
        <DatingHeader />
        <DatingCards />
        <SwipeButtons />
      </div>
    </React.Fragment>
  );
};
export default DatingApp;
