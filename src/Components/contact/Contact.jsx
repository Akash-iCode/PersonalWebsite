import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './miniCard.css';
import Kakashi from './Kakashi.gif';

export default class Contact extends Component {
  render() {
    return (
      <span>
        <b className='TitleEmphasis'><box-icon name='message-dots' animation='tada' ></box-icon> Let's Connect</b>
        <p style={{ color: 'gray', fontWeight: 'bold' }}>———————— Here's about my education ————————</p>
        <Container className='d-flex justify-content-center'>
        <Row  className='col-lg-12 col-md-12 col-sm-11 d-flex justify-content-center'>
          <Col style={{
            backgroundImage: `url(${Kakashi})`,
            borderRadius:'1rem',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} className='col-lg-6 col-md-4 col-12 justify-content-center d-flex'>
            <h2 style={{ backgroundColor:'rgba(0,0,0,0.5)',color:'white',margin:'auto', paddingLeft:'2rem',paddingRight:'2rem',paddingTop:'0.5rem',paddingBottom:'0.5rem',borderRadius:'1rem'}}> Here's how you may reach out to me <i class="uil uil-message"></i></h2>
          </Col>
          <Col className='col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center'>
            <button className='col-10'  style={{ backgroundColor: 'grey', color: 'white', fontSize: '1rem', margin: '0.25rem', padding: '0.25rem',borderRadius:'1rem' }}><b>Email <i class="uil uil-envelope-info"></i></b> <br/> aakashbhingare@gmail.com <br/> <b>Mail Me <i class="uil uil-envelope-edit"></i></b></button>
            <button className='col-10'  style={{ backgroundColor: 'grey', color: 'white', fontSize: '1rem', margin: '0.25rem', padding: '0.25rem',borderRadius:'1rem' }}><b>LinkedIn <i class="uil uil-linkedin-alt"></i></b><br/>akashBhingare<br/> <b>My Profile <i class="uil uil-file-search-alt"></i> </b> </button>
            <button className='col-10'  style={{ backgroundColor: 'grey', color: 'white', fontSize: '1rem', margin: '0.25rem', padding: '0.25rem',borderRadius:'1rem' }}><b>WhatsApp <i class="uil uil-whatsapp"></i> </b><br/>7588761113<br/> <b>Message Me <i class="uil uil-comment-message"></i> </b></button>
          </Col>
        </Row>
        </Container>
      </span>
    )
  }
}
