import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Form } from "react-bootstrap";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
// animation
import { motion } from "framer-motion";
import { itemSlideUp } from "../../../helpers/Animation";
// table
import DataTable from "react-data-table-component";

import { AddCollocations } from "../../../lib/slices/collocations";
import Loading from "../../../components/Table/Loading";

// firebase
import { db } from "../../../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import ExpandedComp from "../../../components/Table/ExpandedComponent";

// components
import AddCollocation from "./AddCollocation";
import UpdateCollocation from "./UpdateCollocation";

const CollocationsControl = () => {
    const Language = Cookies.get("i18next") || "en";
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [filter, setfilter] = useState("");
    const [Data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const { config, Collocations } = useSelector((state) => state);

    const columns = useMemo(
        () => [
            {
                name: "id",
                selector: (_, i) => i + 1,
                sortable: true,
                maxWidth: "125px",
            },
            {
                name: `${t("Name")}`,
                selector: (row) =>
                    Language === "en" ? row?.en?.Name : row?.ar?.Name,
                cell: (row) => (
                    <span style={{ color: `${row?.isphrasal && "red"}` }}>
                        {Language === "en" ? row?.en?.Name : row?.ar?.Name}
                    </span>
                ),
                sortable: true,
            },
            {
                name: "actions",
                cell: (row) => <UpdateCollocation status={row} />,
            },
        ],
        [t, Language]
    );
    // handle filter
    useEffect(() => {
        const newData = Collocations?.collocations.filter((item) => {
            return (
                item?.en?.Name?.toString().includes(filter?.toLowerCase()) ||
                false
            );
        });
        setData(newData);
    }, [Collocations, filter]);

    // Fetch Data
    useEffect(() => {
        try {
            onSnapshot(
                query(
                    collection(db, "Collocations"),
                    orderBy("createdAt", "asc")
                ),
                (snapshot) => {
                    dispatch(
                        AddCollocations([
                            ...snapshot.docs.map((doc) => ({
                                ...doc.data(),
                                id: doc.id,
                            })),
                        ])
                    );
                    setloading(false);
                }
            );
        } catch (error) {
            setloading(false);
        }
    }, [dispatch]);
    // data provides access to your row data
    const ExpandedComponent = ({ data }) => (
        <ExpandedComp data={data} Language={Language} config={config} />
    );

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
                        <AddCollocation />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <motion.div
                            variants={itemSlideUp}
                            initial="hidden"
                            animate="visible"
                            className="col"
                        >
                            {!loading ? (
                                <DataTable
                                    title={t("Collocations")}
                                    columns={columns}
                                    data={Data}
                                    highlightOnHover
                                    theme={`${config.darkMode && "solarized"}`}
                                    pagination
                                    expandableRows
                                    expandableRowsComponent={ExpandedComponent}
                                />
                            ) : (
                                <Loading />
                            )}
                        </motion.div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CollocationsControl;

// translation ##################################
