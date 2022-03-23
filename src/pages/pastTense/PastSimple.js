import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Loading from "../../components/Table/Loading";

export default function PastSimple() {
    const { t } = useTranslation();
    const columns = [
        {
            name: `${t("Arabic")}`,
            selector: (row) => row.Ar,
            sortable: true,
        },
        {
            name: `${t("Affirmative")}`,
            selector: (row) => row.Affirmative,
            sortable: true,
        },
        {
            name: `${t("Negative")}`,
            selector: (row) => row.Negative,
            sortable: true,
        },
        {
            name: `${t("Interrogative")}`,
            selector: (row) => row.Interrogative,
            sortable: true,
        },
    ];
    const [Data, setData] = useState();
    const [loading, setloading] = useState(false);
    const { darkMode } = useSelector((state) => state.config);
    useEffect(() => {
        setloading(true);
        (async () => {
            const res = await fetch("assets/dumyData.json");
            const { PastSimpleExs } = await res.json();
            setData(PastSimpleExs);
            setloading(false);
        })();
    }, []);

    return (
        <>
            <a className="me-2" href="#Affirmative">
                Affirmative
            </a>
            <a className="me-2" href="#Negative">
                Negative
            </a>
            <a className="me-2" href="#Interrogative">
                Interrogative
            </a>
            <Card className="p-2 pt-4 p-md-4">
                <Row className="mb-3">
                    <Col sm={12}>
                        <h5 className="w-100 w-md-75 text-center mx-auto mb-5">
                            {t(
                                "The English language is used to talk about events that occurred in the past at a specific time. In this lesson, we will learn how to form the past simple in the affirmative, negative and question cases."
                            )}
                        </h5>
                        <h3
                            id="Affirmative"
                            className="fw-bold mt-5 text-primary"
                        >
                            1: Affirmative:
                        </h3>
                        <div className="ps-2 ps-md-4">
                            <span className="fw-bold mb-2 d-block">
                                The form: ( Subject + Verb.2 + Object )
                            </span>
                            <span>Use cases & Examples</span>
                            <Accordion defaultActiveKey="0" alwaysOpen>
                                <Row>
                                    <Col sm={12}>
                                        <Accordion.Item
                                            className={`${
                                                darkMode ? "bg-dark" : ""
                                            }`}
                                            eventKey="0"
                                        >
                                            <Accordion.Header
                                                style={{ direction: "initial" }}
                                                className={`${
                                                    darkMode ? "dark" : ""
                                                }`}
                                            >
                                                {t(
                                                    "1- Expressing events that occurred and ended in the past at a specific time."
                                                )}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {loading ? (
                                                    <Loading />
                                                ) : (
                                                    Data?.slice(0, 3).map(
                                                        (ele, i) => {
                                                            return (
                                                                <Row
                                                                    key={i}
                                                                    className={`${
                                                                        i !==
                                                                            2 &&
                                                                        "border-bottom"
                                                                    } pt-2`}
                                                                >
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Affirmative
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Ar
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            );
                                                        }
                                                    )
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Col>
                                    <Col sm={12}>
                                        <Accordion.Item
                                            className={`${
                                                darkMode ? "bg-dark" : ""
                                            }`}
                                            eventKey="1"
                                        >
                                            <Accordion.Header
                                                style={{ direction: "initial" }}
                                                className={`${
                                                    darkMode ? "dark" : ""
                                                }`}
                                            >
                                                {t(
                                                    "2- Expressing a series of events that ended in the past."
                                                )}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Row className="">
                                                    <Col sm={12} lg={6}>
                                                        <p className="text-center">
                                                            I finished work,
                                                            walked to the beach,
                                                            and found a nice
                                                            place to swim.
                                                        </p>
                                                    </Col>
                                                    <Col sm={12} lg={6}>
                                                        <p className="text-center">
                                                            أنهيت عملي ، مشيت
                                                            إلى الشاطئ ، ووجدت
                                                            مكانًا لطيفًا
                                                            للسباحة.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Col>
                                </Row>
                            </Accordion>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <h3 id="Negative" className="fw-bold mt-5 text-primary">
                            2: Negative:
                        </h3>
                        <div className="ps-2 ps-md-4">
                            <span className="fw-bold mb-2 d-block">
                                The form: ( Subject + did + not + verb1 )
                            </span>
                            <span>Use cases & Examples</span>
                            <Accordion defaultActiveKey="0" alwaysOpen>
                                <Row>
                                    <Col sm={12}>
                                        <Accordion.Item
                                            className={`${
                                                darkMode ? "bg-dark" : ""
                                            }`}
                                            eventKey="0"
                                        >
                                            <Accordion.Header
                                                style={{ direction: "initial" }}
                                                className={`${
                                                    darkMode ? "dark" : ""
                                                }`}
                                            >
                                                {t(
                                                    "1- We use the verb in its basic form and then add didn'tor the acronym didn't . before it"
                                                )}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {loading ? (
                                                    <Loading />
                                                ) : (
                                                    Data?.slice(0, 3).map(
                                                        (ele, i) => {
                                                            return (
                                                                <Row
                                                                    key={i}
                                                                    className={`${
                                                                        i !==
                                                                            2 &&
                                                                        "border-bottom"
                                                                    } pt-2`}
                                                                >
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Negative
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Ar
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            );
                                                        }
                                                    )
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Col>
                                </Row>
                            </Accordion>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <h3
                            id="Interrogative"
                            className="fw-bold mt-5 text-primary"
                        >
                            2: Interrogative:
                        </h3>
                        <div className="ps-4">
                            <span className="fw-bold mb-2 d-block">
                                The form: ( Did + subject + verb1 )
                            </span>
                            <span>Use cases & Examples</span>
                            <Accordion defaultActiveKey="0" alwaysOpen>
                                <Row>
                                    <Col sm={12}>
                                        <Accordion.Item
                                            className={`${
                                                darkMode ? "bg-dark" : ""
                                            }`}
                                            eventKey="0"
                                        >
                                            <Accordion.Header
                                                style={{ direction: "initial" }}
                                                className={`${
                                                    darkMode ? "dark" : ""
                                                }`}
                                            >
                                                {t(
                                                    "1- We use Did at the beginning of the sentence, then we put the subject and then the verb in the infinitive."
                                                )}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {loading ? (
                                                    <Loading />
                                                ) : (
                                                    Data?.slice(0, 3).map(
                                                        (ele, i) => {
                                                            return (
                                                                <Row
                                                                    key={i}
                                                                    className={`${
                                                                        i !==
                                                                            2 &&
                                                                        "border-bottom"
                                                                    } pt-2`}
                                                                >
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Interrogative
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                    <Col
                                                                        sm={12}
                                                                        lg={6}
                                                                    >
                                                                        <p className="text-center">
                                                                            {
                                                                                ele.Ar
                                                                            }
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            );
                                                        }
                                                    )
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Col>
                                </Row>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
                {/* table */}
                <Row className="mt-5">
                    {/* <h3>Examples:</h3> */}
                    {loading ? (
                        <Loading />
                    ) : (
                        <DataTable
                            title={"Examples:"}
                            columns={columns}
                            data={Data}
                            highlightOnHover
                            theme={`${darkMode && "solarized"}`}
                            pagination
                        />
                    )}
                </Row>
            </Card>
        </>
    );
}
