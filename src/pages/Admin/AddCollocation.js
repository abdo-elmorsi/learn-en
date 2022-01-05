import React, { useEffect, useState } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import httpRequest from "../../api";
import { AddCollocations } from "../../lib/slices/collocations";
// translation
// import { useTranslation } from "react-i18next";

const Admin = () => {
  const dispatch = useDispatch();
  const { Collocations } = useSelector((state) => state);
  const [NameAr, setNameAr] = useState('');
  const [ExAr, setExAr] = useState('');
  const [DescAr, setDescAr] = useState('');
  const [NameEn, setNameEn] = useState('');
  const [ExEn, setExEn] = useState('');
  const [DescEn, setDescEn] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    if (NameAr !== "" && ExAr !== "" && DescAr !== "" && NameEn !== "" && ExEn !== "" && DescEn !== "") {
      httpRequest({
        method: 'POST', url: `/collocations`, data: {
          "id": `${Collocations.collocations.length + 1}`,
          "en": {
            "Name": NameAr,
            "Ex": ExAr,
            "Desc": DescAr,
            "Link": "https://www.google.com"
          },
          "ar": {
            "Name": NameEn,
            "Ex": ExEn,
            "Desc": DescEn,
            "Link": "https://www.google.com"
          }
        }
      }).then(res => {
        console.log(res);
        toast.success("Collocation added");
        setNameAr("");
        setExAr("");
        setDescAr("");
        setNameEn("");
        setExEn("");
        setDescEn("");
      }).catch(er => {
        console.log(er);
        toast.error("sorry there is an error");
        window.location.reload();
      })
    } else {
      toast.warning("Plz Add All Data")
    }
  }
  // Fetch Data
  useEffect(() => {
    if (Collocations.collocations.length === 0) {
      httpRequest({
        method: 'GET', url: `/collocations`,
      }).then(res => {
        dispatch(AddCollocations([...res]))
      }).catch(er => console.log(er))
    }
  }, [dispatch, Collocations.collocations.length]);
  // const { t } = useTranslation();
  return (
    <form onSubmit={handelSubmit}>
      <Row>
        <Col md={6}>
          <h2>en</h2>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setNameAr(e.target.value)} name="Name" type="text" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setExAr(e.target.value)} name="Ex" type="text" placeholder="Ex" aria-label="Ex" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setDescAr(e.target.value)} name="Desc" type="text" placeholder="Descreption" aria-label="Descreption" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col md={6}>
          <h2>ar</h2>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setNameEn(e.target.value)} name="الاسم" type="text" placeholder="الاسم" aria-label="الاسم" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setExEn(e.target.value)} name="المثال" type="text" placeholder="المثال" aria-label="المثال" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => setDescEn(e.target.value)} name="الوصف" type="text" placeholder="الوصف" aria-label="الوصف" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col md="6 mx-auto">
          <Button className="w-100" onClick={handelSubmit}>submit</Button>
        </Col>
      </Row>
    </form>
  );
};

export default Admin;