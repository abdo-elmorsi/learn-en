import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ImageLoader from "./Image-loader";

import { slideUp, animateList } from "../helpers/Animation";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
export default function TenseCard({ data }) {
    const { t } = useTranslation();

    return (
        <ScrollReveal
            className="col-sm-12 col-md-6 col-lg-4 "
            variants={animateList}
        >
            <motion.div variants={slideUp} className="card mb-0">
                <ImageLoader
                    width={"100%"}
                    height={200}
                    src={`${data.image}`}
                    alt="Past Tense"
                    quality={100}
                />
                <Card.Body>
                    <h5 className="card-title">{t(`${data.title}`)}</h5>
                    <p className="card-text" style={{ minHeight: "100px" }}>
                        {t(data.desc)}
                    </p>
                    <NavLink to={`${data.link}`} className="btn btn-primary">
                        {t("Details")}
                    </NavLink>
                </Card.Body>
            </motion.div>
        </ScrollReveal>
    );
}
