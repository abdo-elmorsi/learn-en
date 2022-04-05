import React, { useState } from "react";
import { Card, Col, Form, FormLabel, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

import ImageLoader from "../../components/Image-loader";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./style.css";
import { useDispatch } from "react-redux";
import { getUser } from "../../lib/slices/auth";

export default function Signin() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Loading, setLoading] = useState(false);

    const handlesignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                setTimeout(() => {
                    toast.success(
                        `Welcome ${user?.email.split("@").slice(0, 1)}`
                    );
                    dispatch(getUser(user));
                    Navigate("/");
                }, 2000);
            })
            .catch(({ message }) => {
                setLoading(false);
                toast.error(message);
            });
    };
    const handlesignInWithGoogle = async (e) => {
        setLoading(true);
        const googleAuthProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                setLoading(false);
                toast.success(`Welcome ${user?.email.split("@").slice(0, 1)}`);
                dispatch(getUser(user));
               
                if(user?.email.split("@").slice(0, 1) != "abdelrahmandiv") {
                    Navigate("/"); 
                }
            })
            .catch(({ message }) => {
                setLoading(false);
                toast.error(message);
            });
    };
    const handlesignInWithFacebook = async (e) => {
        setLoading(true);
        const facebookAuthProvider = new FacebookAuthProvider();
        await signInWithPopup(auth, facebookAuthProvider)
            .then(({user}) => {
                setLoading(false);
                toast.success(`Welcome ${user?.email.split("@").slice(0, 1)}`);
                dispatch(getUser(user));
                Navigate("/");
            })
            .catch(({ message }) => {
                setLoading(false);
                toast.error(message);
            });
    };
    return (
        <>
            <div id="development">
                You may find some mistakes because it's still under development
            </div>
            <section className="login-content">
                <Row className="m-0 align-items-center bg-white vh-100">
                    <Col md="6">
                        <Row className="justify-content-center">
                            <Col md="10">
                                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-2">
                                            <ImageLoader
                                                src="/assets/images/learn-en-logo.png"
                                                style={{
                                                    objectFit: "contain",
                                                    margin: "5px auto",
                                                }}
                                                quality={100}
                                                alt="sign in logo"
                                                width={"50%"}
                                            />
                                        </div>
                                        <h2 className="mb-2 text-center">
                                            Sign In
                                        </h2>
                                        <Form onSubmit={handlesignIn}>
                                            <Row>
                                                <Col lg="12">
                                                    <Form.Group className="form-group">
                                                        <FormLabel htmlFor="email">
                                                            Email
                                                        </FormLabel>
                                                        <Form.Control
                                                            value={email}
                                                            onChange={(e) =>
                                                                setEmail(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            aria-describedby="email"
                                                            placeholder=" "
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg="12">
                                                    <Form.Group className="form-group">
                                                        <FormLabel htmlFor="password">
                                                            Password
                                                        </FormLabel>
                                                        <Form.Control
                                                            value={password}
                                                            onChange={(e) =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            aria-describedby="password"
                                                            placeholder=" "
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    disabled={
                                                        email.length === 0
                                                            ? true
                                                            : false
                                                    }
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Sign In
                                                    {Loading && (
                                                        <Spinner
                                                            as="span"
                                                            role="status"
                                                            style={{
                                                                verticalAlign:
                                                                    "sub",
                                                            }}
                                                            className="mx-1"
                                                            aria-hidden="true"
                                                            size="sm"
                                                            animation="border"
                                                        />
                                                    )}
                                                </button>
                                            </div>
                                            <p className="text-center my-2">
                                                or sign in with other accounts?
                                            </p>
                                            <div className="d-flex justify-content-center">
                                                <ul className="list-group list-group-horizontal list-group-flush">
                                                    <li
                                                        onClick={
                                                            handlesignInWithGoogle
                                                        }
                                                        className="log-in-google list-group-item border-0 pb-0"
                                                    >
                                                        <img
                                                            className="rounded-circle"
                                                            src={
                                                                "/assets/images/google.svg"
                                                            }
                                                            alt="fb"
                                                        />
                                                    </li>
                                                    <li
                                                        onClick={
                                                            handlesignInWithFacebook
                                                        }
                                                        className="list-group-item log-in-facebook border-0 pb-0"
                                                    >
                                                        <img
                                                            className="rounded-circle"
                                                            src={
                                                                "/assets/images/facebook.png"
                                                            }
                                                            alt="fb"
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="mt-2 text-center">
                                                Don’t have an account?{" "}
                                                <NavLink
                                                    to="/sign-up"
                                                    className="text-underline"
                                                >
                                                    Click here to sign up.
                                                </NavLink>
                                            </p>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        md="6"
                        className="d-md-block d-none bg-primary p-0 vh-100 overflow-hidden "
                    >
                        <ImageLoader
                            src="/assets/images/learn-en-bg.jpg"
                            style={{ objectFit: "fill" }}
                            quality={100}
                            width={"100%"}
                            height={"100%"}
                            alt="sign in background"
                        />
                    </Col>
                </Row>
            </section>
        </>
    );
}
