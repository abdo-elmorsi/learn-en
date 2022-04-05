import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import TenseCard from "../../components/tenseCard";
import Loader from "../../components/Table/Loading";
const Home = () => {
    const [Data, setData] = useState();
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        (async () => {
            const res = await fetch("assets/dumyData.json");
            const { TensesTitles } = await res.json();
            setData(TensesTitles);
            setTimeout(() => {
                setloading(false);
            }, 1500);
        })();
    }, []);

    return (
        <div className="bd-example">
            <Row className="row-cols-1 row-cols-md-2 g-4">
                {loading ? (
                    <Loader />
                ) : (
                    Data?.map((ele, i) => {
                        return <TenseCard key={i} data={ele} />;
                    })
                )}
            </Row>
        </div>
    );
};

export default Home;

// translation ##################################
