import  {createSlice} from '@reduxjs/toolkit'

const initialState = false

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        languageToggle:(state)=>{
            return !state
        }
    }
})

export const {languageToggle} = productSlice.actions

export default productSlice.reducer