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
  const [Data, setData] = useState({});
  const [isphrasal, setisphrasal] = useState(false)
  const HandleData = (e) => setData({ ...Data, [e.target.name]: e.target.value })

  const handelSubmit = (e) => {
    e.preventDefault();

    if (Data.NameAr !== "" && Data.ExAr !== "" && Data.DescAr !== "" && Data.NameEn !== "" && Data.ExEn !== "" && Data.DescEn !== "") {
      httpRequest({
        method: 'POST', url: `/collocations`, data: {
          "id": `${Collocations.collocations.length + 1}`,
          "isphrasal": isphrasal,
          "en": {
            "Name": Data.Name,
            "Ex": Data.Ex,
            "Desc": Data.Desc,
            "Link": "https://www.google.com"
          },
          "ar": {
            "Name": Data.NameAr,
            "Ex": Data.ExAr,
            "Desc": Data.DescAr,
            "Link": "https://www.google.com"
          }
        }
      }).then(res => {
        console.log(res);
        toast.success("Collocation added");
      }).catch(er => {
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
            <Form.Control onChange={(e) => HandleData(e)} name="Name" type="text" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => HandleData(e)} name="Ex" type="text" placeholder="Ex" aria-label="Ex" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => HandleData(e)} name="Desc" type="text" placeholder="Descreption" aria-label="Descreption" aria-describedby="basic-addon1" />
          </InputGroup>
          <Form.Check
            onChange={() => setisphrasal(!isphrasal)}
            type="switch"
            id="custom-switch"
            label={"phrasal verb"}
          />
        </Col>
        <Col md={6}>
          <h2>ar</h2>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => HandleData(e)} name="NameAr" type="text" placeholder="الاسم" aria-label="الاسم" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => HandleData(e)} name="ExAr" type="text" placeholder="المثال" aria-label="المثال" aria-describedby="basic-addon1" />
          </InputGroup>
          <InputGroup className="mb-4">
            <Form.Control onChange={(e) => HandleData(e)} name="DescAr" type="text" placeholder="الوصف" aria-label="الوصف" aria-describedby="basic-addon1" />
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