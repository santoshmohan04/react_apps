import * as React from "react";
import { useState, useEffect } from "react";
import DatingCard from "react-tinder-card";
import "../datingcard.css";
import axios from "./axios";

interface IProps {}

let DatingCards: React.FC<IProps> = () => {
  let [people, setPeople] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/dating/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <React.Fragment>
      <div className="datingCards">
        <div className="datingCards__container">
          {people.map((person) => (
            <DatingCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </DatingCard>
          ))}{" "}
        </div>
      </div>
    </React.Fragment>
  );
};
export default DatingCards;
