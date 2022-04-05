import React from "react";
// import React, { useEffect } from 'react'

//header
import Header from "./header";
//subheader
import SubHeader from "./sub-header";
//sidebar
import Sidebar from "./sidebar";
//footer
import Footer from "./footer";

import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    let { pathname } = useLocation();

    return (
        <>
            {!pathname.includes("sign") && <Sidebar />}
            <main className="main-content">
                <div className="position-relative overflow-hidden">
                    {!pathname.includes("sign") && <Header />}
                    {!pathname.includes("sign") && (
                        <SubHeader pageName={pathname} />
                    )}
                </div>
                <div
                    className={
                        "position-relative  py-0 " +
                        (!pathname.includes("sign") && "content-inner mt-4")
                    }
                >
                    {children}
                    {/* <DefaultRouter /> */}
                </div>
                {!pathname.includes("sign") && <Footer />}
            </main>
        </>
    );
};

export default Layout;
