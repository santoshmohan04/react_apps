import * as React from "react";
import { useState } from "react";
import { prodDataType } from "../model/prodDataModel";
import { prodCategoryData } from "../services/prodData.service";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { right } from "@popperjs/core";

interface IProps {}
interface IState {
  prod_categories: prodDataType[];
}

let Mainpage: React.FC<IProps> = () => {
  let [state, setState] = useState<IState>({
    prod_categories: prodCategoryData.getProdCategories(),
  });
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <i className="bi bi-shop"></i> Lifestyle Store
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  <i className="bi bi-question-circle"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img/intro-bg_1_.jpg")}
              alt="First slide"
              height="500px"
            />
            <Carousel.Caption>
              <h1>We sell lifestyle.</h1>
              <p>Flat 40% OFF on premium brands</p>
              <a href="/products" className="btn btn-danger btn-lg active">
                Shop Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img/sale-banner.jpg")}
              alt="Second slide"
              height="500px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img/pr.png")}
              alt="Third slide"
              height="500px"
            />
          </Carousel.Item>
        </Carousel>
        <div className="m-4">
          <div className="row text-center" id="item_list">
            {state.prod_categories.length > 0 &&
              state.prod_categories.map((cat) => {
                return (
                  <Card
                    style={{ width: "18rem", marginRight: "60px" }}
                    key={cat.id}
                  >
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/" + cat.image + ".jpg")}
                    />
                    <Card.Body>
                      <Card.Title>{cat.name}</Card.Title>
                      <Card.Text>{cat.title}</Card.Text>
                      <Button variant="primary">View</Button>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mainpage;
