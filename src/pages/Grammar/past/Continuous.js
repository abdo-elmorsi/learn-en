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
            const { PastContinuousExs } = await res.json();
            setData(PastContinuousExs);
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
                                    "We use the Past Continuous Tense to talk about actions and events that lasted for a specific period of time."
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
                                            "Is often used to describe background events in stories written"
                                        )}
                                        <ColorSwitcher text="in the past" />
                                        <small className="d-block">
                                            Ex: The sun was shining and the
                                            birds were singing as the elephant
                                            came out of the jungle.
                                        </small>
                                    </li>
                                    <li className="mb-3">
                                        {t(
                                            "To describe an incomplete event that is interrupted by another event or action"
                                        )}
                                        <ColorSwitcher text="another event or action" />
                                        <small className="d-block">
                                            Ex: I was having a beautiful dream
                                            when the alarm clock rang.
                                        </small>
                                    </li>
                                    <li className="mb-3">
                                        {t("To express a")}
                                        <ColorSwitcher text="change" />
                                        {t("of opinion")}
                                        <small className="d-block">
                                            Ex: I was going to spend the day at
                                            the beach but I've decided to get my
                                            homework done instead.
                                        </small>
                                    </li>
                                </ol>
                            </section>
                            {/* Table */}
                            <section className="py-4">
                                <h4 className="mb-3 text-center Header_Line">
                                    <ColorSwitcher
                                        text={`${t(
                                            "How do we make the Past Continuous"
                                        )}`}
                                    />
                                    ?
                                </h4>
                                <small className="mb-4 d-block text-center w-75 mx-auto">
                                    {t(
                                        "The structure of the past continuous tense is :"
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
                                            <td>was</td>
                                            <td>&nbsp;</td>
                                            <td>watching</td>
                                            <td>TV.</td>
                                        </tr>
                                        <tr>
                                            <td>You</td>
                                            <td>were</td>
                                            <td>&nbsp;</td>
                                            <td>working</td>
                                            <td>hard.</td>
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
                                            <td>was</td>
                                            <td className="text-danger">not</td>
                                            <td>helping</td>
                                            <td>Mary.</td>
                                        </tr>
                                        <tr>
                                            <td>We</td>
                                            <td>were</td>
                                            <td className="text-danger">not</td>
                                            <td>joking</td>
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
                                            <td>Were</td>
                                            <td>you</td>
                                            <td>&nbsp;</td>
                                            <td>being</td>
                                            <td>silly?</td>
                                        </tr>
                                        <tr>
                                            <td>Were</td>
                                            <td>they</td>
                                            <td>&nbsp;</td>
                                            <td>playing</td>
                                            <td>football?</td>
                                        </tr>
                                        <tr>
                                            <td className="text-danger">
                                                Where
                                            </td>

                                            <td className="text-danger">
                                                Were you
                                            </td>
                                            <td></td>
                                            <td>going</td>
                                            <td>yesterday evening?</td>
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
                                                "It takes the auxiliary verb (was), which is the singular pronouns"
                                            )}
                                            <ColorSwitcher text="(he, she, it)" />
                                            {t(
                                                "and the singular noun, and attaches to them the singular first person pronoun (I), then we put the verb + vreb, then the object, then the adverb."
                                            )}
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "It takes the auxiliary verb (were), which are the plural pronouns"
                                            )}
                                            <ColorSwitcher text="(we, they, you)" />
                                            {t(
                                                "and the nouns that indicate the plural, then we put the verb ing + vreb, then the object, then the adverb."
                                            )}
                                        </li>
                                    </ol>
                                </div>
                                {/* negative */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"B: For negative:"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t(
                                                "When adding not with the auxiliary verb was/were, we shorten it, so it"
                                            )}
                                            <ColorSwitcher text="wasn't/weren't" />

                                            {t("an example.")}
                                        </li>
                                    </ol>
                                </div>
                                {/* question */}
                                <div>
                                    <ColorSwitcher
                                        className={"ps-0 ps-lg-2 h6"}
                                        text={"C: For question:"}
                                    />

                                    <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                        <li className="mb-3">
                                            {t("We put")}
                                            <ColorSwitcher text="Was/Were" />

                                            {t(
                                                "at the beginning of the sentence and then complete it as is. Below is a table."
                                            )}
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "The answer to this summer's Interrogative question is"
                                            )}
                                            <ColorSwitcher text="Yes/No (Yes, I was or No, I wasn’t)." />
                                        </li>
                                        <li className="mb-3">
                                            {t(
                                                "In a question (w), we put the tool"
                                            )}
                                            <ColorSwitcher text="(wh)" />

                                            {t(
                                                "at the beginning of the question, then were or was, then the subject, followed by the clarification."
                                            )}
                                            <ColorSwitcher text="(?Wh-question+(were or was)+subject+verb-ing)" />
                                        </li>
                                    </ol>
                                </div>
                            </section>

                            {/* while and when */}
                            <section className="py-4">
                                <h4 className="mb-3 text-center Header_Line ">
                                    <ColorSwitcher text={t("While and when")} />
                                </h4>
                                <small className="mb-4 d-block text-center w-75 mx-auto">
                                    {t(`We use (while and when) to connect the past
                                    continuous with the past simple, because
                                    most of the past continuous is used as a
                                    background, i.e. as a background and
                                    describe reality during the occurrence of
                                    the simple past.`)}
                                </small>
                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        {t("when it is in the past")}
                                        <ColorSwitcher text="simple sentence" />
                                    </li>
                                    <li className="mb-3">
                                        {t(
                                            "while comes at the beginning of the past"
                                        )}
                                        <ColorSwitcher text="continuous sentence" />
                                    </li>
                                    <li className="mb-3">
                                        {t(
                                            "If while or when comes at the beginning of the sentence, we put a comma (comma), but if you write in the middle, we do not put comma, i.e. the comma"
                                        )}
                                    </li>
                                </ol>
                            </section>

                            {/* Add (ing) to the verb */}
                            <section className="py-4">
                                <h4 className="mb-3 text-center Header_Line ">
                                    <ColorSwitcher
                                        text={t("Add (ing) to the verb")}
                                    />
                                </h4>
                                <small className="mb-4 d-block text-center w-75 mx-auto">
                                    {t(
                                        `Most verbs accept the addition of (ing) without directly without modification, but there are verbs that deviate from this rule. We will mention two main cases:`
                                    )}
                                </small>
                                <Row>
                                    <Col
                                        xs={12}
                                        lg={6}
                                        className="mb-4 mb-lg-0"
                                    >
                                        1- {t("If the infinitive verb ends in")}
                                        <ColorSwitcher text="(e)" />
                                        {t(
                                            "then we delete the letter e and put directly (ing)."
                                        )}
                                        <Row>
                                            {[
                                                "change",
                                                "changing",
                                                "Live",
                                                "living",
                                                "write",
                                                "writing",
                                            ].map((ele, i) => {
                                                return (
                                                    <Col
                                                        key={i}
                                                        xs={6}
                                                        className="text-center"
                                                    >
                                                        <ColorSwitcher
                                                            text={`${ele}`}
                                                        />{" "}
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Col>
                                    <Col xs={12} lg={6} className="">
                                        2-{" "}
                                        {t(
                                            "If the verb ends with a consonant and is preceded by a vowel (vowels), which is "
                                        )}
                                        <ColorSwitcher text="(a, e, i, u, o)" />
                                        {t(
                                            " , we double the last letter and then put (ing)."
                                        )}
                                        <Row>
                                            {[
                                                "stop",
                                                "stopping",
                                                "drop",
                                                "dropping",
                                                "travel",
                                                "travelling",
                                            ].map((ele, i) => {
                                                return (
                                                    <Col
                                                        key={i}
                                                        xs={6}
                                                        className="text-center"
                                                    >
                                                        <ColorSwitcher
                                                            text={`${ele}`}
                                                        />{" "}
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Col>
                                </Row>
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
