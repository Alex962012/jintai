import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const data = await axios.get('/product')
//     return data
// })
export const fetchTypes = createAsyncThunk('types/fetchTypes', async () => {
    const data = await axios.get('/type/getAll')
    return data
})
const initialState = {
    types: {
        items: [],
        status: 'loading'
    },


}

const typesSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchTypes.pending]: (state) => {

            state.types.status = 'loading'
        },
        [fetchTypes.fulfilled]: (state, action) => {

            state.types.items = action.payload.data
            state.types.status = 'loaded'
        },
        [fetchTypes.rejected]: (state) => {
            state.types.items = []
            state.types.status = 'error'
        }

    }

})

export const typesReducer = typesSlice.reducer