import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeamCard from "./TeamCard/teamCard.js";
import "./team.css";
import person1 from "../../../SVG/PNG/team1.jpg";
import person2 from "../../../SVG/PNG/Team2.jpg";
import person3 from "../../../SVG/PNG/Team3.jpg";
import person4 from "../../../SVG/PNG/Team4.jpg";

export const index = () => {
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
    {
      id: 4,
      title: "Web Developer",
      subtitle: "React Js",
      image: person4,
    },
    {
      id: 4,
      title: "Web Developer",
      subtitle: "React Js",
      image: person4,
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
      <div
      >
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
                fontSize: '1.2em'
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
            >
              {teamMembers.map((item) => (
              <Col key={item.id} lg={3} md={4} sm={6} xs={12} 
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: "10rem",
              }}
              >
                <TeamCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image} // Replace with the actual image path
                />
              </Col>
                  ))}
            </Row>
      
        </Container>
      </div>
    </>
  );
};
export default index;
