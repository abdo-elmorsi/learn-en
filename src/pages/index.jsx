import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ColorSwitcher from "../components/ColorSwitcher";
import ImageLoader from "../components/Image-loader";
import { motion } from "framer-motion";
import { slideDown, slideUp } from "../helpers/Animation";
const ImageB = "/assets/images/homePageImageB.jpg";
const ImageL = "/assets/images/homePageImageL.jpg";

export default function Index() {
    const Navigate = useNavigate();
    const [Image, setImage] = useState("");
    const { darkMode } = useSelector((state) => state.config);
    useEffect(() => {
        if (darkMode) {
            setImage(ImageB);
        } else {
            setImage(ImageL);
        }
    }, [darkMode]);

    return (
        <>
            <Card className="mb-5">
                <Row>
                    <motion.div
                        variants={slideDown}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeOut",
                            duration: 0.6,
                            delay: 0.6,
                        }}
                        className="col-sm-12 col-md-6 Card p-4 d-flex justify-content-center align-items-center flex-column"
                    >
                        <h4>LEARN</h4>
                        <h1 className="fw-bold">
                            <ColorSwitcher text="EN" />G
                            <ColorSwitcher text="L" />I
                            <ColorSwitcher text="SH" />
                        </h1>
                        <h4>ONLINE</h4>
                        <Button
                            onClick={() => Navigate("g_basics")}
                            className="mt-4"
                            variant="primary"
                            size="lg"
                        >
                            GET STARTED
                        </Button>
                    </motion.div>
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeOut",
                            duration: 0.6,
                            delay: 0.6,
                        }}
                        className="col-sm-12 col-md-6 Card d-none d-md-block"
                    >
                        <ImageLoader className={"img-fluid"} src={Image} />
                    </motion.div>
                </Row>
            </Card>
        </>
    );
}
