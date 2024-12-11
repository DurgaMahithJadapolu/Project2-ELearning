import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Img1 from '../Images/PSBHS Logo icon 1.png';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // Navigate to the Home page
  };

  return (
    <Container
      fluid
      className="about-screen p-4"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Row className="align-items-center h-100 w-100">
        {/* Left Section */}
        <Col xs={12} md={7} className="d-flex align-items-center justify-content-center text-center text-md-start mb-4 mb-md-0">
          <div className="d-flex align-items-center gap-3">
            <img
              src={Img1}
              alt="Logo"
              style={{
                height: '100px',
              }}
            />
            <div>
              <h2 className="text-primary mb-2" style={{ fontSize: '1.3rem' }}>
                Professional School of Behavioral Health Sciences
              </h2>
              <p
                className="text-primary"
                style={{
                  fontSize: '0.9rem',
                  maxWidth: '450px',
                  margin: '0 auto',
                }}
              >
                Interdisciplinary Workshop, Professional Certificate, Certification,
                and Professional Diploma Programs in Physiology and Behavioral Science
              </p>
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col
          xs={12}
          md={5}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            className="p-4 shadow-sm box rounded d-flex flex-column align-items-center justify-content-center"
            style={{
              position: 'relative',
              background: 'white',
              width: '100%',
              maxWidth: '500px',
              height: '400px',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4
              className="mb-4 text-center"
              style={{ fontSize: '1.8rem', fontWeight: 'normal', color: '#333' }}
            >
              Log in to your Account
            </h4>

            <Form style={{ width: '100%', maxWidth: '400px' }}>
              {/* Email Field */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{
                    padding: '12px',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                  }}
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group controlId="formPassword" className="mb-3 position-relative">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{
                    padding: '12px',
                    fontSize: '1rem',
                    borderRadius: '10px',
                    border: '1px solid #ddd',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#888',
                  }}
                >
                  <i className="bi bi-eye"></i>
                </div>
              </Form.Group>

              {/* Remember me and Forgot Password */}
              <Form.Group className="d-flex justify-content-between mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="/#" className="text-decoration-none text-primary">
                  Forgot Password?
                </a>
              </Form.Group>

              {/* Sign Up Link */}
              <div className="text-start mt-3" style={{ fontSize: '1rem' }}>
                Don't have an account?{' '}
                <a href="/#" className="text-primary text-decoration-none">
                  Sign Up
                </a>
              </div>
            </Form>

            {/* '>' Icon at the bottom */}
            <div
              onClick={handleLogin}
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#007bff',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                border: '2px solid white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              &gt;
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
