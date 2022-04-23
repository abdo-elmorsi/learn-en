import { useSelector } from "react-redux";
import { CustomDialog } from "react-st-modal";
import { toast } from "react-toastify";
import DataServices from "../../../firebase/services";

import { useForm } from "react-hook-form";
import { useDialog } from "react-st-modal";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const AddIdioms = () => {
    const AddItem = ({ config }) => {
        const dialog = useDialog();
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();
        const onSubmit = (data) => {
            if (data?.first && data?.second) {
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
                        <Col sm={12}>
                            <InputGroup className="mt-2">
                                <Form.Control
                                    {...register("first", {
                                        required: "Name is required",
                                    })}
                                    name="first"
                                    placeholder={"Name"}
                                    type="text"
                                    aria-label="first"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Form.Text className="err-msg text-danger">
                                {errors?.first?.message}
                            </Form.Text>

                            <InputGroup className="mt-2">
                                <Form.Control
                                    {...register("second", {
                                        required: "desc is requird",
                                    })}
                                    name="second"
                                    placeholder={"desc"}
                                    type="text"
                                    aria-label="second"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Form.Text className="err-msg text-danger">
                                {errors?.second?.message}
                            </Form.Text>

                            <InputGroup className="mt-2">
                                <Form.Control
                                    {...register("Ex")}
                                    name="Ex"
                                    placeholder={"example"}
                                    type="text"
                                    aria-label="Ex"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Form.Text className="err-msg text-danger">
                                {errors?.Ex?.message}
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
    const { config } = useSelector((state) => state);
    const handleAdd = async () => {
        const result = await CustomDialog(<AddItem config={config} />, {
            title: "Add a Idiom",
        });
        if (result) {
            const data = {
                first: result.first,
                second: result.second,
                Ex: result.Ex || "Not available",
            };
            try {
                console.log(data);
                await DataServices.addItem("Idioms", data);
                toast.success(`Idioms ( ${data.first} ) is  added`);
            } catch (error) {
                console.log(error);
                toast.error("Sorry there is an error");
            }
        }
    };

    return (
        <>
            <span>Add a collection</span>
            <Button onClick={() => handleAdd()} className="px-4 py-2">
                <svg
                    width="22"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="pen"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-pen fa-w-16 fa-2x"
                >
                    <path
                        fill="currentColor"
                        d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z"
                        className=""
                    ></path>
                </svg>
            </Button>
        </>
    );
};

export default AddIdioms;
