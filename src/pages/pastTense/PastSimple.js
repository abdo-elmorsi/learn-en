import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Row, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Loading from "../../components/Table/Loading";
import ColorSwithcer from "../../components/ColorSwithcer";

export default function PastSimple() {
    const { t } = useTranslation();
    const columns = [
        {
            name: `${t("Affirmative (+)")}`,
            selector: (row) => row.Affirmative,
            sortable: true,
        },
        {
            name: `${t("Negative (-)")}`,
            selector: (row) => row.Negative,
            sortable: true,
        },
        {
            name: `${t("Interrogative (?)")}`,
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
            const res = await fetch("assets/dumyData.json");
            const { PastSimpleExs } = await res.json();
            setData(PastSimpleExs);
            setloading(false);
        })();
    }, []);

    return (
        <>
            <Card>
                <Card.Header className="pt-4 bg-transparent">
                    <h5 className="w-100  mx-auto mb-5">
                        {t(
                            "The English language is used to talk about events that occurred in the past at a specific time. In this lesson, we will learn how to form the past simple in the affirmative, negative and question cases."
                        )}
                    </h5>
                    {/* <p>A: How do we use the Past Simple tense?</p> */}
                    <p className="ps-0 ps-lg-3">
                        We use the Past Simple tense to talk about an action or
                        a situation - an event - in the past. The event can be
                        short or long.
                    </p>
                    <ol className="ps-5 d-flex justify-content-flex-start justify-content-lg-around align-items-center flex-wrap">
                        <li className="border-bottom mb-3">
                            the event is <ColorSwithcer text="in the past" />
                        </li>
                        <li className="border-bottom mb-3">
                            the event is
                            <ColorSwithcer text="completely finished" />
                        </li>
                        <li className="border-bottom mb-3">
                            we say (or understand) the
                            <ColorSwithcer text="time" />
                            and/or
                            <ColorSwithcer text="place" />
                            of the event
                        </li>
                    </ol>
                </Card.Header>
                <Card.Body>
                    <p className="lead border-top border-2 pt-5">
                        1- How do we make the Past Simple tense?
                    </p>
                    <small>
                        Look at these examples with the main verbs
                        <ColorSwithcer text={"go"} />
                        (irregular) and
                        <ColorSwithcer text={"work"} />
                        (regular):
                    </small>
                    <Table className="mb-5" responsive striped bordered>
                        <thead>
                            <tr>
                                <th></th>
                                <th>sub</th>
                                <th>helping (v)</th>
                                <th>&nbsp;</th>
                                <th>main (v)</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    title="Affirmative"
                                    rowspan="2"
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
                                    rowspan="2"
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
                                    rowspan="2"
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
                        </tbody>
                    </Table>
                    <p>From the above table, notice the following points:</p>

                    <ColorSwithcer
                        className={"ps-0 ps-lg-4"}
                        text={"A: For positive sentences:"}
                    />

                    <ol className="ps-5 d-flex justify-content-flex-start justify-content-lg-around align-items-center flex-wrap">
                        <li className="border-bottom mb-3">
                            There is <strong>no auxiliary verb</strong>.
                        </li>
                        <li className="border-bottom mb-3">
                            The main verb is conjugated in the Past Simple,
                            invariable: -ed (or irregular).
                        </li>
                    </ol>
                    <ColorSwithcer
                        className={"ps-0 ps-lg-4"}
                        text={"B: For negative and question sentences:"}
                    />

                    <ol className="ps-5 d-flex justify-content-flex-start justify-content-lg-around align-items-center flex-wrap">
                        <li className="border-bottom mb-3">
                            The auxiliary is conjugated in the Past Simple,
                            invariable: did.
                        </li>
                        <li className="border-bottom mb-3">
                            For question sentences, we exchange the subject and
                            the auxiliary verb.
                        </li>
                        <li className="border-bottom mb-3">
                            The main verb is invariable in base form: base.
                        </li>
                        <li className="border-bottom mb-3">
                            For negative sentences, we insert not between the
                            auxiliary verb and main verb.
                        </li>
                    </ol>
                    {/* second table */}
                    <p className="lead mt-5 pt-5 border-top border-2">
                        2- The structure of the Past Simple with the main{" "}
                        <ColorSwithcer
                            className={"font-weight-bold"}
                            text="verb be"
                        />
                        is:
                    </p>
                    <Table responsive striped bordered>
                        <thead>
                            <tr>
                                <th></th>
                                <th>sub</th>
                                <th>
                                    main (v) <em>be</em>
                                </th>
                                <th></th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    title="Affirmative"
                                    rowspan="2"
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
                                    rowspan="2"
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
                                    rowspan="2"
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
                    <p className="ps-3">
                        From the above table, notice the following points:
                    </p>
                    <ol className="ps-5 d-flex justify-content-around align-items-center flex-wrap">
                        <li className="border-bottom mb-3">
                            There is no auxiliary verb, even for questions and
                            negatives.
                        </li>
                        <li className="border-bottom mb-3">
                            The main verb (be) is conjugated in the Past Simple:
                            <ColorSwithcer text="was, were" />
                        </li>
                        <li className="border-bottom mb-3">
                            For negative sentences, we insert not after the main
                            verb.
                        </li>
                        <li className="border-bottom mb-3">
                            For question sentences, we exchange the subject and
                            the main verb.
                        </li>
                    </ol>
                    {/* table */}
                    <Row className="mt-5">
                        {/* <h3>Examples:</h3> */}
                        {loading ? (
                            <Loading />
                        ) : (
                            <DataTable
                                title={"Examples:"}
                                columns={columns}
                                data={Data}
                                highlightOnHover
                                theme={`${darkMode && "solarized"}`}
                                pagination
                            />
                        )}
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}
