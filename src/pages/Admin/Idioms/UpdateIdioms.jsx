import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CustomDialog, useDialog } from "react-st-modal";
import DataServices from "../../../firebase/services";
import { useForm } from "react-hook-form";
import { useState } from "react";

const UpdateCollocation = ({ status }) => {
    const { config } = useSelector((state) => state);
    const handleDelete = async (id) => {
        try {
            await DataServices.deleteItem("Idioms", status.id);
            toast.success(`Idiom ( ${status.first} ) is deleted`);
        } catch (error) {
            console.log(error);
            toast.error("Sorry there is an error");
        }
    };
    const EditItem = ({ config }) => {
        const [first, setfirst] = useState(status.first);
        const [second, setsecond] = useState(status.second);
        const [Ex, setEx] = useState(status.Ex);
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
                                    value={first}
                                    onChange={(e) => setfirst(e.target.value)}
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
                                    value={second}
                                    onChange={(e) => setsecond(e.target.value)}
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
                                    value={Ex}
                                    onChange={(e) => setEx(e.target.value)}
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

    const handleEdit = async () => {
        const result = await CustomDialog(
            <EditItem config={config} status={status} />,
            {
                title: `Update idiom ( ${status.first} )`,
            }
        );
        if (result) {
            const data = {
                first: result.first,
                second: result.second,
                Ex: result.Ex || "Not available",
            };
            try {
                await DataServices.updateItem("Idioms", status.id, data);
                toast.success(`Idiom ( ${status.first} ) is updated`);
            } catch (error) {
                toast.error("Sorry there is an error");
            }
        }
    };

    return (
        <div className="d-flex align-items-center">
            <Button
                onClick={() => handleEdit()}
                className="d-flex align-items-center justify-content-center px-2 py-1"
            >
                <svg
                    width={27}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="user-edit"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-user-edit fa-2x"
                >
                    <path
                        fill="currentColor"
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm406.6 204.1l-34.7-34.7c-6.3-6.3-14.5-9.4-22.8-9.4-8.2 0-16.5 3.1-22.8 9.4L327.8 424l-7.6 68.2c-1.2 10.7 7.2 19.8 17.7 19.8.7 0 1.3 0 2-.1l68.2-7.6 222.5-222.5c12.5-12.7 12.5-33.1 0-45.7zM393.3 473.7l-39.4 4.5 4.4-39.5 156.9-156.9 35 35-156.9 156.9zm179.5-179.5l-35-35L573 224h.1l.2.1 34.7 35-35.2 35.1zM134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 20.7 0 39.9 6.3 56 16.9l22.8-22.8c-22.2-16.2-49.3-26-78.8-26-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h243.5c-2.8-7.4-4.1-15.4-3.2-23.4l1-8.6H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320z"
                        className=""
                    ></path>
                </svg>
            </Button>
            <Button
                className="py-1 ms-2 text-nowrap"
                variant="danger"
                onClick={() => handleDelete()}
            >
                <svg
                    width={17}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="trash-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                >
                    <path
                        fill="currentColor"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        className=""
                    ></path>
                </svg>
            </Button>
        </div>
    );
};

export default UpdateCollocation;
