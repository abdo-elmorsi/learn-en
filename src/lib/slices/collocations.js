import { createSlice } from '@reduxjs/toolkit'

export const CollocationsSlice = createSlice({
	name: 'collocations',
	initialState: {
		collocations: []
	},
	reducers: {
		AddCollocations: (state, action) => {
			state.collocations = [...action.payload]
		},
	}
})


export const { AddCollocations } = CollocationsSlice.actions
export default CollocationsSlice.reducer
