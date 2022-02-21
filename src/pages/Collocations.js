import React, { useEffect, useState } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
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
			<Accordion  defaultActiveKey="0" alwaysOpen>
				<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="0">
					<Accordion.Header style={{direction:'initial'}} className={`${darkMode ? "dark" : ''}`}>{t('What is a collocation?')}</Accordion.Header>
					<Accordion.Body>
						{t('A collocation is two or more words that often go together. These combinations just sound "right" to native English speakers, who use them all the time. On the other hand, other combinations may be unnatural and just sound "wrong".')}
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="1">
					<Accordion.Header style={{direction:'initial'}} className={`${darkMode ? "dark" : ''}`}>{t('Why learn collocations?')}</Accordion.Header>
					<Accordion.Body>
						<ListGroup>
							<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>👌 {t('Your language will be more natural and more easily understood.')}</ListGroup.Item>
							<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>👍 {t('You will have alternative and richer ways of expressing yourself.')}</ListGroup.Item>
							<ListGroup.Item className={`${darkMode ? 'text-white' : ''} mb-2`}>🤙 {t('It is easier for our brains to remember and use language in chunks or blocks rather than as single words.')}</ListGroup.Item>
						</ListGroup>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>

			<TableComp filter={filter} setfilter={setfilter} t={t} loading={loading} Data={Data} darkMode={darkMode} DataType={DataType} setDataType={setDataType} />
		</>
	);
};

export default Collocations;

// translation ##################################
