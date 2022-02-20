import { createSlice } from '@reduxjs/toolkit'

export const phrasalVerbSlice = createSlice({
	name: 'phrasalVerb',
	initialState: {
		phrasalVerb: []
	},
	reducers: {
		AddPhrasalVerb: (state, action) => {
			state.phrasalVerb = [...action.payload]
		},
	}
})


export const { AddPhrasalVerb } = phrasalVerbSlice.actions
export default phrasalVerbSlice.reducer
