import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Table/Loading"
import { Card, Col, Form, Row } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";
import { useSelector } from "react-redux";
import { itemSlideUp } from "../helpers/Animation";

import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	const [filter, setfilter] = useState('');
	const [CollocationsType, setCollocationsType] = useState('')
	const [Data, setData] = useState([]);
	const [AllData, setAllData] = useState([]);
	const [loading, setloading] = useState(true);
	const { config } = useSelector((state) => state);
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
				selector: (row) => row.id,
				sortable: true,
			},
			{
				name: `${t("name")}`,
				selector: (row) => row.Name,
				sortable: true,
			},
		],
		[t],
	);
	// handle filter
	useEffect(() => {
		const newData = AllData?.filter((item) => {
			return item?.Name?.toString().includes(filter?.toLowerCase()) ||
				false;
		});
		setData(newData);
	}, [AllData, filter]);

	// Fetch Data
	useEffect(() => {
		(async () => {
			try {
				await fetch("assets/collocations.json")
					.then(e => e.json())
					.then(res => {
						setAllData([...res.Works]);
						setTimeout(() => {
							setloading(false);
						}, 1000);
					})
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	// data provides access to your row data
	const ExpandedComponent = ({ data }) => {
		return (
			<div className="">
				<pre></pre>
				Example:<pre
					className="mx-0 mx-lg-5"
					style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#FFEB3B" : "#dc3545d6"}` }}>{`${JSON.stringify(data.Ex)}`}</pre>
				Description:<pre
					className="mx-0 mx-lg-5"
					style={{ whiteSpace: "break-spaces", padding: "0 10px", color: `${config.darkMode ? "#0dcaf0" : "#198754"}` }}>{`${JSON.stringify(data.Desc)}`}</pre>
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
							<Form.Label>Filter</Form.Label>
							<Form.Control
								value={filter}
								type="search"
								id="search"
								name="search"
								onChange={(e) => setfilter(e.target.value)}
								placeholder={`${t("Name")}...`}
							/>
						</Form.Group>
						{/* </div> */}
					</Col>
					<Col sm="12" md="6">
						<Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start mt-3 mt-md-0">
							<Form.Label>Choose Collocations Type</Form.Label>
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
								title="Collocations"
								columns={columns}
								data={Data.filter(ele => ele.Name.toString().startsWith(`${CollocationsType}`))}
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
