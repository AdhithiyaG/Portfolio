import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Learnify"
              description="Career recommendation system offering personalized career paths and tools like a resume builder, sticky notes maker, and word meaning search. Built for seamless guidance, it helps users organize, explore, and plan their career effectively."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense Tracker Telegram Bot"
              description="A convenient bot for tracking daily expenses with features like monthly summaries, expense bar chart downloads, and the ability to add and delete expenses. Simplifies financial management with just a chat command as everyone of us use telegram so manage the finance with it will become easier."
              ghLink="https://github.com/AdhithiyaG/Expenses_Tracker_Telegram_Bot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
