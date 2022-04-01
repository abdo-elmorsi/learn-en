import React from "react";
import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
const AddItem = ({ config }) => {
    const dialog = useDialog();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (data?.NameAr && data?.NameEn) {
            dialog.close(data);
        }
    };

    return (
        <div className={`${config.darkMode && "dark"}`}>
            <form
                className="d-flex flex-column justify-content-center p-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Row>
                    <Col md={6}>
                        <h2>English</h2>
                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("NameEn", {
                                    required: "Name is required",
                                })}
                                name="NameEn"
                                placeholder={"Name"}
                                type="text"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.NameEn?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("ExEn")}
                                name="ExEn"
                                placeholder={"Example"}
                                type="text"
                                aria-label="Ex"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.ExEn?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("DescEn")}
                                name="DescEn"
                                placeholder={"Descreption"}
                                type="text"
                                aria-label="Descreption"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.DescEn?.message}
                        </Form.Text>
                    </Col>

                    <Col md={6}>
                        <h2>Arabic</h2>
                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("NameAr", {
                                    required: "Name is required",
                                })}
                                name="NameAr"
                                placeholder={"الاسم"}
                                type="text"
                                aria-label="Name"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.NameAr?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("ExAr")}
                                name="ExAr"
                                placeholder={"مثال"}
                                type="text"
                                aria-label="Example"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.ExAr?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("DescAr")}
                                name="DescAr"
                                placeholder={"الوصف"}
                                type="text"
                                aria-label="Descreption"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.DescAr?.message}
                        </Form.Text>
                    </Col>
                </Row>

                <Form.Group className="d-flex justify-content-around w-100 mt-4">
                    <Button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded d-block"
                    >
                        Add
                    </Button>

                    <Button
                        className="px-4 py-2 bg-secondary text-white rounded d-block"
                        onClick={() => dialog.close(false)}
                    >
                        Close
                    </Button>
                </Form.Group>
            </form>
        </div>
    );
};

export default AddItem;
