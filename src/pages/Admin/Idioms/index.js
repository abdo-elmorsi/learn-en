import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    Row,
    Col,
    Card,
    Form,
    OverlayTrigger,
    ListGroup,
    Tooltip,
    Button,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Styles from "../../../styles/IdiomsExpressions.module.scss";
import ColorSwitcher from "../../../components/ColorSwitcher";

// animation
import { motion } from "framer-motion";
import { animateList, slideUp } from "../../../helpers/Animation";
// table

import Loading from "../../../components/Table/Loading";

import DataServices from "../../../firebase/services";
// components
import AddIdioms from "./AddIdioms";
import ScrollReveal from "../../../components/ScrollReveal";
import { useSpeechSynthesis } from "react-speech-kit";
import UpdateIdioms from "./UpdateIdioms";

const CollocationsControl = () => {
    const { speak } = useSpeechSynthesis();
    const { t } = useTranslation();
    const [filter, setfilter] = useState("");
    const [oldData, setoldData] = useState([]);
    const [Data, setData] = useState([]);
    const { darkMode } = useSelector((state) => state.config);

    // handle filter
    useEffect(() => {
        const newData = oldData.filter((item) => {
            return (
                item?.first
                    ?.toString()
                    .toLowerCase()
                    .includes(filter?.toLowerCase()) || false
            );
        });
        setData(newData);
    }, [oldData, filter]);

    // Fetch Data
    useEffect(() => {
        (async () => {
            const { docs } = await DataServices.getAllItems("Idioms");
            const sortedData = docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .sort((a, b) =>
                    a.Ex.length > b.Ex.length
                        ? -1
                        : a.Ex.length < b.Ex.length
                        ? 1
                        : 0
                );
            setData(sortedData);
        })();
    }, []);

    return (
        <Card style={{ minHeight: "400px" }}>
            <Card.Body>
                <Row>
                    <Col sm="12" md="6">
                        <Form.Group className="col-12 col-md-8 mx-auto text-md-start">
                            <Form.Label>{t("Search")}</Form.Label>
                            <Form.Control
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`${t("Name")}...`}
                            />
                        </Form.Group>
                    </Col>
                    <Col
                        sm="12"
                        md="6"
                        className="mt-3 mt-md-0 d-flex justify-content-center align-items-start flex-column"
                    >
                        <AddIdioms />
                    </Col>
                </Row>
                <Row>
                    <React.Suspense fallback={<Loading />}>
                        {Data &&
                            Data?.map((ele, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <ScrollReveal
                                            className={`col-12 col-lg-6`}
                                            sm={12}
                                            lg={6}
                                            variants={animateList}
                                        >
                                            <motion.div variants={slideUp}>
                                                <ListGroup>
                                                    <OverlayTrigger
                                                        placement="top-start"
                                                        delay={{
                                                            show: 300,
                                                            hide: 250,
                                                        }}
                                                        overlay={
                                                            <Tooltip id="button-tooltip">
                                                                {"Ex: " +
                                                                    (ele?.Ex ||
                                                                        "Not available")}
                                                            </Tooltip>
                                                        }
                                                        context={ele.Ex}
                                                        containerPadding={20}
                                                    >
                                                        <ListGroup.Item
                                                            className={`${
                                                                darkMode
                                                                    ? "text-white"
                                                                    : ""
                                                            } my-2 d-flex justify-content-between ${
                                                                Styles.col
                                                            }`}
                                                        >
                                                            <Button
                                                                size="sm"
                                                                className="bg-transparent shadow-none border-0"
                                                                onClick={() =>
                                                                    speak({
                                                                        text: ele?.first,
                                                                    })
                                                                }
                                                            >
                                                                🎤
                                                            </Button>
                                                            <span className="flex-grow-1">
                                                                {`${i + 1}: `}
                                                                <ColorSwitcher
                                                                    text={
                                                                        ele?.first
                                                                    }
                                                                />
                                                            </span>
                                                            <span className="">
                                                                <UpdateIdioms
                                                                    status={ele}
                                                                />
                                                            </span>
                                                        </ListGroup.Item>
                                                    </OverlayTrigger>
                                                </ListGroup>
                                            </motion.div>
                                        </ScrollReveal>
                                    </React.Fragment>
                                );
                            })}
                    </React.Suspense>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CollocationsControl;

// translation ##################################
