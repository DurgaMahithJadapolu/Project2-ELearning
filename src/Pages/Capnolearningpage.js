import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import Person from "../Images/Peter M_upscayl_5x_realesrgan-x4plus 3.png";
import './Capnolearning.css'
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/home'); // Navigate back to the Home page
  };

  return (
    <div>
      <Header/>
      <Container fluid>
        <Row className="ms-1">
          <Col md={12}>
          <Button   className="mb-3 btn btn-outline-primary " 
          onClick={handleBackClick}
          style={{
          color:'black',
          background:'none',
          width:'100px'
          }}
          >
  Back
</Button>

            <p className="" style={{fontSize:'13px'}}>CapnoLearning</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="px-4 pb-4 ">
  <Row g={6}>  {/* Increased the gutter space between columns */}
    <Col xs={12} sm={7} md={8}>
      <Card className="mb-3" style={{ border: "none" }}>
        <Card.Body
          className="bg-primary d-flex justify-content-center align-items-center"
          style={{ borderRadius: "10px" }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "5px",
            }}
          >
            <button
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "75px",
                height: "75px",
                backgroundColor: "white",
                border: "5px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
              }}
            >
              <i
                className="bi bi-play-fill"
                style={{ fontSize: "3rem" }}
              ></i>
            </button>
            <p
              className="play-label mt-2"
              style={{ color: "white", textAlign: "center" }}
            >
              Watch free trial
            </p>
          </div>
        </Card.Body>
      </Card>

      <h3>CapnoLearning - Chapter 1</h3>
      <p>
        <i className="bi bi-clock"></i> 1h 30m
      </p>

      <section>
        <h2 className="fw-bold">Educator</h2>
        <div className="border-none" style={{ border: "none" }}>
          <div className="d-flex align-items-center">
            <img
              src={Person}
              alt="Educator"
              className="rounded-circle "
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "blue",
              }}
            />
            <div>
              <strong>Peter M Litchfield</strong>
              <p className="mb-0">Respiratory Psychophysiologist</p>
            </div>
          </div>
        </div>
        <p className="text-muted">
          With over 30 years of expertise in respiratory psychophysiology,
          Dr. Peter M.itchfield specializes in advancing breathing science
          for health, performance, and behavioral transformation. As the
          creator of CapnoLearning® and the CapnoTrainer® he has
          revolutionized approaches to understanding and improving
          breathing habits worldwide.
        </p>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="fw-bold">Description</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Id sed mattis
          suspendisse adipiscing neque neque ultricies congue. Tincidunt
          mauris hendrerit lorem posuere. Elementum pellentesque sed
          mollis neque vulputate sapien a. Ut facilisi nibh enim euismod.
          Purus non massa fringilla fringilla fringilla leo. Nunc eget
          lectus velit cras metus suspendisse eu. Sed in gravida elementum
          nullam. Phasellus id in cursus rhoncus faucibus urna tellus.
          Proin amet porttitor lectus auctor pharetra vel eu. Facilisi
          quam morbi leo cras. Dictum ut dictum lobortis iaculis erat.
          Tincidunt molestie laoreet eu sodales. Gravida aliquet.
        </p>
      </section>

      {/* Earn Your Certificate Section */}
      <section className="mt-5">
        <h2 className="fw-bold">Earn Your Certificate</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur. Nunc tempor nunc enim
          mattis cursus. Pulvinar augue quam morbi aenean varius
          sollicitudin nibh vel. Sit in mattis quis enim dignissim
          condimentum. Sit amet tempus vel sit turpis dictum at. Dui morbi
          odio odio donec urna. Sed sed neque ac tellus id.
        </p>
      </section>

      {/* Quiz Details Section */}
      <section className="mt-5">
        <h3 className="fw-bold">Quiz Details:</h3>
        <ul className="list-unstyled">
          <li className="text-muted">
            Lorem ipsum dolor sit amet consectetur. Nisi ut morbi id at
            dictum odio enim. Dapibus lacus in turpis orci. Elementum
            risus ac orci turpis leo aenean id. Donec aenean in ac
            facilisi. Risus feugiat consectetur id et enim a nisl
            malesuada. Vulputate massa leo et ut diam mattis dictum
            mauris.
          </li>
        </ul>
      </section>
    </Col>

    <Col xs={12} sm={4} md={4}>
  <Card>
    <Card.Body>
      <h5 className="ms-3"  style={{color:"black"}}>Study Guides</h5>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centers items horizontally
          justifyContent: 'center', // Centers items vertically
        }}
      >
        <ListGroup style={{ width: '100%' }}> {/* Ensures ListGroup spans full width */}
          {Array.from({ length: 10 }).map((_, idx) => (
            <ListGroup.Item
              key={idx}
              className="border-0 "
              style={{
                maxHeight: "180px",
                display: 'flex',
                flexDirection: 'column',
                 
              }}
            >
              <div>
                <div className="fw-bold " style={{ fontSize: '0.8rem' }}>
                  module {idx + 1}
                </div>
                <div className="rounded">
                  <div
                    className=" d-flex bg-light"
                    style={{

                      borderRadius: '5px',
                      justifyContent: 'center', // Centers the inner content
                    }}
                  >
                    <div className="pt-1 ms-2 d-flex align-items-center">
                      <i
                        className="bi bi-play-circle-fill text-primary me-2"
                        style={{ fontSize: "45px" }}
                      ></i>
                    </div>
                    <div className="pt-4">
                      <h6 style={{ fontSize: "16px" }}>
                        CapnoLearning Chapter {idx + 1}
                      </h6>
                      <p>10m</p>
                    </div>
                  </div>
                  <div
                    className="d-flex justify-content-end mt-2"
                    style={{
                      backgroundColor: 'none',
                      justifyContent: 'center', // Centers the button section
                    }}
                  >
                    <div className="d-flex align-items-center gap-1">
                      <small className="text-muted text-quiz">Complete the Quiz</small>
                      <Button variant="primary" size="sm" style={{
                        color:'blue',
                        background:'none',
                      }}>
                        Start
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Card.Body>
  </Card>
</Col>

  </Row>
</Container>

    </div>
  );
};

export default App;
