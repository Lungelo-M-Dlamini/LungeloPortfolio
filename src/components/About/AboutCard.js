import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lungelo Dlamini </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            <br />I am a junior programmer pursuing to gain more professional
            experience and a platform to showcase my skills
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making music
            </li>
            <li className="about-activity">
              <ImPointRight /> Meeting people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Discomfort is an opportunity for you to grow"{" "}
          </p>
          <footer className="blockquote-footer">Lungelo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
