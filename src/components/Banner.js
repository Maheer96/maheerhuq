import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import gifImage from "../assets/img/bird.gif";
import stars from "../assets/img/All The Stars.png";

export const Banner = () => {
  /* Implementing logic to allow users that click hyperlinks to enter a new browser rather than change the current one*/
  const handleMcMasterClick = () => {
    window.open("https://www.mcmaster.ca/", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/maheer-huq-1aa3b426b/", "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center mt-5">
          <Col xs={12} md={6} xl={7} className="text-start pt-5">
            <h1>
              {`hi! i'm `}
              <span className="animated-underline">maheer</span>
            </h1>
            <p>welcome to my portfolio :)</p>
          </Col>
          <Col xs={12} md={6} xl={5} className="text-center">
            <img src={gifImage} alt="GIF Animation" className="img-fluid" />
          </Col>
        </Row>
        <hr className="mx-auto w-99 fade-in hide-on-mobile"></hr>
        <Row className="align-items-center justify-content-center mt-5">
          <Col xs={12} md={6} xl={5} className="text-center">
            <p>
              I'm a second-year Computer Engineering student studying at{" "}
              <span
                onClick={handleMcMasterClick}
                className="animated-underline clickable"
              >
                McMaster University.
              </span>
            </p>
            <button
              onClick={handleLinkedInClick}
              className="custom-button fade-up"
              variant="primary"
              size="lg"
            >
              Let's Connect!
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
