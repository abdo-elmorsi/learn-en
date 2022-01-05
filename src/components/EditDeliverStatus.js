import { useForm } from 'react-hook-form'
import { useDialog } from 'react-st-modal'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
const EditDeliverStatus = ({ status }) => {
	const dialog = useDialog()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		if (
			data?.NameAr &&
			data?.ExAr &&
			data?.DescAr &&
			data?.NameEn &&
			data?.ExEn &&
			data?.DescEn
		) {
			dialog.close(data)
		}
	}

	return (
		<div>
			<form className="d-flex flex-column justify-content-center p-4" onSubmit={handleSubmit(onSubmit)} >
				{/* <Form.Group className="mb-5" >
					<Form.Label>Status</Form.Label>
					<Form.Select placeholder="chose" controlid="formGridState" {...register('status', {
						required: 'status is required',
					})}>
						<option>verified</option>
						<option>pending</option>
						<option>hold</option>
					</Form.Select>
					<Form.Text className="err-msg text-danger">
						{errors?.status?.message}
					</Form.Text>
				</Form.Group > */}
				<Row>
					<Col md={6}>
						<h2>ar</h2>
						<InputGroup className="mt-2">
							<Form.Control {...register('NameAr', { required: 'Name is required', })}
								name="NameAr"
								placeholder={status.ar.Name}
								type="text" aria-label="Name" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.NameAr?.message}
						</Form.Text>


						<InputGroup className="mt-2">
							<Form.Control {...register('ExAr', { required: 'Example is required', })}
								name="ExAr"
								placeholder={status.ar.Ex}
								type="text" aria-label="Ex" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.ExAr?.message}
						</Form.Text>

						<InputGroup className="mt-2">
							<Form.Control {...register('DescAr', { required: 'Description is required', })}
								name="DescAr"
								placeholder={status.ar.Desc}
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
								placeholder={status.en.Name}
								type="text" aria-label="Name" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.NameEn?.message}
						</Form.Text>


						<InputGroup className="mt-2">
							<Form.Control {...register('ExEn', { required: 'Example is required', })}
								name="ExEn"
								placeholder={status.en.Ex}
								type="text" aria-label="Ex" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.ExEn?.message}
						</Form.Text>

						<InputGroup className="mt-2">
							<Form.Control {...register('DescEn', { required: 'Description is required', })}
								name="DescEn"
								placeholder={status.en.Desc}
								type="text" aria-label="Descreption" aria-describedby="basic-addon1" />
						</InputGroup>
						<Form.Text className="err-msg text-danger">
							{errors?.DescEn?.message}
						</Form.Text>
					</Col>
				</Row>

				<Form.Group className="d-flex justify-content-around w-100 mt-4">
					<Button type="submit" className="px-4 py-2 bg-primary text-white rounded d-block">update</Button>
					<Button className="px-4 py-2 bg-secondary text-white rounded d-block" onClick={() => dialog.close(false)}>Close</Button>
				</Form.Group>
			</form>
		</div>
	)
}

export default EditDeliverStatus