import * as React from "react";
import { useState } from "react";
import DatingCard from "react-tinder-card";
import "../swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

interface IProps {}

let SwipeButtons: React.FC<IProps> = () => {
  let [people, setPeople] = useState<any>();

  return (
    <React.Fragment>
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__lightning">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </React.Fragment>
  );
};
export default SwipeButtons;
