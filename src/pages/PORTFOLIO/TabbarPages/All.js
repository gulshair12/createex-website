import React from "react";
import PortfolioCard from "../Card/portfoliotabcard.js";
import { Container, Row, Col } from "react-bootstrap";
import Mobile from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/Free_Iphone_13_Pro_Mockup_1.jpg";
import Mobile1 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/Free Phone 14 Pro Mockup.jpg";
import Mobile2 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/Free_Iphone_13_Pro_Mockup_2.jpg";
import Mobile3 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/Free_Iphone_13_Pro_Mockup_3.jpg";
import Mobile4 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/Free_Iphone_13_Pro_Mockup_3.jpg";
import Mobile5 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/566.png";
import Mobile6 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/ccc.png";
import Mobile7 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/ddd.jpg";
import Mobile8 from "../../../SVG/Subpages/PortfolioCard/New folder/New folder/efv.png";
import { Link } from "react-router-dom";
export const All = () => {
  return (
    <>
      <Container>
        <Row style={{ marginTop: "120px" }}>
          <Col>
            <Link to="/PORTFOLIO/detailpage">
              <PortfolioCard portfolioimg={Mobile} />
            </Link>
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <PortfolioCard portfolioimg={Mobile1} />
          </Col>
          <Col>
            <PortfolioCard portfolioimg={Mobile2} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PortfolioCard portfolioimg={Mobile3} />
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <PortfolioCard portfolioimg={Mobile4} />
          </Col>
          <Col>
            <PortfolioCard portfolioimg={Mobile5} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PortfolioCard portfolioimg={Mobile6} />
          </Col>
          <Col style={{ marginTop: "50px" }}>
            <PortfolioCard portfolioimg={Mobile7} />
          </Col>
          <Col>
            <PortfolioCard portfolioimg={Mobile8} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default All;
