import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import Doctor from './Doctors'
import Famform from'./FamForm'
import MainPage from './MainPage';
import './NavBar.css'
import Medications from './Medications';
import Medication2 from './Medication2';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Form
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Doctor
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Disease Medication
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Deficiency Medication
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <MainPage />
        </TabPane>
        <TabPane tabId="2">
          <Famform />
        </TabPane>
        <TabPane tabId="3">
          <Doctor />
        </TabPane>
        <TabPane tabId="4">
          <Medications />
        </TabPane>
        <TabPane tabId="5">
          <Medication2 />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;
