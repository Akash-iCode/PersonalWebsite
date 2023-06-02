import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myGIF from './BuggyLuffy.gif';

export default class IntroQuote extends Component {
  render() {
    return (
      <Container style={{ padding: '1rem' }}>
        <Row className="justify-content-center">
          <Col
            className="d-flex justify-content-center col-lg-11 col-md-11 col-sm-11 col-11 text-center"
            style={{
              border: '2px solid black',
              position: 'relative',
              borderRadius:'1rem',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${myGIF})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(5px)',
                zIndex: -1,
              }}
            ></div>

            <h2
              style={{
                padding: '3rem',
                margin: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '0.5rem',
              }}
            >
              The Aim Of Education Is Not Knowledge But Action
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
