import React, { useState } from 'react';
import { Col, Row, Spinner } from "react-bootstrap";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';
import "./style.css"

export default function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const [status, setstatus] = useState(true);
  const location = useHistory();

  const handlesignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (status) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setTimeout(() => {
            toast.success("Login Success");
            history.push("/");
          }, 2000);
        })
        .catch(({ message }) => {
          setLoading(false);
          toast.error(message);
        });
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          setTimeout(() => {
            toast.success("Login Success");
            history.push("/");
          }, 2000);
        })
        .catch(({ message }) => {
          setLoading(false);
          toast.error(message);
        });
    }
  }
  const handlesignInWithGoogle = async (e) => {
    setLoading(true);
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider).then((res) => {
      setLoading(false);
      location.push("/login");
    }).catch(({ message }) => {
      setLoading(false);
      toast.error(message);
    });

  }
  return (
    <div className='parent'>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <Row className='px-5 w-100 logSt-box'>
              <Col className={`${status && 'active'} logSt`}>
                <button onClick={() => setstatus(!status)}>Sign Up</button>
              </Col>
              <Col className={`${!status && 'active'} logSt ms-2`}>
                <button onClick={() => setstatus(!status)}>Sign In</button>
              </Col>
            </Row>
            <form onSubmit={(e) => handlesignIn(e)} className="login">
              <div className="login__field">
                <svg width={16} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="login__icon svg-inline--fa fa-user fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M352 128A128 128 0 1 1 224 0a128 128 0 0 1 128 128z" className="fa-secondary"></path><path fill="currentColor" d="M313.6 288h-16.7a174.1 174.1 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.43 134.43 0 0 0 313.6 288z" className="fa-primary"></path></g></svg>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text" className="login__input" placeholder="User name / Email" />
              </div>
              <div className="login__field">
                <svg width={16} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="login__icon svg-inline--fa fa-lock fa-w-14 fa-2x"><g className="fa-group"><path fill="currentColor" d="M152 224H72v-72C72 68.2 140.2 0 224 0s152 68.2 152 152v72h-80v-72a72 72 0 0 0-144 0z" className="fa-secondary"></path><path fill="currentColor" d="M448 272v192a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V272a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48z" className="fa-primary"></path></g></svg>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" className="login__input" placeholder="Password" />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                {Loading && <Spinner
                  as="span"
                  role="status"
                  style={{ verticalAlign: "sub" }}
                  className="ms-1"
                  aria-hidden="true"
                  size="sm"
                  animation="border"
                />}
                <svg width={16} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="button__icon svg-inline--fa fa-chevron-right fa-w-10 fa-2x"><g className="fa-group"><path fill="currentColor" d="M188.74 256l56.78 56.89L91.21 466.9a24 24 0 0 1-33.94 0l-22.7-22.65a23.93 23.93 0 0 1 0-33.84z" className="fa-secondary"></path><path fill="currentColor" d="M91.25 45.06l194.33 194a23.93 23.93 0 0 1 0 33.84l-40 40-211-211.34a23.92 23.92 0 0 1 0-33.84l22.7-22.65a24 24 0 0 1 33.97-.01z" className="fa-primary"></path></g></svg>
              </button>
            </form>
            <div className="social-login">
              {/* <h3>log in with</h3> */}
              <div className="social-icons mt-4">
                <GoogleButton
                  onClick={() => handlesignInWithGoogle()}
                />
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
        {/* <GoogleButton /> */}
      </div>
    </div>
  );
}
