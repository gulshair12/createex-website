import React, { useState } from 'react';
import NavBar from '../NavBar/index.js';
import CustomTab from './TabBar/tabbar.js';
import All from './TabbarPages/All.js';
import AppDesign from './TabbarPages/Appdesign.js';
import WebDesign from './TabbarPages/Webdesig.js';
import GraphicDesign from './TabbarPages/Graphicdesign.js';
import AppDevelopment from './TabbarPages/Appdevelopment.js';
import WebDevelopment from './TabbarPages/webdevelopment.js';
import { Container } from 'react-bootstrap';
import Footer from '../../Component/Footer.jsx';
export const Index = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      {' '}
      <NavBar
        pageTitle='Showcasing Our Software Solutions in Action'
        PageName='Portfolio'
      />
      <Container className='mb-4'>
        <CustomTab activeTab={activeTab} onTabClick={handleTabClick} />

        {activeTab === 'All' && <All />}
        {activeTab === 'App Design' && <AppDesign />}
        {activeTab === 'Web Design' && <WebDesign />}
        {activeTab === 'Graphic Design' && <GraphicDesign />}
        {activeTab === 'App Development' && <AppDevelopment />}
        {activeTab === 'Web Development' && <WebDevelopment />}
      </Container>
      <Footer />
    </>
  );
};
export default Index;
