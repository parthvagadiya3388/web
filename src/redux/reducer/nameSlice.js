import { createSlice } from '@reduxjs/toolkit'

const nameSlice = createSlice({
    name: 'name',
    initialState: {
      firstName: '',
      lastName: '',
    },
    reducers: {
      setFirstName: (state, action) => {
        state.firstName = action.payload;
      },
      setLastName: (state, action) => {
        state.lastName = action.payload;
      },
    },
  });

export const {setFirstName , setLastName } = nameSlice.actions

export default nameSlice.reducer