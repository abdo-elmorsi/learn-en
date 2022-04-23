import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useMemo } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { itemSlideUp } from "../../helpers/Animation";
import { useLocation } from "react-router-dom";

import ExpandedComp from "./ExpandedComponent";
import Loading from "./Loading";
import { useSpeechSynthesis } from "react-speech-kit";
export default function Index(props) {
    const {
        filter,
        setfilter,
        t,
        loading,
        Data,
        darkMode,
        DataType,
        setDataType,
    } = props;
    const { speak } = useSpeechSynthesis();
    const { pathname } = useLocation();
    const Language = Cookies.get("i18next") || "en";

    const ExpandedComponent = ({ data }) => (
        <ExpandedComp data={data} darkMode={darkMode} Language={Language} />
    );
    const columns = useMemo(
        () => [
            {
                name: "id",
                selector: (row, i) => i + 1,
            },

            {
                name: `${t("Voice")}`,
                selector: (row) => {
                    return (
                        <Button
                            size="sm"
                            onClick={() => speak({ text: row?.en?.Name })}
                        >
                            🎤
                        </Button>
                    );
                },
            },
            {
                name: `${t("Name")}`,
                selector: (row) =>
                    Language === "en" ? row?.en?.Name : row?.ar?.Name,
                sortable: true,
            },
        ],
        [t, Language, speak]
    );
    const rowPreExpanded = (row) =>
        row.en.Name === "go shopping" || row.en.Name === "break up";
    return (
        <Card className="mt-4" style={{ minHeight: "400px" }}>
            <Card.Body>
                <Row>
                    <Col sm="12" md="6">
                        {/* <div className="d-flex justify-content-between mt-3"> */}
                        <Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start">
                            <Form.Label>{t("Search")}</Form.Label>
                            <Form.Control
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`${t("Name")}...`}
                            />
                        </Form.Group>
                        {/* </div> */}
                    </Col>
                    <Col sm="12" md="6">
                        <Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start mt-3 mt-md-0">
                            <Form.Label>
                                {t("Choose Collocations Type")}
                            </Form.Label>
                            <Form.Select
                                style={{ cursor: "pointer" }}
                                aria-label="Floating label select example"
                                onChange={(e) => setDataType(e.target.value)}
                            >
                                <option value="">All Types</option>
                                {[
                                    "do",
                                    "go",
                                    "make",
                                    "take",
                                    "hold",
                                    "have",
                                    "come",
                                    "break",
                                    "calm",
                                ].map((ele) => {
                                    return <option key={ele}>{ele}</option>;
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <motion.div
                        variants={itemSlideUp}
                        initial="hidden"
                        animate="visible"
                        className="col"
                    >
                        {!loading ? (
                            <DataTable
                                title={
                                    pathname.includes("collocations")
                                        ? `${t("Collocations")}`
                                        : `${t("Phrasal verbs")}`
                                }
                                columns={columns}
                                data={Data.filter((ele) =>
                                    ele?.en?.Name.toString().startsWith(
                                        `${DataType}`
                                    )
                                )}
                                highlightOnHover
                                theme={`${darkMode && "solarized"}`}
                                pagination
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                expandableRowExpanded={rowPreExpanded}
                            />
                        ) : (
                            <Loading />
                        )}
                    </motion.div>
                </Row>
            </Card.Body>
        </Card>
    );
}
