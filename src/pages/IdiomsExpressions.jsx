import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const dumyData = [
    {
        first: "Break the news",
        second: "to make something known",
    },
    {
        first: "Cost an arm and a leg",
        second: "to be very expensive",
    },
    {
        first: "Top dollar",
        second: "a lot of money",
    },
    {
        first: "Give me the creeps",
        second: "to creat a feeling of disgust or horror",
    },
    {
        first: "About to go belly - up",
        second: "to go bankrupt",
    },
    {
        first: "About to",
        second: "ready to",
    },
    {
        first: "Save the day",
        second: "to prevent a disaster",
    },
    {
        first: "Let’s face it",
        second: "accept a difficult reality",
    },
    {
        first: "Real floap",
        second: "a faliure",
    },
    {
        first: "Go to the drawing board",
        second: "to start again from the beginning",
    },
    {
        first: "Giving me the ax",
        second: "to fire somebody",
    },
    {
        first: "Sharp as a tack",
        second: "very intelligent",
    },
    {
        first: "Talk this over",
        second: "to discuss",
    },
    {
        first: "After all",
        second: "desbite everything - the fact is",
    },
    {
        first: "No point in",
        second: "no reason to",
    },
    {
        first: "Made up my mind",
        second: "to decide",
    },
    {
        first: "At least",
        second: "Anyway",
    },
    {
        first: "Put up with",
        second: "to endure without a complaint",
    },
    {
        first: "Dead- end job",
        second: "a job that won’t lead to anything else",
    },
    {
        first: "Lose my temper",
        second: "to become very angry",
    },
    {
        first: "What’s the matter",
        second: "what’s the problem",
    },
    {
        first: "Got canned",
        second: "to get fired",
    },
    {
        first: "Right –hand man",
        second: "the most helpful assistant or employee.",
    },
    {
        first: "Stabbed someone in the back",
        second: "to betray someone = to not be loyal",
    },
    {
        first: "Keep your chin up",
        second: "to stay positive",
    },
    {
        first: "Change someone’s mind",
        second: "to change one’s opinion or mind",
    },
    {
        first: "Told someone off",
        second: "to scold",
    },
    {
        first: "Look on the bright side",
        second: "to be optimistic",
    },
    {
        first: "Thank goodness",
        second: "I’m grateful",
    },
    {
        first: "Hang in there",
        second: "to not give up",
    },
    {
        first: "Out of work",
        second: "unemployed = not working",
    },
    {
        first: "Live from hand to mouth",
        second: "to barely have enough money to survive",
    },
    {
        first: "Barely",
        second: "by the smallest amount",
    },
    {
        first: "Stressed out",
        second: "under severe strain = very anxious ( worried)",
    },
    {
        first: "Make ends meet",
        second: "to be okay financially",
    },
    {
        first: "Last resort",
        second: "last solutions",
    },
    {
        first: "Worse comes to worst",
        second: "in the worst case",
    },
    {
        first: "Think big",
        second: "to set high goals",
    },
    {
        first: "Easier said than done",
        second: "more difficult than you think",
    },
    {
        first: "Blow it",
        second: "to spoil something",
    },
    {
        first: "Cut class",
        second: "to miss class without an excuse",
    },
    {
        first: "Stop slacking off",
        second: "stop wasting your time",
    },
    {
        first: "Hit the books",
        second: "to start studying",
    },
    {
        first: "Can’t stand",
        second: "to hate",
    },
    {
        first: "Lost cause",
        second: "something hopeless",
    },
    {
        first: "Over my head",
        second: "beyond one’s understanding",
    },
    {
        first: "Buckle down",
        second: "to start working seriously",
    },
    {
        first: "Give a hoot",
        second: "to not care about",
    },
    {
        first: "Beside the point",
        second: "not relevant – not important",
    },
    {
        first: "Heart set on",
        second: "to really want something",
    },
    {
        first: "Stand a chance",
        second: "to have the possibility of success",
    },
];
export default function IdiomsExpressions() {
    const { darkMode } = useSelector((state) => state.config);
    return (
        <div>
            <ListGroup>
                <Row>
                    {dumyData?.map((ele, i) => {
                        return (
                            <Col sm={12} lg={6} key={i}>
                                <ListGroup.Item
                                    className={`${
                                        darkMode ? "text-white" : ""
                                    } my-2`}
                                >
                                    <u>
                                        {`${i + 1}:  `}
                                        {ele?.first}
                                    </u>
                                    {" => "}
                                    {ele?.second}
                                </ListGroup.Item>
                            </Col>
                        );
                    })}
                </Row>
            </ListGroup>
        </div>
    );
}
