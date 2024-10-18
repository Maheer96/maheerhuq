import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImage from "../assets/img/headshot.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMcMasterClick = () => {
    window.open("https://www.mcmaster.ca/", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSectionTop = document.getElementById("about").offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = 400;

      if (scrollPosition > aboutSectionTop - threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className={
        isVisible
          ? "about-section fade-up-on-scroll visible"
          : "about-section fade-up-on-scroll"
      }
    >
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6} className="text-left">
            <h2 className="section-title animated-underline">— about me? —</h2>
            <p className="about-description">
              I'm currently a full-time student interested in both frontend and
              backend development. As the creator of{" "}
              <a href="https://basescript.org/">BaseScript</a> and a contributor
              to <a href="https://gdscmcmasteru.ca/">McMaster GDSC</a>'s
              open-source projects, I am constantly working with a mix of new,
              innovative technologies.
            </p>
            <br></br>
            <p>
              Here are some cool tech stacks I've recently been surrounded with:
            </p>
            <br></br>
            <Row>
              <Col xs={6}>
                <ul className="tech-list">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="tech-list">
                  <li>Python</li>
                  <li>C</li>
                  <li>Firebase</li>
                </ul>
              </Col>
            </Row>
            <br></br>
            <p className="about-description">
              I also enjoy basketball, reading, and graphic designing outside of
              the classroom.
            </p>
          </Col>
          <Col xs={12} md={6} xl={6} className="text-center">
            <Image
              src={profileImage}
              rounded
              fluid
              className="profile-image hide-on-mobile"
              alt="Profile"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
