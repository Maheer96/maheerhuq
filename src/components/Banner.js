import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import gifImage from "../assets/img/bird.gif";

export const Banner = () => {
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
      </Container>
    </section>
  );
};
