import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Loading from "../../../components/Table/Loading";
import ColorSwitcher from "../../../components/ColorSwitcher";

export default function PastSimple() {
    const { t } = useTranslation();
    const columns = [
        {
            name: `${t("Affirmative")} (+)`,
            selector: (row) => row.Affirmative,
            sortable: true,
        },
        {
            name: `${t("Negative")} (-)`,
            selector: (row) => row.Negative,
            sortable: true,
        },
        {
            name: `${t("Interrogative")} (?)`,
            selector: (row) => row.Interrogative,
            sortable: true,
        },
        {
            name: `${t("Arabic")}`,
            selector: (row) => row.Ar,
            sortable: true,
        },
    ];
    const [Data, setData] = useState();
    const [loading, setloading] = useState(false);
    const { darkMode } = useSelector((state) => state.config);
    useEffect(() => {
        setloading(true);
        (async () => {
            const res = await fetch("/assets/dumyData.json");
            const { PastSimpleExs } = await res.json();
            setData(PastSimpleExs);
            setloading(false);
        })();
    }, []);

    return (
        <>
            <Row>
                <Col lg={10}>
                    <Card>
                        <Card.Header className="pt-4 bg-transparent">
                            <h4 className="w-100  mx-auto mb-5">
                                {t(
                                    "The past simple  is used to talk about events that occurred in the past at a specific time."
                                )}
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            {/* uses */}
                            <section>
                                <p className="ps-0 ps-lg-2 h4">
                                    <ColorSwitcher text={t("Uses")} /> :
                                </p>
                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        {t("the event is")}
                                        <ColorSwitcher text="in the past" />
                                    </li>
                                    <li className="mb-3">
                                        {t("the event is")}
                                        <ColorSwitcher text="completely finished" />
                                    </li>
                                    <li className="mb-3">
                                        {t("we say (or understand) the")}
                                        <ColorSwitcher text="time" />
                                        and/or
                                        <ColorSwitcher text="place" />
                                        {t("of the event")}
                                    </li>
                                </ol>
                            </section>

                            {/* first table */}
                            <section className="">
                                <h4 className="mb-3 text-center Header_Line">
                                    <ColorSwitcher
                                        text={`${t(
                                            "How do we make the Past Simple"
                                        )}`}
                                    />
                                    ?
                                </h4>
                                <small className="mb-4 d-block text-center w-75 mx-auto">
                                    {t(
                                        "Look at these examples with the main verbs"
                                    )}
                                    <ColorSwitcher text={"go"} />
                                    (irregular) and
                                    <ColorSwitcher text={"work"} />
                                    (regular):
                                </small>
                                <Table
                                    className="mb-5"
                                    responsive
                                    striped
                                    bordered
                                    style={{ direction: "ltr" }}
                                >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>sub</th>
                                            <th>{t("auxiliary")} (v)</th>
                                            <th>&nbsp;</th>
                                            <th>{t("main")} (v)</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                title="Affirmative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                +
                                            </td>
                                            <td>I</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>went</td>
                                            <td>to school.</td>
                                        </tr>
                                        <tr>
                                            <td>You</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>worked</td>
                                            <td>very hard.</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Negative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                -
                                            </td>
                                            <td>She</td>
                                            <td>did</td>
                                            <td className="text-danger">not</td>
                                            <td>go</td>
                                            <td>with me.</td>
                                        </tr>
                                        <tr>
                                            <td>We</td>
                                            <td>did</td>
                                            <td className="text-danger">not</td>
                                            <td>work</td>
                                            <td>yesterday.</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Interrogative"
                                                rowSpan="3"
                                                className="text-center"
                                            >
                                                ?
                                            </td>
                                            <td>Did</td>
                                            <td>you</td>
                                            <td>&nbsp;</td>
                                            <td>go</td>
                                            <td>to London?</td>
                                        </tr>
                                        <tr>
                                            <td>Did</td>
                                            <td>they</td>
                                            <td>&nbsp;</td>
                                            <td>work</td>
                                            <td>at home?</td>
                                        </tr>
                                        <tr>
                                            <td>Where did</td>
                                            <td>she</td>
                                            <td>&nbsp;</td>
                                            <td>play</td>
                                            <td>yesterday.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>
                                    {t(
                                        "From the above table, notice the following points"
                                    )}
                                    :
                                </p>
                                {/* Positive */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"A: For positive sentences"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t("There is no auxiliary verb")} .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "The main verb is conjugated in the Past Simple, invariable: -ed (or irregular)"
                                            )}
                                            .
                                        </li>
                                    </ol>
                                </div>
                                {/* negative and question */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={
                                            "B: For negative and question sentences:"
                                        }
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t(
                                                "The auxiliary is conjugated in the Past Simple, invariable: did"
                                            )}
                                            .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "For question sentences, we exchange the subject and the auxiliary verb"
                                            )}
                                            .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "The main verb is invariable in base form: base"
                                            )}
                                            .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "For negative sentences, we insert not between the auxiliary verb and main verb"
                                            )}
                                            .
                                        </li>
                                    </ol>
                                </div>
                            </section>
                            {/* second table */}
                            <section className="">
                                <h4 className="mb-3 text-center Header_Line">
                                    <ColorSwitcher
                                        text={`${t(
                                            "Past Simple with the main verb be :"
                                        )}`}
                                    />
                                </h4>
                                <Table
                                    responsive
                                    striped
                                    bordered
                                    style={{ direction: "ltr" }}
                                >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>sub</th>
                                            <th>
                                                {t("main")} (v) <em>be</em>
                                            </th>
                                            <th></th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                title="Affirmative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                +
                                            </td>
                                            <td>I, he/she/it</td>
                                            <td>was</td>
                                            <td></td>
                                            <td>here.</td>
                                        </tr>
                                        <tr>
                                            <td>You, we, they</td>
                                            <td>were</td>
                                            <td>&nbsp;</td>
                                            <td>in London.</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Negative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                -
                                            </td>
                                            <td>I, he/she/it</td>
                                            <td>was</td>
                                            <td className="text-danger">not</td>
                                            <td>there.</td>
                                        </tr>
                                        <tr>
                                            <td>You, we, they</td>
                                            <td>were</td>
                                            <td className="text-danger">not</td>
                                            <td>happy.</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Interrogative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                ?
                                            </td>
                                            <td>Was</td>
                                            <td>I, he/she/it</td>
                                            <td>&nbsp;</td>
                                            <td>right?</td>
                                        </tr>
                                        <tr>
                                            <td>Were</td>
                                            <td>you, we, they</td>
                                            <td>&nbsp;</td>
                                            <td>late?</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                {/* describe the table */}
                                <div>
                                    <p>
                                        {t(
                                            "From the above table, notice the following points"
                                        )}
                                        :
                                    </p>
                                    <ol className="ps-5 pb-4 d-flex justify-content-around align-items-center flex-wrap gap-4">
                                        <li className="mb-3">
                                            {t(
                                                "There is no auxiliary verb, even for questions and negatives"
                                            )}
                                            .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "The main verb (be) is conjugated in the Past Simple"
                                            )}
                                            :
                                            <ColorSwitcher text="was, were" />
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "For negative sentences, we insert not after the main verb"
                                            )}
                                            .
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "For question sentences, we exchange the subject and the main verb"
                                            )}{" "}
                                            .
                                        </li>
                                    </ol>
                                </div>
                                {/* الكلمات الدلاليه */}
                                <div className="">
                                    <h4 className="mb-3 text-center Header_Line">
                                        <ColorSwitcher text={`${t("Tags")}`} />
                                    </h4>

                                    {/* (often, sometimes, always) */}
                                    <div>
                                        <ColorSwitcher
                                            text={
                                                "A: Repetition (often, sometimes, always):"
                                            }
                                        />

                                        <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                            <li className="mb-3">
                                                {t("I")}
                                                <ColorSwitcher text="sometimes walked" />
                                                {t("home at lunchtime")}.
                                            </li>
                                            <li className="mb-3">
                                                {t("I")}
                                                <ColorSwitcher text="often brought" />
                                                {t("my lunch to school")} .
                                            </li>
                                        </ol>
                                    </div>
                                    {/* last week, when I was a child, yesterday, six weeks ago */}
                                    <div>
                                        <ColorSwitcher
                                            text={
                                                "B: Specific point in time  (last week, when I was a child, yesterday, six weeks ago):"
                                            }
                                        />

                                        <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                            <li className="mb-3">
                                                {t("We saw a good film")}
                                                <ColorSwitcher text="last week" />
                                                .
                                            </li>
                                            <li className="mb-3">
                                                <ColorSwitcher text="Yesterday" />
                                                ,{t("I arrived in Geneva")}.
                                            </li>
                                            <li className="mb-3">
                                                {t("She finished her work")}
                                                <ColorSwitcher text="at seven o'clock" />
                                                .
                                            </li>
                                            <li className="mb-3">
                                                {t("I went to the theatre")}
                                                <ColorSwitcher text="last week" />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </section>
                            {/* table */}
                            <h4 className="mb-3 text-center Header_Line">
                                {t("Examples")}
                            </h4>
                            <Row className="">
                                {loading ? (
                                    <Loading />
                                ) : (
                                    <DataTable
                                        columns={columns}
                                        data={Data}
                                        highlightOnHover
                                        theme={`${darkMode && "solarized"}`}
                                        pagination
                                        direction="ltr"
                                    />
                                )}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
