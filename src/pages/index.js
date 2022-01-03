import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// Translation


// import {
//   slideUp,
//   animateList,
// } from '../helpers/Animation'
// import { motion } from 'framer-motion'
// import ScrollReveal from '../components/ScrollReveal'


// import { useTranslation } from "react-i18next";
const Home = () => {
  // const { t } = useTranslation();

  return (
    <div className="bd-example">
      <Row className="row-cols-1 row-cols-md-2 g-4">
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-0">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Past Tense" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6c757d"></rect><text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <Card.Body>
              <h5 className="card-title">Past Tense</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Details</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-0">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Present Tense" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#8a92a6"></rect><text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <Card.Body>
              <h5 className="card-title">Present Tense</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Details</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-0">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Future tense" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#222750"></rect><text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <Card.Body>
              <h5 className="card-title">Future tense</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Details</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

// translation ##################################
