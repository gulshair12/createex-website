// Index.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./team.css";
import person1 from "../../../SVG/PNG/team1.jpg";
import person2 from "../../../SVG/PNG/Team2.jpg";
import person3 from "../../../SVG/PNG/Team3.jpg";
import person4 from "../../../SVG/PNG/Team4.jpg";
import Carousel from "./Carousel/CarousalTeam";

const Index = () => {
  const teamMembers = [
    {
      id: 1,
      title: "Web Developer",
      subtitle: "React Js",
      image: person1,
    },
    {
      id: 2,
      title: "Web Developer",
      subtitle: "React Js",
      image: person2,
    },
    {
      id: 3,
      title: "Web Developer",
      subtitle: "React Js",
      image: person3,
    },
    {
      id: 4,
      title: "Web Developer",
      subtitle: "React Js",
      image: person4,
    },
  ];

  return (
    <>
      <div className="teambackground my-5">
        <Container
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Row>
            <h5
              style={{
                color: "#72B63C",
                fontSize: "1.2em",
              }}
            >
              Team Members
            </h5>
          </Row>
          <Row>
            <h4
              style={{
                color: "#444444",
                fontSize: "1.5em",
              }}
            >
              Meet Our Experienced
            </h4>
          </Row>
          <Row
            style={{
              marginTop: "10px",
            }}
          >
            <Col>
              <Carousel teamMembers={teamMembers} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
