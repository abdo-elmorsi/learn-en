import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from "../firebase/firebase";

import {
    Accordion,
    useAccordionButton,
    AccordionContext,
} from "react-bootstrap";
import { sidebarMini } from "../lib/slices/toggleSidebar";
import { useDispatch } from "react-redux";

function CustomToggle({ children, eventKey, onClick }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) =>
        onClick({ state: !active, eventKey: eventKey })
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <NavLink
            aria-expanded={isCurrentEventKey ? "true" : "false"}
            className="nav-link"
            role="button"
            onClick={(e) => {
                e.preventDefault();

                decoratedOnClick(isCurrentEventKey);
            }}
            to={`${children.length}`}
        >
            {children}
        </NavLink>
    );
}

const VerticalNav = () => {
    const { t } = useTranslation();
    let { pathname } = useLocation();
    const dispatch = useDispatch();
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                {!auth?.currentUser?.email.startsWith("abdelrahmandiv") ? (
                    <>
                        <Accordion.Item
                            as="li"
                            className="mb-1"
                            eventKey="horizontal-menu"
                            bsPrefix="nav-item"
                        >
                            <NavLink
                                onClick={(e) => {
                                    dispatch(sidebarMini());
                                }}
                                style={{ textDecoration: "none" }}
                                to="/"
                            >
                                <div
                                    className={`${
                                        pathname === "/" ? "active" : ""
                                    } nav-link`}
                                >
                                    <i className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            viewBox="0 0 64 56.01"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M63.63,24.65,56,18.42V8.74A.76.76,0,0,0,55.25,8h-2.5a.76.76,0,0,0-.75.75v6.42L34.52.89a4,4,0,0,0-5.05,0L.37,24.65a1,1,0,0,0-.15,1.4L1.49,27.6a1,1,0,0,0,1.4.15L8,23.58V54a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V38l8,0V54a2,2,0,0,0,2,2l16,0a2,2,0,0,0,2-2V23.58l5.11,4.17a1,1,0,0,0,1.4-.14l1.27-1.55a1,1,0,0,0-.15-1.41ZM52,52h0L40,52V36a2,2,0,0,0-2-2L26,34a2,2,0,0,0-2,2h0V52H12V20.31L32,4,52,20.31Z"
                                            />
                                        </svg>
                                    </i>
                                    <span className="item-name">
                                        {t("Home")}
                                    </span>
                                </div>
                            </NavLink>
                        </Accordion.Item>
                        <Accordion.Item
                            as="li"
                            className="mb-1"
                            eventKey="Grammars"
                            bsPrefix="nav-item"
                        >
                            <CustomToggle
                                eventKey="Grammars"
                                active={
                                    activeMenu === "Grammars" ? true : false
                                }
                                onClick={(activeKey) =>
                                    setActiveMenu(activeKey)
                                }
                            >
                                <i className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="23"
                                        viewBox="0 0 48 64"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z"
                                        ></path>
                                    </svg>
                                </i>
                                <span className="item-name">
                                    {t("Grammars")}
                                </span>
                                <i className="right-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </i>
                            </CustomToggle>
                            <Accordion.Collapse eventKey="Grammars">
                                <ul className="sub-nav">
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/g_basics"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/g_basics"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                B{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Basics")}
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/g_tenses"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/g_tenses"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                T{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Tenses")}
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </Accordion.Collapse>
                        </Accordion.Item>
                        <Accordion.Item
                            as="li"
                            className="mb-1"
                            eventKey="Vocabulary"
                            bsPrefix="nav-item"
                        >
                            <CustomToggle
                                eventKey="Vocabulary"
                                active={
                                    activeMenu === "Vocabulary" ? true : false
                                }
                                onClick={(activeKey) =>
                                    setActiveMenu(activeKey)
                                }
                            >
                                <i className="icon">
                                    <svg
                                        width="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M2 11.0786C2.05 13.4166 2.19 17.4156 2.21 17.8566C2.281 18.7996 2.642 19.7526 3.204 20.4246C3.986 21.3676 4.949 21.7886 6.292 21.7886C8.148 21.7986 10.194 21.7986 12.181 21.7986C14.176 21.7986 16.112 21.7986 17.747 21.7886C19.071 21.7886 20.064 21.3566 20.836 20.4246C21.398 19.7526 21.759 18.7896 21.81 17.8566C21.83 17.4856 21.93 13.1446 21.99 11.0786H2Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M11.2451 15.3843V16.6783C11.2451 17.0923 11.5811 17.4283 11.9951 17.4283C12.4091 17.4283 12.7451 17.0923 12.7451 16.6783V15.3843C12.7451 14.9703 12.4091 14.6343 11.9951 14.6343C11.5811 14.6343 11.2451 14.9703 11.2451 15.3843Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10.211 14.5565C10.111 14.9195 9.762 15.1515 9.384 15.1015C6.833 14.7455 4.395 13.8405 2.337 12.4815C2.126 12.3435 2 12.1075 2 11.8555V8.38949C2 6.28949 3.712 4.58149 5.817 4.58149H7.784C7.972 3.12949 9.202 2.00049 10.704 2.00049H13.286C14.787 2.00049 16.018 3.12949 16.206 4.58149H18.183C20.282 4.58149 21.99 6.28949 21.99 8.38949V11.8555C21.99 12.1075 21.863 12.3425 21.654 12.4815C19.592 13.8465 17.144 14.7555 14.576 15.1105C14.541 15.1155 14.507 15.1175 14.473 15.1175C14.134 15.1175 13.831 14.8885 13.746 14.5525C13.544 13.7565 12.821 13.1995 11.99 13.1995C11.148 13.1995 10.433 13.7445 10.211 14.5565ZM13.286 3.50049H10.704C10.031 3.50049 9.469 3.96049 9.301 4.58149H14.688C14.52 3.96049 13.958 3.50049 13.286 3.50049Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </i>
                                <span className="item-name">
                                    {t("Vocabulary")}
                                </span>
                                <i className="right-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </i>
                            </CustomToggle>
                            <Accordion.Collapse eventKey="Vocabulary">
                                <ul className="sub-nav">
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/idioms"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/idioms"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                I{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Idioms")}
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/prepositions"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/prepositions"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                P{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Prepositions")}
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/collocations"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/collocations"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                C{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Collocations")}
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            onClick={(e) => {
                                                dispatch(sidebarMini());
                                            }}
                                            className={`${
                                                pathname === "/phrasalVerb"
                                                    ? "active"
                                                    : ""
                                            } nav-link`}
                                            to="/phrasalVerb"
                                        >
                                            <i className="icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <g>
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="8"
                                                            fill="currentColor"
                                                        ></circle>
                                                    </g>
                                                </svg>
                                            </i>
                                            <i className="sidenav-mini-icon">
                                                {" "}
                                                P{" "}
                                            </i>
                                            <span className="item-name">
                                                {t("Phrasal verbs")}
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </Accordion.Collapse>
                        </Accordion.Item>
                    </>
                ) : (
                    <>
                        {/* Admin */}
                        {/*  Collocations Controls */}
                        <Accordion.Item
                            as="li"
                            className="mb-1"
                            eventKey="horizontal-menu"
                            bsPrefix="nav-item"
                        >
                            <NavLink
                                onClick={(e) => {
                                    dispatch(sidebarMini());
                                }}
                                style={{ textDecoration: "none" }}
                                to="/collocations_controls"
                            >
                                <div
                                    className={`${
                                        pathname === "/collocations_controls"
                                            ? "active"
                                            : ""
                                    } nav-link`}
                                >
                                    <i className="icon">
                                        <svg
                                            width="22"
                                            height="23"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="edit"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            className="svg-inline--fa fa-edit fa-w-18 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                                                className=""
                                            ></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">
                                        {t("collocations Controls")}
                                    </span>
                                </div>
                            </NavLink>
                        </Accordion.Item>

                        {/* Phrasal Verbs Controls */}
                        <Accordion.Item
                            as="li"
                            className="mb-1"
                            eventKey="horizontal-menu"
                            bsPrefix="nav-item"
                        >
                            <NavLink
                                onClick={(e) => {
                                    dispatch(sidebarMini());
                                }}
                                style={{ textDecoration: "none" }}
                                to="/phrasalVerbs_controls"
                            >
                                <div
                                    className={`${
                                        pathname === "/phrasalVerbs_controls"
                                            ? "active"
                                            : ""
                                    } nav-link`}
                                >
                                    <i className="icon">
                                        <svg
                                            width="22"
                                            height="23"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="far"
                                            data-icon="edit"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            className="svg-inline--fa fa-edit fa-w-18 fa-2x"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
                                                className=""
                                            ></path>
                                        </svg>
                                    </i>
                                    <span className="item-name">
                                        {t("Phrasal verbs controls")}
                                    </span>
                                </div>
                            </NavLink>
                        </Accordion.Item>
                    </>
                )}
            </Accordion>
        </>
    );
};

export default VerticalNav;
