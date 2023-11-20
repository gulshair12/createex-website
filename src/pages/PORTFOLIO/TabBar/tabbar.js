import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

export const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <Row className='bg-tab shadow mt-4 '>
      <div className='d-flex insideraper'>
        <div className='beforactive'>
          <button
            className={activeTab === 'All' ? 'activeTab-btn shadow' : 'Tab-btn'}
            onClick={() => onTabClick('All')}
          >
            All
          </button>
        </div>
        <div className='beforactive'>
          <button
            className={
              activeTab === 'App Design' ? 'activeTab-btn shadow' : 'Tab-btn'
            }
            onClick={() => onTabClick('App Design')}
          >
            App Design
          </button>
        </div>
        <div className='beforactive'>
          <button
            className={
              activeTab === 'Web Design' ? 'activeTab-btn shadow' : 'Tab-btn'
            }
            onClick={() => onTabClick('Web Design')}
          >
            Web Design
          </button>
        </div>
        <div className='beforactive'>
          <button
            className={
              activeTab === 'Graphic Design'
                ? 'activeTab-btn shadow'
                : 'Tab-btn'
            }
            onClick={() => onTabClick('Graphic Design')}
          >
            Graphic Design
          </button>
        </div>
        <div className='beforactive'>
          <button
            className={
              activeTab === 'App Development'
                ? 'activeTab-btn shadow'
                : 'Tab-btn'
            }
            onClick={() => onTabClick('App Development')}
          >
            App Development
          </button>
        </div>
        <div className='beforactive'>
          <button
            className={
              activeTab === 'Web Development'
                ? 'activeTab-btn shadow'
                : 'Tab-btn'
            }
            onClick={() => onTabClick('Web Development')}
          >
            Web Development
          </button>
        </div>
      </div>
    </Row>
  );
};

export default TabBar;
