import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import LandScapecard from '../Card/LandScapeCard.js';
import Image1 from '../../../SVG/Subpages/PortfolioCard/New folder/New folder/205.jpg';

export const Webdesig = () => {
  return (
    <Container>
      <Row style={{ marginTop: '120px' }}>
        <Col>
          <LandScapecard LandScapeImage={Image1} />
        </Col>
        <Col style={{ marginTop: '50px' }}>
          <LandScapecard LandScapeImage='https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80' />
        </Col>
        <Col>
          <LandScapecard LandScapeImage='https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80' />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <LandScapecard LandScapeImage='https://img.freepik.com/free-psd/banner-template-traditional-italian-food-restaurant_23-2148526083.jpg?w=900&t=st=1693388776~exp=1693389376~hmac=20c609f60906fd9765ea6e9ac9be7f87b44fbb68404356d8d1a4e6ca543ebea0' />
        </Col>
        <Col style={{ marginTop: '20px' }}>
          <LandScapecard LandScapeImage='https://as2.ftcdn.net/v2/jpg/02/70/55/41/1000_F_270554106_vHjPMGA2qHOjhaiE0pWfvpAE6Ym98gWt.jpg' />
        </Col>
        <Col>
          <LandScapecard LandScapeImage='https://img.freepik.com/free-psd/sushi-concept-website-template_23-2148459644.jpg?w=996&t=st=1693388929~exp=1693389529~hmac=ce99dbf73cde83fb30c4ff76cfa9a6d2bcabf22adbd7a931429655993b024b12' />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col>
          <LandScapecard LandScapeImage='https://img.freepik.com/free-psd/web-template-with-landing-page-traditional-italian-food-restaurant_23-2148526098.jpg?w=996&t=st=1693388736~exp=1693389336~hmac=b3148711845dc36057e2f745c059439a62fbe0855b596ab383bc1a1e1410a697' />
        </Col>
        <Col style={{ marginTop: '20px' }}>
          <LandScapecard LandScapeImage='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80' />
        </Col>
        <Col>
          <LandScapecard LandScapeImage='https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' />
        </Col>
      </Row>
    </Container>
  );
};
export default Webdesig;
