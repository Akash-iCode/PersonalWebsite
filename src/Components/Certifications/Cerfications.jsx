import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './certification.css';
import AWSwala from './AWS-FOUNDATION.png';
import FCCwala from './FCC-WEB-DESIGN.png';
import AWSfreeWala from './aws-coursera.png';
import OracleWala from './ORACLE-OCI.png';

function CertificationCarousal() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <span className='#certifications'>
      <b className='TitleEmphasis'><i class="uil uil-file-plus-alt"></i> Certifications</b>
      <p style={{ color: 'gray', fontWeight: 'bold' }}>———————— Here's about my education ————————</p>
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block mx-auto"
          src={AWSwala}
          alt="First slide"
          style={{ maxWidth: '80vh', maxHeight: '80vw' }}
        /> 
        <Carousel.Caption >
          <h3 style={{color:'white' }}> CLOUD PRACTITIONER </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block mx-auto"
          src={FCCwala}
          alt="Second slide"
          style={{ maxWidth: '80vh', maxHeight: '80vw' }}
        />

        <Carousel.Caption>
          <h3>——————————————</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block mx-auto"
          src={OracleWala}
          alt="Third slide"
          style={{ maxWidth: '80vh', maxHeight: '80vw' }}
        />

        <Carousel.Caption>
          <h3>ORACLE FOUNDAIONS ASSOCIATE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block mx-auto"
          src={AWSfreeWala}
          alt="Third slide"
          style={{ maxWidth: '80vh', maxHeight: '80vw' }}
        />

        <Carousel.Caption>
          <h3>AWS BASICS- COURSERA</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </span>
  );
}

export default CertificationCarousal;
