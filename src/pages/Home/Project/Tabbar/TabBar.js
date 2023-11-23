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
            activeTab === "All" ? "bgactiveTab-btn shadow" : "bgTab-btn"
          }
          onClick={() => onTabClick("All")}
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
            activeTab === "AppDesign" ? "bgactiveTab-btn shadow" : "bgTab-btn"
          }
          onClick={() => onTabClick("AppDesign")}
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
            activeTab === "WebDesign"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("WebDesign")}
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
            activeTab === "AppDevelopment"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("AppDevelopment")}
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
            activeTab === "WebDevelpoment"
              ? "bgactiveTab-btn shadow"
              : "bgTab-btn"
          }
          onClick={() => onTabClick("WebDevelpoment")}
        >
          Web Develpoment
        </button>
      </Col>
    </Row>
  );
};

export default TabBar;
