import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomDialog } from "react-st-modal";
import EditDeliverStatus from "../../components/EditDeliverStatus";
import { AddCollocations } from "../../lib/slices/collocations";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import DataTable, { createTheme } from "react-data-table-component";
import { motion } from "framer-motion";
import { itemSlideUp } from "../../helpers/Animation";
import Loading from "../../components/Table/Loading";
import DataServices from "../../firebase/services"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// Loadin table and error message
export const Actions = ({ status }) => {
	const { config } = useSelector((state) => state);
	const handleDelete = async () => {
		try {
			await DataServices.deleteItem('Collocations', status.id);
			toast.success("Collocation Deleted");
		} catch (error) {
			console.log(error);
			toast.error("Sorry there is an error");
		}
	}
	const handleEdit = async () => {
		const result = await CustomDialog(<EditDeliverStatus config={config} status={status} />, {
			title: "Update user status",
		});
		if (result) {
			const data = {
				"en": {
					"Name": result.NameEn,
					"Ex": result.ExEn || 'Not available right now.',
					"Desc": result.DescEn || 'Not available right now.',
				},
				"ar": {
					"Name": result.NameAr,
					"Ex": result.ExAr || 'غير متوفر.',
					"Desc": result.DescAr || 'غير متوفر.',
				}
			}
			try {
				await DataServices.updateItem('Collocations', status.id, data)
				toast.success("Collocation updated");
			} catch (error) {
				console.log(error);
				toast.error("Sorry there is an error");
			}
		}
	};

	return (
		<div className="d-flex align-items-center">
			<Button
				onClick={() => handleEdit()}
				className="d-flex align-items-center justify-content-center px-2 py-1"
			>
				<svg
					width={27}
					aria-hidden="true"
					focusable="false"
					data-prefix="fal"
					data-icon="user-edit"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 512"
					className="svg-inline--fa fa-user-edit fa-2x"
				>
					<path
						fill="currentColor"
						d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm406.6 204.1l-34.7-34.7c-6.3-6.3-14.5-9.4-22.8-9.4-8.2 0-16.5 3.1-22.8 9.4L327.8 424l-7.6 68.2c-1.2 10.7 7.2 19.8 17.7 19.8.7 0 1.3 0 2-.1l68.2-7.6 222.5-222.5c12.5-12.7 12.5-33.1 0-45.7zM393.3 473.7l-39.4 4.5 4.4-39.5 156.9-156.9 35 35-156.9 156.9zm179.5-179.5l-35-35L573 224h.1l.2.1 34.7 35-35.2 35.1zM134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 20.7 0 39.9 6.3 56 16.9l22.8-22.8c-22.2-16.2-49.3-26-78.8-26-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h243.5c-2.8-7.4-4.1-15.4-3.2-23.4l1-8.6H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320z"
						className=""
					></path>
				</svg>
			</Button>
			<Button className="py-1 ms-2 text-nowrap" variant="danger" onClick={() => handleDelete()}>
				<svg width={17} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" className=""></path></svg>
			</Button>
		</div>
	);
};

const UpdateCollocations = () => {
	const Language = Cookies.get("i18next") || "en";
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [filter, setfilter] = useState('');
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
				selector: (_, i) => i + 1,
				sortable: true,
				maxWidth: "125px",
				cell: (row) => <span style={{ color: `${row?.isphrasal ? "red" : null}` }}>{row?.id} {row?.isphrasal && "_ isphrasal"}</span>,
			},
			{
				name: `${t("Name")}`,
				selector: (row) => Language === "en" ? row?.en?.Name : row?.ar?.Name,
				cell: (row) => <span style={{ color: `${row?.isphrasal && "red"}` }}>{Language === "en" ? row?.en?.Name : row?.ar?.Name}</span>,
				sortable: true,
			},
			{
				name: "actions",
				cell: (row) => <Actions status={row} />,
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
						console.log('yes');
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
				</Row>
				<Row>
					<Col>
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
									data={Data}
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
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default UpdateCollocations;

// translation ##################################
