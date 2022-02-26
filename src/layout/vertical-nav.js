import React from "react";
import { Accordion } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from "../firebase/firebase";

const VerticalNav = () => {
  const { t } = useTranslation();
  let location = useLocation();
  return (
    <>
      <Accordion as="ul" className="navbar-nav iq-main-menu">
        {!auth?.currentUser?.email.startsWith('abdelrahmandiv') ? (
          <>
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/">
                <div
                  className={`${location.pathname === "/" ? "active" : ""
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
                  <span className="item-name">{t("Tenses")}</span>
                </div>
              </Link>
            </Accordion.Item>
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/collocations">
                <div
                  className={`${location.pathname === "/collocations" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                      viewBox="0 0 48 64">
                      <path fill="currentColor"
                        d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z" />
                    </svg>
                  </i>
                  <span className="item-name">{t("Collocations")}</span>
                </div>
              </Link>
            </Accordion.Item>
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/phrasalVerb">
                <div
                  className={`${location.pathname === "/phrasalVerb" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                      viewBox="0 0 48 64">
                      <path fill="currentColor"
                        d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z" />
                    </svg>
                  </i>
                  <span className="item-name">{t("Phrasal verbs")}</span>
                </div>
              </Link>
            </Accordion.Item>
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/idioms-expressions">
                <div
                  className={`${location.pathname === "/idioms-expressions" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                      viewBox="0 0 48 64">
                      <path fill="currentColor"
                        d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z" />
                    </svg>
                  </i>
                  <span className="item-name">{t("Idioms expressions")}</span>
                </div>
              </Link>
            </Accordion.Item>
          </>
        ) : (
          <>
            {/* Admin */}
            {/* Add Collocations */}
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/addCollocation">
                <div
                  className={`${location.pathname === "/addCollocation" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg width="22" height="23" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-pen fa-w-16 fa-2x"><path fill="currentColor" d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z" className=""></path></svg>
                  </i>
                  <span className="item-name">{t("Add Collocation")}</span>
                </div>
              </Link>
            </Accordion.Item>
            {/* Update Collocations */}
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/updateCollocations">
                <div
                  className={`${location.pathname === "/updateCollocations" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg width="22" height="23" aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-edit fa-w-18 fa-2x"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" className=""></path></svg>
                  </i>
                  <span className="item-name">{t("Update Collocations")}</span>
                </div>
              </Link>
            </Accordion.Item>


            {/* Add Phrasal Vrebs */}
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/addPhrasalVerbs">
                <div
                  className={`${location.pathname === "/addPhrasalVerbs" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg width="22" height="23" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-pen fa-w-16 fa-2x"><path fill="currentColor" d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z" className=""></path></svg>
                  </i>
                  <span className="item-name">{t("Add Phrasal Verbs")}</span>
                </div>
              </Link>
            </Accordion.Item>
            {/* Update Phrasal Vrebs */}
            <Accordion.Item
              as="li"
              className="mb-1"
              eventKey="horizontal-menu"
              bsPrefix="nav-item"
            >
              <Link style={{ textDecoration: "none" }} to="/updatePhrasalVerbs">
                <div
                  className={`${location.pathname === "/updatePhrasalVerbs" ? "active" : ""
                    } nav-link`}
                >
                  <i className="icon">
                    <svg width="22" height="23" aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-edit fa-w-18 fa-2x"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" className=""></path></svg>
                  </i>
                  <span className="item-name">{t("Update Phrasal Verbs")}</span>
                </div>
              </Link>
            </Accordion.Item>
          </>
        )}
      </Accordion>
    </>
  );
};

export default VerticalNav;
