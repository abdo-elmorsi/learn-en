import React, { useState, useRef } from "react";
import { Row, Col, Form, InputGroup, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import DataServices from "../../../firebase/services"
const Admin = () => {
  const formData = useRef();
  const [loading, setloading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const data = {
      "en": {
        "Name": formData.current.Name.value,
        "Ex": formData.current.Ex.value || 'Not available right now.',
        "Desc": formData.current.Desc.value || 'Not available right now.',
      },
      "ar": {
        "Name": formData.current.NameAr.value,
        "Ex": formData.current.ExAr.value || 'غير متوفر.',
        "Desc": formData.current.DescAr.value || 'غير متوفر.',
      }
    }
    if (formData.current.Name.value !== "" && formData.current.Name.value !== undefined && formData.current.NameAr.value !== "" && formData.current.NameAr.value !== undefined) {
      try {
        await DataServices.addItem('Collocations', data);
        toast.success("Collocation added");
        formData.current.reset();
        setloading(false);
      } catch (error) {
        console.log(error);
        toast.error(error);
        setloading(false);
      }
    } else {
      toast.warning("At least add collocation name ar/en")
    }
  }
  return (
    <form onSubmit={(e) => handelSubmit(e)} ref={formData}>
      <Row>
        <Col md={6}>
          <h2>en</h2>
          <InputGroup className="mb-4">
            <Form.Control name="Name" type="text" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control name="Ex" type="text" placeholder="Example" aria-label="Ex" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control name="Desc" type="text" placeholder="Descreption" aria-label="Descreption" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col md={6}>
          <h2>ar</h2>
          <InputGroup className="mb-4">
            <Form.Control name="NameAr" type="text" placeholder="الاسم" aria-label="الاسم" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control name="ExAr" type="text" placeholder="المثال" aria-label="المثال" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control name="DescAr" type="text" placeholder="الوصف" aria-label="الوصف" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col md="2 ">
          <Button className="w-100" onClick={handelSubmit}>submit  {loading && (
            <Spinner
              as="span"
              role="status"
              style={{ verticalAlign: "sub" }}
              className="mx-1"
              aria-hidden="true"
              size="sm"
              animation="border"
            />
          )}</Button>
        </Col>
      </Row>
    </form>
  );
};

export default Admin;