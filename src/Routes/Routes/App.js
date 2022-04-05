import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUser } from "../../lib/slices/auth";
import Layout from "../../layout";
import NotFound from "../../pages/PageNotFound";
import Signin from "../../pages/auth/Signin";
import SignUp from "../../pages/auth/Signup";

import { AdminRouts, UsersRouts } from "../Constants";
const AppRouter = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser !== null) {
                dispatch(getUser(currentUser));
            } else {
                dispatch(getUser(null));
            }
        });
    }, [dispatch]);

    return (
        <Layout>
            <Routes>
                {UsersRouts.map((e) => {
                    return (
                        <Route
                            key={e.route}
                            element={e.element}
                            path={e.route}
                        />
                    );
                })}
                {/* Admin */}
                {AdminRouts.map((e) => {
                    return (
                        <Route
                            key={e.route}
                            element={(() => {
                                if (user?.email.startsWith("abdelrahmandiv"))
                                    return e.element;
                                return <Navigate to={"/sign-in"} />;
                            })()}
                            path={e.route}
                        />
                    );
                })}

                {/* sign-in */}
                <Route
                    element={(() => {
                        if (user?.email.startsWith("abdelrahmandiv"))
                            return <Navigate to={`/collocations_controls`} />;
                        return <Signin />;
                    })()}
                    path={"sign-in"}
                />
                <Route
                    element={(() => {
                        if (user?.email.startsWith("abdelrahmandiv"))
                            return <Navigate to={`/collocations_controls`} />;
                        return <SignUp />;
                    })()}
                    path={"sign-up"}
                />

                {/* not found */}
                <Route
                    element={(() => (
                        <NotFound />
                    ))()}
                    path={"*"}
                />
            </Routes>
        </Layout>
    );
};
export default AppRouter;
