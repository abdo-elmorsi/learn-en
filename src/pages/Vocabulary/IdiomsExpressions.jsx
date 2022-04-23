import React, { useState, useEffect } from "react";
import {
    Button,
    ListGroup,
    Row,
    Tooltip,
    OverlayTrigger,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { animateList, slideUp } from "../../helpers/Animation";
import ScrollReveal from "../../components/ScrollReveal";
import ColorSwitcher from "../../components/ColorSwitcher";

import DataServices from "../../firebase/services";
import Styles from "../../styles/IdiomsExpressions.module.scss";
import { useSpeechSynthesis } from "react-speech-kit";
import Loading from "../../components/Table/Loading";
export default function IdiomsExpressions() {
    const [Data, setData] = useState([]);
    const { darkMode } = useSelector((state) => state.config);
    const { speak } = useSpeechSynthesis();

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
        <Row>
            <React.Suspense fallback={<Loading />}>
                {Data?.map((ele, i) => {
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
                                            delay={{ show: 300, hide: 250 }}
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
                                                    darkMode ? "text-white" : ""
                                                } my-2 ${Styles.col}`}
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
                                                <span>
                                                    {`${i + 1}: `}
                                                    <ColorSwitcher
                                                        text={ele?.first}
                                                    />
                                                </span>
                                                {" => "}
                                                <span>{ele?.second}</span>
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
    );
}
