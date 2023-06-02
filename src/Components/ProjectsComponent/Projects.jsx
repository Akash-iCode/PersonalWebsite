import Card from 'react-bootstrap/Card';
import '../ProjectsComponent/Projects.css';
import OverlayExample from './Overlay/OverlayCard';
import Cricket from './Cricket.gif';
import Jarvis from './Jarvis.gif';
import Quiz from './Quiz.gif';

function ProjectGrid() {
  return (
    <div className="row lay justify-content-center">
      <b className='TitleEmphasis'><box-icon name='briefcase' animation='flashing' size='md'></box-icon> Projects</b>
      <div className="testMargin d-flex flex-wrap justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6 layCard">
          <Card className='giveMargin custom-card'>
            <Card.Img variant="top" src={Cricket} className="custom-card-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <Card.Body>
              <Card.Title>IPL DashBoard with Spring</Card.Title>
              <Card.Text>
                Web application to visualive IPL match data of current and previous season. Based on Angular and Spring
                <br /><br />
              </Card.Text>
              <OverlayExample
                modalTitle="IPL DashBoard with Spring"
                modalText="Web application to visualive IPL match data of current and previous season. Based on Angular and Spring"
                saveButtonText="Back To WebSite"
                image={Cricket}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 layCard">
          <Card className='giveMargin custom-card'>
            <Card.Img variant="top" src={Jarvis} className="custom-card-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <Card.Body>
              <Card.Title>Jarvis | Voice Assistant</Card.Title>
              <Card.Text>
                Desktop Virtual Assistant created using popular NLP & NLG tool OPEN AI for text processing built on python and be trained with user data. 
              </Card.Text>
              <OverlayExample
                modalTitle="Jarvis | Voice Assistant"
                modalText="Desktop Virtual Assistant created using popular NLP & NLG tool OPEN AI for text processing built on python and be trained with user data."
                saveButtonText="Back To WebSite"
                image={Jarvis}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 layCard">
          <Card className='giveMargin custom-card'>
            <Card.Img variant="top" src={Quiz} className="custom-card-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <Card.Body>
              <Card.Title>LMS WEBSITE WITH FEEDBACK REPORT GENERATION</Card.Title>
              <Card.Text>
                Web application designed for assessment evaluation with proctored mode, tracking and comparative feedback report generation for indidivual students.
                <br /> <br />
              </Card.Text>
              <OverlayExample
                modalTitle="LMS WEBSITE WITH FEEDBACK REPORT GENERATION"
                modalText="Web application designed for assessment evaluation with proctored mode, tracking and comparative feedback report generation for indidivual students."
                saveButtonText="Back To WebSite"
                image={Quiz}
              />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
