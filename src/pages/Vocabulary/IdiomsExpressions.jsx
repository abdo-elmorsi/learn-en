import React, { useState, useEffect } from "react";
import { Button, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { animateList, slideUp } from "../../helpers/Animation";
import ScrollReveal from "../../components/ScrollReveal";
import ColorSwitcher from "../../components/ColorSwitcher";

import Styles from "../../styles/IdiomsExpressions.module.scss";
import { useSpeechSynthesis } from "react-speech-kit";
export default function IdiomsExpressions() {
    const [Data, setData] = useState();
    const [loading, setloading] = useState(false);
    const { darkMode } = useSelector((state) => state.config);
    const { speak } = useSpeechSynthesis();
    useEffect(() => {
        setloading(true);
        (async () => {
            const res = await fetch("assets/dumyData.json");
            const { IdiomsExpressions } = await res.json();
            setData(IdiomsExpressions);
            setloading(false);
        })();
    }, []);

    if (loading) {
        return "loading...";
    }
    return (
        <Row>
            {Data?.map((ele, i) => {
                return (
                    <React.Fragment key={i}>
                        <ScrollReveal
                            className={`col-12 col-md-6`}
                            sm={12}
                            lg={6}
                            variants={animateList}
                        >
                            <motion.div variants={slideUp}>
                                <ListGroup>
                                    <ListGroup.Item
                                        className={`${
                                            darkMode ? "text-white" : ""
                                        } my-2 ${Styles.col}`}
                                    >
                                        <Button
                                            size="sm"
                                            className="bg-transparent shadow-none border-0"
                                            onClick={() =>
                                                speak({ text: ele.first })
                                            }
                                        >
                                            🎤
                                        </Button>
                                        <u>
                                            {`${ele.id}: `}
                                            <ColorSwitcher
                                                text={`${ele?.first}`}
                                            />
                                        </u>
                                        {" => "}
                                        {ele?.second}
                                    </ListGroup.Item>
                                </ListGroup>
                            </motion.div>
                        </ScrollReveal>
                    </React.Fragment>
                );
            })}
        </Row>
    );
}
