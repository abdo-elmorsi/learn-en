import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ColorSwitcher from "../components/ColorSwitcher";
import ImageLoader from "../components/Image-loader";
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
                    <Col
                        className="p-4 d-flex justify-content-center align-items-center flex-column"
                        sm={12}
                        md={6}
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
                    </Col>
                    <Col className="d-none d-md-block">
                        <ImageLoader className={"img-fluid"} src={Image} />
                    </Col>
                </Row>
            </Card>
        </>
    );
}
