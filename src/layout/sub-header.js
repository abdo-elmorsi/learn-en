import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { fadeIn } from "../helpers/Animation";

const SubHeader = ({ pageName = "" }) => {
    const { t } = useTranslation();
    const [state, setState] = useState("");
    const currentLanguageCode = Cookies.get("i18next") || "en";
    useEffect(
        (_) => {
            switch (pageName) {
                // Pages
                case "/":
                    setState("Home");
                    break;
                // Grammar
                case "/g_tenses":
                    setState("Tenses");
                    break;
                case "/g_basics":
                    setState("Basics");
                    break;

                // Vocabulary
                case "/idioms":
                    setState("Idioms expressions");
                    break;
                case "/prepositions":
                    setState("Prepositions");
                    break;
                case "/collocations":
                    setState("Collocations");
                    break;

                case "/phrasalVerb":
                    setState("Phrasal verbs");
                    break;
                // ###################################
                // Tenses
                case "/past-tense":
                    setState("Past Tense");
                    break;
                case "/past-simple-tense":
                    setState("Past Simple");
                    break;
                // ###################################
                // Admin
                case "/collocations_controls":
                    setState("Collocations Controls");
                    break;

                case "/phrasalVerbs_controls":
                    setState("Phrasal Verbs Controls");
                    break;
                default:
                    setState("404");
                    break;
            }
        },
        [pageName]
    );
    return (
        <>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="iq-navbar-header"
                style={{ height: "145px" }}
            >
                <Container fluid className=" iq-container">
                    <Row>
                        <Col md="12">
                            <p
                                style={{
                                    bottom: "1%",
                                    color: "gray",
                                    fontSize: "15px",
                                    right: `${
                                        currentLanguageCode === "en"
                                            ? "15px"
                                            : "auto"
                                    }`,
                                    left: `${
                                        currentLanguageCode === "en"
                                            ? "auto"
                                            : "15px"
                                    }`,
                                }}
                                className="position-absolute"
                            >{`${new Date().toDateString()}`}</p>
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h1>{t(state)}</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* {{!-- rounded-bottom if not using animation --}} */}
                <div className="iq-header-img">
                    <img
                        src="/assets/images/top-header.jpg"
                        alt="header"
                        className="img-fluid w-100 h-100 animated-scaleX"
                    />
                </div>
            </motion.div>
        </>
    );
};

export default SubHeader;
