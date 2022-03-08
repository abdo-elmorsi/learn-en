import React, { useState, useEffect } from "react";
import { ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { animateList, slideUp } from "../helpers/Animation";
import ScrollReveal from "../components/ScrollReveal";

import Styles from "../styles/IdiomsExpressions.module.scss";
export default function IdiomsExpressions() {
    const [Data, setData] = useState();
    const [loading, setloading] = useState(false);
    const { darkMode } = useSelector((state) => state.config);
    useEffect(() => {
        setloading(true);
        (async () => {
            const res = await fetch("assets/idiomsExpressions.json");
            const { data } = await res.json();
            setData(data);
            setloading(false);
        })();
    }, []);

    if (loading) {
        return "loading...";
    }
    return (
        <div>
            <ListGroup>
                <Row>
                    <ScrollReveal variants={animateList}>
                        {Data?.map((ele, i) => {
                            return (
                                <motion.div
                                    variants={slideUp}
                                    transition={{
                                        delay: (i - 0.8) * 0.5,
                                    }}
                                    className={`Col `}
                                    sm={12}
                                    lg={6}
                                    key={i}
                                >
                                    <ListGroup.Item
                                        className={`${
                                            darkMode ? "text-white" : ""
                                        } my-2 ${Styles.col}`}
                                    >
                                        <u>
                                            {`${i + 1}:  `}
                                            {ele?.first}
                                        </u>
                                        {" => "}
                                        {ele?.second}
                                    </ListGroup.Item>
                                </motion.div>
                            );
                        })}
                    </ScrollReveal>
                </Row>
            </ListGroup>
        </div>
    );
}
