import * as React from "react";
import { useEffect, useState } from "react";
import "../datingheader.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

interface IProps {}
interface IState {}

let DatingHeader: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({});

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img className="header__logo" src="logo192.png" alt="header" />
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    </React.Fragment>
  );
};
export default DatingHeader;
