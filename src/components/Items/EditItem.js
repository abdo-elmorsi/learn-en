import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useDialog } from 'react-st-modal'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
const EditDeliverStatus = ({ status, config }) => {
	// Fetch Data
	const [Name, setName] = useState(status.en.Name);
	const [Ex, setEx] = useState(status.en.Ex);
	const [Desc, setDesc] = useState(status.en.Desc);
	const [NameAr, setNameAr] = useState(status.ar.Name);
	const [ExAr, setExAr] = useState(status.ar.Ex);
	const [DescAr, setDescAr] = useState(status.ar.Desc);

	const dialog = useDialog();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		if (
			data?.NameAr &&
			data?.NameEn
		) {
			dialog.close(data)
		}
	};

	return (
		<div className={`${config.darkMode && "dark"}`}>
			<form className="d-flex flex-column justify-content-center p-4" onSubmit={handleSubmit(onSubmit)} >
				<Row>
					<Col md={6}>
						<h2>ar</h2>
						<InputGroup className="mt-2">
							<Form.Control {...register('NameAr', { required: 'Name is required', })}
								name="NameAr"
								value={NameAr}
								placeholder={NameAr}
								onChange={(e) => setNameAr(e.target.value)}
								type="text" aria-label="Name" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.NameAr?.message}
						</Form.Text>


						<InputGroup className="mt-2">
							<Form.Control {...register('ExAr', { required: 'Example is required', })}
								name="ExAr"
								value={ExAr}
								placeholder={ExAr}
								onChange={(e) => setExAr(e.target.value)}
								type="text" aria-label="Ex" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.ExAr?.message}
						</Form.Text>

						<InputGroup className="mt-2">
							<Form.Control {...register('DescAr', { required: 'Description is required', })}
								name="DescAr"
								value={DescAr}
								placeholder={DescAr}
								onChange={(e) => setDescAr(e.target.value)}
								type="text" aria-label="Descreption" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.DescAr?.message}
						</Form.Text>
					</Col>


					<Col md={6}>
						<h2>en</h2>
						<InputGroup className="mt-2">
							<Form.Control {...register('NameEn', { required: 'Name is required', })}
								name="NameEn"
								value={Name}
								placeholder={Name}
								onChange={(e) => setName(e.target.value)}
								type="text" aria-label="Name" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.NameEn?.message}
						</Form.Text>


						<InputGroup className="mt-2">
							<Form.Control {...register('ExEn', { required: 'Example is required', })}
								name="ExEn"
								value={Ex}
								placeholder={Ex}
								onChange={(e) => setEx(e.target.value)}
								type="text" aria-label="Example" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.ExEn?.message}
						</Form.Text>

						<InputGroup className="mt-2">
							<Form.Control {...register('DescEn', { required: 'Description is required', })}
								name="DescEn"
								value={Desc}
								placeholder={Desc}
								onChange={(e) => setDesc(e.target.value)}
								type="text" aria-label="Descreption" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.DescEn?.message}
						</Form.Text>
					</Col>
				</Row>

				<Form.Group className="d-flex justify-content-around w-100 mt-4">
					<Button type="submit" className="px-4 py-2 bg-primary text-white rounded d-block">Update</Button>

					<Button className="px-4 py-2 bg-secondary text-white rounded d-block" onClick={() => dialog.close(false)}>Close</Button>
				</Form.Group>
			</form>
		</div>
	)
}

export default EditDeliverStatus