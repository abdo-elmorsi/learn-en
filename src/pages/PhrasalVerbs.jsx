import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddPhrasalVerb } from "../lib/slices/phrasalVerb";
import { useTranslation } from "react-i18next";
import TableComp from '../components/Table/Index'

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Accordion } from "react-bootstrap";

const PhrasalVerb = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [filter, setfilter] = useState('');
	const [DataType, setDataType] = useState('')
	const [Data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const { config: { darkMode }, PhrasalVerb } = useSelector((state) => state);

	// handle filter
	useEffect(() => {
		const newData = PhrasalVerb?.phrasalVerb.filter((item) => {
			return item?.en?.Name?.toString().includes(filter?.toLowerCase()) ||
				false;
		});
		setData(newData);
	}, [PhrasalVerb, filter]);

	// Fetch Data
	useEffect(() => {
		try {
			onSnapshot(query(collection(db, 'PhrasalVerb'), orderBy('createdAt', 'asc')),
				(snapshot) => {
					dispatch(AddPhrasalVerb([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))]))
					setloading(false);
				})
		} catch (error) {
			setloading(false);
		}
	}, [dispatch]);

	return (
		<>
			<Accordion defaultActiveKey="0" alwaysOpen>
				<Accordion.Item className={`${darkMode ? "bg-dark" : ''}`} eventKey="0">
					<Accordion.Header style={{ direction: 'initial' }} className={`${darkMode ? "dark" : ''}`}>{t('What is Phrasal verbs?')}</Accordion.Header>
					<Accordion.Body>
						{t('Phrasal verbs are very common in English, especially in more informal contexts. They are made up of a verb and a particle or, sometimes, two particles. The particle often changes the meaning of the verb.')}
					</Accordion.Body>
				</Accordion.Item>

			</Accordion>

			<TableComp filter={filter} setfilter={setfilter} t={t} loading={loading} Data={Data} darkMode={darkMode} DataType={DataType} setDataType={setDataType} />
		</>
	);
};

export default PhrasalVerb;

// translation ##################################
