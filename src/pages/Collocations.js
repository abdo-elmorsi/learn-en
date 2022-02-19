import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Table/Loading"
import { Card, Col, Form, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { useSelector, useDispatch } from "react-redux";
import { itemSlideUp } from "../helpers/Animation";
import { AddCollocations } from "../lib/slices/collocations";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Home = () => {
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
				cell: (row) => <span style={{ color: `${row?.isphrasal && "red"}` }}>{Language === "en" ? row?.en?.Name : row?.ar?.Name}</span>,
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
		if (Collocations.collocations.length === 0) {
			try {
				onSnapshot(query(collection(db, 'Collocations'), orderBy('createdAt', 'asc')),
					(snapshot) => {
						dispatch(AddCollocations([...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))]))
						setloading(false);
					})
			} catch (error) {
				console.log(error);
				setloading(false);
			}
		} else {
			setloading(false);
		}
	}, [dispatch, Collocations.collocations.length]);


	// data provides access to your row data
	const ExpandedComponent = ({ data }) => {
		return (
			<div>
				<pre></pre>
				{Language === "en" ? (
					<>
						Example:<pre
							className="mx-0 mx-lg-5"
							style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#6f42c1"}` }}>
							{JSON.stringify(data?.en?.Ex)}
						</pre>
					</>
				) : (
					<>
						مثال:<pre
							className="mx-0 mx-lg-5"
							style={{ direction: "rtl", whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#198754"}` }}>
							{JSON.stringify(data?.ar?.Ex)}
						</pre>
					</>
				)}
				{Language === "en" ? (
					<>
						Description:<pre
							className="mx-0 mx-lg-5"
							style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#dc3545d6"}` }}>
							{JSON.stringify(data?.en?.Desc)}
						</pre>
					</>
				) : (
					<>
						الوصف:<pre
							className="mx-0 mx-lg-5"
							style={{ direction: "rtl", whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#dc3545d6"}` }}>
							{JSON.stringify(data?.ar?.Desc)}
						</pre>
					</>
				)}
			</div>
		)
	};

	return (
		<Card style={{ minHeight: '400px' }}>
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
	);
};

export default Home;

// translation ##################################
