import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Table/Loading"
import { Accordion, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { itemSlideUp } from "../helpers/Animation";
import { AddCollocations } from "../lib/slices/collocations";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import ExpandedComp from '../components/ExpandedComponent'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Collocations = () => {
	const Language = Cookies.get("i18next") || "en";
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [filter, setfilter] = useState('');
	const [CollocationsType, setCollocationsType] = useState('')
	const [Data, setData] = useState([]);
	const [loading, setloading] = useState(true);
	const { config, Collocations } = useSelector((state) => state);
	createTheme(
		"solarized",
		{
			text: {
				primary: "#268bd2",
				secondary: "#268bd2",
			},
			background: {
				default: "#222738",
			},
		},
		"dark"
	);
	const columns = useMemo(
		() => [
			{
				name: 'id',
				selector: (row, i) => i + 1,
				// sortable: true,
			},
			{
				name: `${t("Name")}`,
				selector: (row) => Language === "en" ? row?.en?.Name : row?.ar?.Name,
				sortable: true,
			}
		],
		[t, Language],
	);
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


	// data provides access to your row data
	const ExpandedComponent = ({ data }) => <ExpandedComp data={data} Language={Language} config={config} />;

	return (
		<>
			<Accordion defaultActiveKey="0" alwaysOpen>
				<Accordion.Item className={`${config.darkMode ? "bg-dark" : ''}`} eventKey="0">
					<Accordion.Header className={`${config.darkMode ? "dark" : ''}`}>What is a collocation?</Accordion.Header>
					<Accordion.Body>
						A collocation is two or more words that often go together. These combinations just sound "right" to native English speakers, who use them all the time. On the other hand, other combinations may be unnatural and just sound "wrong".
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item className={`${config.darkMode ? "bg-dark" : ''}`} eventKey="1">
					<Accordion.Header className={`${config.darkMode ? "dark" : ''}`}>Why learn collocations?</Accordion.Header>
					<Accordion.Body>
						<ListGroup>
							<ListGroup.Item className={`${config.darkMode ? 'text-white' : ''} mb-2`}>👌 Your language will be more natural and more easily understood.</ListGroup.Item>
							<ListGroup.Item className={`${config.darkMode ? 'text-white' : ''} mb-2`}>👍 You will have alternative and richer ways of expressing yourself.</ListGroup.Item>
							<ListGroup.Item className={`${config.darkMode ? 'text-white' : ''} mb-2`}>🤙 It is easier for our brains to remember and use language in chunks or blocks rather than as single words.</ListGroup.Item>
						</ListGroup>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			<Card className="mt-4" style={{ minHeight: '400px' }}>
				<Card.Body>
					<Row>
						<Col sm="12" md="6">
							{/* <div className="d-flex justify-content-between mt-3"> */}
							<Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start">
								<Form.Label>{t("Search")}</Form.Label>
								<Form.Control
									value={filter}
									type="search"
									id="search"
									onChange={(e) => setfilter(e.target.value)}
									placeholder={`${t("Name")}...`}
								/>
							</Form.Group>
							{/* </div> */}
						</Col>
						<Col sm="12" md="6">
							<Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start mt-3 mt-md-0">
								<Form.Label>{t("Choose Collocations Type")}</Form.Label>
								<Form.Select style={{ cursor: "pointer" }} aria-label="Floating label select example" onChange={(e) => setCollocationsType(e.target.value)}>
									<option value="">All Types</option>
									<option>do</option>
									<option>go</option>
									<option>make</option>
									<option>take</option>
									<option>pay</option>
									<option>have</option>
									<option>get</option>
									<option>come</option>
									<option>break</option>
									<option>calm</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<motion.div
							variants={itemSlideUp}
							initial="hidden"
							animate="visible"
							className="col"
						>
							{!loading ? (
								<DataTable
									title={t("Collocations")}
									columns={columns}
									data={Data.filter(ele => ele?.en?.Name.toString().startsWith(`${CollocationsType}`))}
									highlightOnHover
									theme={`${config.darkMode && "solarized"}`}
									pagination
									expandableRows
									expandableRowsComponent={ExpandedComponent}
								/>
							) :
								<Loading />
							}
						</motion.div>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};

export default Collocations;

// translation ##################################
