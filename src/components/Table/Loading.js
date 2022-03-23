import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loading() {
	return (
		<div className="text-center mt-5 pt-5 w-100">
			<Spinner animation="grow" />
		</div>
	)
}
