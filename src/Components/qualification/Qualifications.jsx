import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Nav, Tab } from 'react-bootstrap';
import './qual.css';
const Qualifications = () => {
  return (
    <span>
          <b className='TitleEmphasis'><box-icon name='edit' type='solid' animation='tada' ></box-icon> Qualifications</b>
    <p style={{ color: 'gray', fontWeight: 'bold' }}>———————— Here's about my education ————————</p>
    <Container style={{ width: '60%' }}>
      <Tab.Container id="myTab" defaultActiveKey="home-tab" >
        <Nav variant="tabs" fill>
          <Nav.Item>
            <Nav.Link eventKey="home-tab">Education </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile-tab">Experience </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="home-tab" >
            <br />
            <b>React JS</b>
            <ProgressBar striped variant="success" now={80} /><br />
            <b>HTML - CSS</b>
            <ProgressBar striped variant="info" now={70} /><br />
            <b> Bootstrap -Tailwind</b>
            <ProgressBar striped variant="warning" now={90} /><br />
            <b>Angular</b>
            <ProgressBar striped variant="danger" now={66} /><br />
            <b>Javascript</b>
            <ProgressBar striped variant="info" now={80} /><br />
          </Tab.Pane>
          <Tab.Pane eventKey="profile-tab">
          <br />
            <b> Node </b>
            <ProgressBar striped variant="danger" now={66} /><br />
            <b>Spring </b>
            <ProgressBar striped variant="info" now={70} /><br />
            <b>Java </b>
            <ProgressBar striped variant="success" now={80} /><br />
            <b> Python </b>
            <ProgressBar striped variant="warning" now={60} /><br />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
    </span>
  );
};

export default Qualifications;
