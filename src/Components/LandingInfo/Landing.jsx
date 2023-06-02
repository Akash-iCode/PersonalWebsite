import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypingEffect from './TypingEffect/Typer';
import DownloadButton from './Contact/Connect';
import HomeImage from './profile.jpg'
const Landing = () => {
    const texts = ['UI / UX DESIGNER', 'CLOUD DEVELOPER', 'STUDENT', "BACKEND DEVELOPER"];
  return (

    <Container style={{padding:'1rem'}}>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center col-lg-2 col-md-6 col-sm-12 col-12 text-center" style={{fontSize:'10rem'}}> 
          <Row d-flex justify-content-center>
            <box-icon className='col-lg-9 col-md-8 col-sm-0 col-3' name='github' type='logo' animation='tada' size='lg'></box-icon>
            <box-icon className='col-lg-9 col-md-8 col-sm-0 col-3' name='instagram' type='logo' animation='tada' size='lg'></box-icon>
            <box-icon className='col-lg-9 col-md-8 col-sm-0 col-3' name='linkedin' type='logo' animation='tada' size='lg'></box-icon>
            <style>{`
              @media (max-width: 767px) {
                .row.justify-content-center {
                  flex-wrap: wrap;
                }
                .row.justify-content-center box-icon {
                  width: 33.33%;
                }
              }
              `}
            </style>          
          </Row>
        </Col>
        <Col className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                <div className="homeDescription">
                <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;Akash Bhingare</b></h2>
                <b style={{ color: 'gray', fontWeight: 'bold' }}><span style={{ color: 'gray', fontWeight: 'bold' }}>————</span>  B.Tech. Graduate | MIT AOE, Pune</b>
                <br />
                <TypingEffect texts={texts} typingSpeed={75} />
                <br /><br />
                <p>Passionate young developer skilled in Python, Java, JavaScript, and frameworks like React, Node.js, Spring, and Angular. AWS certified with a drive for exploring new technologies and leveraging cloud development expertise to deliver innovative projects.</p>
                <br />
                <DownloadButton />
                <br /><br />
                </div>
        </Col>
        <Col style={{padding:'2rem'}} className="col-lg-4 col-md-8 col-sm-12 col-12 text-center">
        <img
            src={HomeImage}
            alt="Profile"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
