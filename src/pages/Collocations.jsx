import React, { useEffect, useState } from "react";
import { Accordion, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AddCollocations } from "../lib/slices/collocations";
import { useTranslation } from "react-i18next";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

import TableComp from '../components/Table/Index'
const Collocations = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [filter, setfilter] = useState('');
	const [DataType, setDataType] = useState('')
	const [Data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const { config: { darkMode }, Collocations } = useSelector((state) => state);

	// handle filter
	useEffect(() => {
		const newData = Collocations?.collocations.filter((item) => {
			return item?.en?.Name?.toString().includes(filter?.toLowerCase()) ||
				false;
		});
		setData(newData);
	}, [Collocations, filter]);

	// Fetch Data
	useEffect(() => {
		try {
			onSnapshot(query(collection(db, 'Collocations'), orderBy('createdAt', 'asc')),
				(snapshot) => {
					dispatch(AddCollocations([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))]))
					setloading(false);
				})
		} catch (error) {
			setloading(false);
		}
	}, [dispatch]);

	return (
		<>
			<Accordion defaultActiveKey="0" alwaysOpen>
				<Row>
					<Col sm={12} lg={6}>
						<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="0">
							<Accordion.Header style={{ direction: 'initial' }} className={`${darkMode ? "dark" : ''}`}>{t('What is a collocation?')}</Accordion.Header>
							<Accordion.Body>
								{t('A collocation is two or more words that often go together. These combinations just sound "right" to native English speakers, who use them all the time. On the other hand, other combinations may be unnatural and just sound "wrong".')}
							</Accordion.Body>
						</Accordion.Item>
					</Col>
					<Col sm={12} lg={6}>
						<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="1">
							<Accordion.Header style={{ direction: 'initial' }} className={`${darkMode ? "dark" : ''}`}>{t('Why learn collocations?')}</Accordion.Header>
							<Accordion.Body>
								<ListGroup>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>👌 {t('Your language will be more natural and more easily understood.')}</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>👍 {t('You will have alternative and richer ways of expressing yourself.')}</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>🤙 {t('It is easier for our brains to remember and use language in chunks or blocks rather than as single words.')}</ListGroup.Item>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>

					</Col>
					<Col sm={12} lg={6}>
						<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="2">
							<Accordion.Header style={{ direction: 'initial' }} className={`${darkMode ? "dark" : ''}`}>{t('Types of collocation?')}</Accordion.Header>
							<Accordion.Body>
								<p className="lead px-2">{t("There are several different types of collocation made from combinations of verb, noun, adjective etc. Some of the most common types are")}:</p>
								<ListGroup>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>adverb + adjective</strong>: completely satisfied (NOT <del>downright</del> satisfied)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>adjective + noun</strong>: excruciating pain (NOT excruciating joy)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>noun + noun</strong>: a surge of anger (NOT a rush of anger)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>noun + verb</strong>: lions roar (NOT lions <del>shout</del>)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>verb + noun</strong>: commit suicide (NOT <del>undertake</del> suicide)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>verb + expression with preposition</strong>: burst into tears (NOT <del>blow up in</del> tears)
									</ListGroup.Item>
									<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>
										<strong>verb + adverb</strong>: wave frantically (NOT wave <del>feverishly</del>)
									</ListGroup.Item>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>
					</Col>
				</Row>


			</Accordion>
			<TableComp filter={filter} setfilter={setfilter} t={t} loading={loading} Data={Data} darkMode={darkMode} DataType={DataType} setDataType={setDataType} />
		</>
	);
};

export default Collocations;

// translation ##################################
