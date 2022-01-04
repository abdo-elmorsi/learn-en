import React from "react";
import { Row, Col, Form, Card, Button, Image, InputGroup } from "react-bootstrap";
// translation
import { useTranslation } from "react-i18next";

const Admin = () => {
  const { t } = useTranslation();
  return (
    <Row>
      <Col md={6}>
        <InputGroup className=" mb-3">
          <Form.Control type="text" className="" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Admin;
