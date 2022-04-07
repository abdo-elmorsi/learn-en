import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUser } from "../../lib/slices/auth";
import { AdminRouts, UsersRouts } from "../Constants";

// import Loader from "../../components/loader";
const Layout = React.lazy(() => import("../../layout"));
const Signin = React.lazy(() => import("../../pages/auth/Signin"));
const SignUp = React.lazy(() => import("../../pages/auth/Signup"));
const NotFound = React.lazy(() => import("../../pages/PageNotFound"));

const AppRouter = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useLayoutEffect(() => {
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
                            element={
                                <React.Suspense fallback="Loading...">
                                    {e.element}
                                </React.Suspense>
                            }
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
                                    return (
                                        <React.Suspense fallback="Loading...">
                                            {e.element}
                                        </React.Suspense>
                                    );
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
                        return (
                            <React.Suspense fallback="Loading...">
                                <Signin />
                            </React.Suspense>
                        );
                    })()}
                    path={"sign-in"}
                />
                <Route
                    element={(() => {
                        if (user?.email.startsWith("abdelrahmandiv"))
                            return <Navigate to={`/collocations_controls`} />;
                        return (
                            <React.Suspense fallback="Loading...">
                                <SignUp />
                            </React.Suspense>
                        );
                    })()}
                    path={"sign-up"}
                />

                {/* not found */}
                <Route
                    element={(() => (
                        <React.Suspense fallback="Loading...">
                            <NotFound />
                        </React.Suspense>
                    ))()}
                    path={"*"}
                />
            </Routes>
        </Layout>
    );
};
export default AppRouter;
