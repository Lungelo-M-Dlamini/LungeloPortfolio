import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nftmarket from "../../Assets/Projects/nftmarketplace_pic.png";
import emotion from "../../Assets/Projects/emotion.png";
import navapp from "../../Assets/Projects/NavigationApp_pic.png";
import chatify from "../../Assets/Projects/chatapp_pic.png";
import suicide from "../../Assets/Projects/suicide.png";
import vidcall from "../../Assets/Projects/Videocall_pic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          App<strong className="purple">lications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat Application"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with NextJs. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Lungelo-M-Dlamini/ChatApplication.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidcall}
              isBlog={false}
              title="Video Call Application"
              description="Currently working on an application that will need to have a video call feature. The project is still in progress. The application will be made in react native. Click on the demo link to access the same resource I am using for research."
              ghLink="https://github.com/Lungelo-M-Dlamini/VideoMatchApp.git"
              demoLink="https://www.youtube.com/watch?v=rb70_TXRQNE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navapp}
              isBlog={false}
              title="Tourist application"
              description="Contributed to developing a navigation application that will assist tourists with getting directions to places like heritage sites and tourist attraction places. The application was built in flutter with the Google API."
              ghLink="https://github.com/JarreauF/opsc.git"
              demoLink="https://www.youtube.com/watch?v=Zz5hMvgiWmY"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nftmarket}
              isBlog={false}
              title="NFT Marketplace"
              description="Due to my interest in the fourth industrial revolution, my research into lead me to programme an NFT marketplace in NextJS. I am currently working on this project with the intention to modify it to suite the South African audience. The to the resource I searched is on the button below."
              demoLink="https://www.youtube.com/watch?v=x3eRXeMB-4k"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
