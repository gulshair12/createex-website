import React from "react";
import { Row, Col } from "react-bootstrap";
import "./tabbar.css";

export const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <Row className="backbg-tab">
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "UIuX" ? "bgactiveTab-btn shadow" : "bgTab-btn"
          }
          onClick={() => onTabClick("UIuX")}
        >
          All
        </button>
      </Col>
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "Development" ? "bgactiveTab-btn shadow" : "bgTab-btn"
          }
          onClick={() => onTabClick("Development")}
        >
          App Design 
        </button>
      </Col>
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "Graphicdesign"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("Graphicdesign")}
        >
          Web Design
        </button>
      </Col>
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "Graphicdesign"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("Graphicdesign")}
        >
          Graphic Design
        </button>
      </Col>
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "Graphicdesign"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("Graphicdesign")}
        >
          App Development
        </button>
      </Col>
      <Col
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button
          className={
            activeTab === "Graphicdesign"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("Graphicdesign")}
        >
          Web Develpoment
        </button>
      </Col>
    </Row>
  );
};

export default TabBar;
