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
				selector: (row) => row.ID,
				sortable: true,
			},
			{
				name: `${t("Name")}`,
				selector: (row) => row.AbnoSens || "text",
				sortable: true,
			},
			{
				name: 'name by arapy',
				selector: (row) => "name by araby",
				sortable: true,
			},
		],
		[t],
	);
	// handle filter
	useEffect(() => {
		const newData = AllData?.filter((item) => {
			return item?.ID.toString().includes(filter?.toLowerCase()) ||
				false;
		});
		setData(newData);
	}, [AllData, filter]);

	useEffect(() => {
		(async () => {
			try {
				await fetch("https://coldchain-api.herokuapp.com/api/warehouse/senswind")
					.then(e => e.json())
					.then(res => {
						console.log(res)
						setAllData([...res])
						setloading(false)
					})
			} catch (error) {
				console.log(error)
			}
		})();
	}, []);
	return (
		<Card>
			<Card.Body>
				<Row>
					<Col lg="12">
						<div className="d-flex justify-content-between mt-3">
							<Form.Group className="form-group col-6 col-lg-4">
								<Form.Control
									value={filter}
									type="search"
									id="search"
									name="search"
									onChange={(e) => setfilter(e.target.value)}
									placeholder={`${t("Search")}...`}
								/>
							</Form.Group>
						</div>
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
								data={Data}
								highlightOnHover
								theme={`${config.darkMode && "solarized"}`}
								pagination
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
