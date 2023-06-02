import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImgCarousal from './ImgCarousal';
import './button.css';
import downloadFile from './about.jpg';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadFile;
    link.download = 'about.jpg';
    link.click();
  };

const About = () => {
  return (
    <Container >
      <b style={{fontSize:'2rem'}}><box-icon name='info-circle' type='solid' animation='flashing' size='md'></box-icon> About Me</b>
      <p style={{ color: 'gray', fontWeight: 'bold' }}>———————— Here are some of my skills ————————</p>
      <Row className="justify-content-center" >
        <Col style={{padding:'2rem'}} className="col-lg-5 col-md-8 col-sm-12 col-12 text-center">
            <ImgCarousal />
        </Col>
        <Col className="col-lg-6 col-md-8 col-sm-12 col-12 text-center">
            <Row className='justify-content-center'>
                <Col style={{color:'white', backgroundColor:'#4b4f57', padding:'1rem', borderRadius:'0.5rem', margin:'0.5rem'}} className="col-lg-3 col-md-5 col-sm-5 col-5 text-center">
                    <row className="col-12">
                        <box-icon type='solid' name='hard-hat' size='lg' animation='flashing' style={{color:'white'}} ></box-icon><br />
                        Professional Experience 1 Year
                    </row>
                </Col>
                <Col style={{color:'white', backgroundColor:'#4b4f57', padding:'1rem', borderRadius:'0.5rem', margin:'0.5rem'}} className="col-lg-3 col-md-5 col-sm-5 col-5 text-center">
                    <row className="col-12">
                        <box-icon type='solid' size='lg'animation='flashing' name='briefcase-alt-2'></box-icon><br />
                        Completed 10+ Projects
                    </row>
                </Col>
                <Col style={{color:'white', backgroundColor:'#4b4f57', padding:'1rem', borderRadius:'0.5rem', margin:'0.5rem'}} className="col-lg-3 col-md-5 col-sm-5 col-5 text-center">
                    <row className="col-12">
                    <box-icon type='solid' size='lg' animation='flashing' name='check-shield'></box-icon><br />
                        Qualification Engineer B. TECH.
                    </row>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <p>
                    During my B. Tech. graduation tenure, I had the opportunity to gain professional experience working as a cloud developer and spring developer through internships. My performance was highly acknowledged by the employers, and I had the privilege to explore and learn industry standards related to development. Now, I aim to leverage this valuable experience and knowledge to enhance my resume and contribute effectively in future endeavors.
                </p>
                < br />
                <div className="buttons" >
                    <a className='buttonLink' href="#ja" class="button effect hover4" onClick={handleDownload}>Resume <i class="uil uil-file-download-alt"></i></a>
                </div>
            </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default About;
