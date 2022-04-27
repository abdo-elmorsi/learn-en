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
            const { PastPerfectExs } = await res.json();
            setData(PastPerfectExs);
            setloading(false);
        })();
    }, []);

    return (
        <>
            <Row>
                <Col lg={10} className="me-lg-auto">
                    <Card>
                        <Card.Header className="pt-4 bg-transparent">
                            <h5 className="w-100  mx-auto mb-5">
                                {t(
                                    "We used the past perfect refers to a time earlier than before now. It is used to make it clear that one event happened before another in the past."
                                )}
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            {/* uses */}
                            <section>
                                <p className="ps-0 ps-lg-2 h4">
                                    <ColorSwitcher text={t("Uses")} /> :
                                </p>
                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        {t(
                                            "The past perfect is used to refer to an earlier time than before. It is used to show that an event occurred before another event in the past. Any of the events can be placed, as the sentence's tense denotes the order."
                                        )}
                                    </li>
                                </ol>
                            </section>
                            {/* Table */}
                            <section className="py-4">
                                <h4 className="mb-3 text-center Header_Line">
                                    <ColorSwitcher
                                        text={`${t(
                                            "How do we make the Past Perfect"
                                        )}`}
                                    />
                                    ?
                                </h4>
                                <small className="mb-4 d-block text-center w-75 mx-auto">
                                    {t(
                                        "The structure of the past perfect tense is :"
                                    )}
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
                                            <td>had</td>
                                            <td>&nbsp;</td>
                                            <td>won</td>
                                            <td>a gift</td>
                                        </tr>
                                        <tr>
                                            <td>You</td>
                                            <td>had</td>
                                            <td>&nbsp;</td>
                                            <td>worked</td>
                                            <td>for him</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Negative"
                                                rowSpan="2"
                                                className="text-center"
                                            >
                                                -
                                            </td>
                                            <td>He, She, It</td>
                                            <td>had</td>
                                            <td className="text-danger">not</td>
                                            <td>decided</td>
                                            <td>to leave</td>
                                        </tr>
                                        <tr>
                                            <td>We</td>
                                            <td>had</td>
                                            <td className="text-danger">not</td>
                                            <td>joked</td>
                                            <td>last night.</td>
                                        </tr>
                                        <tr>
                                            <td
                                                title="Interrogative"
                                                rowSpan="3"
                                                className="text-center"
                                            >
                                                ?
                                            </td>
                                            <td>Had</td>
                                            <td>they</td>
                                            <td>&nbsp;</td>
                                            <td>arrived?</td>
                                            <td>there</td>
                                        </tr>
                                        <tr>
                                            <td>Hadn't</td>
                                            <td>you</td>
                                            <td>&nbsp;</td>
                                            <td>finished?</td>
                                            <td>your work</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>
                                    {t(
                                        "From the above table, notice the following points"
                                    )}
                                    :
                                </p>

                                {/* positive */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"A: For positive sentences"}
                                    />
                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t(
                                                "It takes the auxiliary verb (had)."
                                            )}
                                        </li>
                                    </ol>
                                </div>
                                {/* negative */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"B: For negative sentences"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t(
                                                "When adding not with the auxiliary verb had, we shorten it, so it"
                                            )}
                                            <ColorSwitcher text="hadn't" />
                                        </li>
                                    </ol>
                                </div>
                                {/* question */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"C: For question sentences"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t("We put")}
                                            <ColorSwitcher text="had/hadn't" />

                                            {t(
                                                "at the beginning of the sentence and then complete it as is. Below is a table."
                                            )}
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "The answer to this summer's Interrogative question is"
                                            )}
                                            <ColorSwitcher text="Yes/No (Yes, I had or No, I hadn't)." />
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "In a question (w), we put the tool"
                                            )}
                                            <ColorSwitcher text="(wh)" />

                                            {t(
                                                "at the beginning of the question, then had, then the subject, followed by the clarification."
                                            )}
                                            <ColorSwitcher text="(?Wh-question+subject+(had / hadn't)+V.3)" />
                                        </li>
                                    </ol>
                                </div>
                            </section>
                            {/* الكلمات الدلاليه */}
                            <section>
                                <h4 className="mb-3 text-center Header_Line">
                                    <ColorSwitcher text={`${t("Tags")}`} />
                                </h4>

                                {/* (As and when) */}
                                <div>
                                    <ColorSwitcher text={"A: (As and when),"} />
                                    <span>
                                        {t(
                                            "meaning when the simple past tense comes after it:"
                                        )}
                                    </span>

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t(
                                                "As (when) I arrived the station, the train"
                                            )}
                                            <ColorSwitcher text="had already left." />
                                        </li>
                                        <li className="mb-3">
                                            <ColorSwitcher text="The train had" />
                                            {t(
                                                "already left as (when) I arrived the station."
                                            )}
                                        </li>
                                    </ol>
                                </div>
                                {/* Because */}
                                <div>
                                    <ColorSwitcher text={"B: (Because)"} />
                                    <span>
                                        {t("after her comes a perfect past:")}
                                    </span>

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t("The car crashed because")}
                                            <ColorSwitcher text="I had driven" />
                                            {t("so fast.")}
                                        </li>
                                        <li className="mb-3">
                                            <ColorSwitcher text="Because I had not" />
                                            {t(
                                                "studied hard, I failed the test."
                                            )}
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "She went to the hospital because"
                                            )}
                                            <ColorSwitcher text="she had poisoned herself." />
                                        </li>
                                    </ol>
                                </div>
                                {/* Before , After */}
                                <div>
                                    <ColorSwitcher
                                        text={"C: (Before / After)"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t("I had eaten an apple")}
                                            <ColorSwitcher text="before" />
                                            {t("I went to school yesterday.")}
                                        </li>
                                        <li className="mb-3">
                                            {t("I went to school")}
                                            <ColorSwitcher text="after" />
                                            {t("I had eaten an apple")}.
                                        </li>
                                        <li className="mb-3 text-center list-unstyled">
                                            <ColorSwitcher text="After (past perfect), (past simple). OR (past simple) After (past perfect)." />
                                            <br />
                                            <ColorSwitcher text="Before (past simple), (past perfect). OR (past perfect) before (past simple). " />
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* table */}
                            <h4 className="mb-3 text-center Header_Line">
                                {t("Examples")}
                            </h4>
                            <Row className="py-4">
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
