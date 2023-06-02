import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Nav, Tab } from 'react-bootstrap';

const Skillset = () => {
  return (
    <Container className='#skills' style={{ width: '60%' }}>
      <b style={{fontSize:'2rem'}}><box-icon name='visual-studio' type='logo' animation='flashing' size='md'></box-icon> My Skillset</b>
      <p style={{ color: 'gray', fontWeight: 'bold' }}>———————— Here are some of my skills ————————</p>
      <Tab.Container id="myTab" defaultActiveKey="home-tab">
        <Nav variant="tabs" fill>
          <Nav.Item>
            <Nav.Link eventKey="home-tab">Front End</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="profile-tab">Back End </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contactss">Back End </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="home-tab">
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
          <Tab.Pane eventKey="contactss">
          <br />
            <b> AWS </b>
            <ProgressBar striped variant="danger" now={40} /><br />
            <b>Github </b>
            <ProgressBar striped variant="info" now={80} /><br />
            <b>SQL</b>
            <ProgressBar striped variant="success" now={60} /><br />
            <b>Heroku </b>
            <ProgressBar striped variant="warning" now={60} /><br />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Skillset;
