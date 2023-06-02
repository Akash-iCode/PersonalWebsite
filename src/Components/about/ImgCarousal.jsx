import Carousel from 'react-bootstrap/Carousel';
import aboutImage from './about.jpg';
import mickey from './MicController.png';
import Linked from './Linkedin.jpeg';

function ImgCarousal() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-auto"
          src={Linked}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quirks</h3>
          <p>Adequate teamwork and communication skills, both within team settings and independently.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-auto rounded"
          src={mickey}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hobbies</h3>
          <p>I enjoy dedicating my free time to learning and playing the guitar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-auto"
          src={aboutImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Work</h3>
          <p>I'm passionate about exploring new development technologies through hands-on projects, constantly seeking opportunities to learn and grow.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousal;
