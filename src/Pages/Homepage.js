import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../Components/Header'
const HomePage = () => {


  const navigate = useNavigate();
  const handlelearning = () => {
    navigate("/capnolearningpage"); // Navigate directly to CapnoLearning page
  };

  return (
    <div className="container-fluid">
       <Header/>

      {/* Greeting */}
      <section className="py-4 bg-light">
        <h2 className="text-muted ">Hi, Cristiano!</h2>
      </section>

      {/* Courses Section */}
      <section>
        <h3 className="mb-4 mt-5">Courses and Workshops</h3>
        <div className="card bgimg" onClick={handlelearning}>
          <div className="card-img-container">
            <div className="card-body">
              <h5 className="card-title text-primary">CapnoLearning</h5>
              <p className="card-text" style={{ color: "gray" }}>
                by Peter Litchfield
              </p>
              <p className="card-text">
                <small className="text-muted">
                  <i
                    className="bi bi-clock"
                    style={{ color: "white", marginRight: "5px" }}
                  >
                    {" "}
                    1h 30m
                  </i>
                </small>
              </p>

              <button  className="btn btn-primary" onClick={handlelearning}>
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
