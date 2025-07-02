import type { RootState } from "@/redux/store";
import type { IUser } from "@/types/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface InitialState {
    user: IUser[]
}

const initialState: InitialState = {
    user: [
        {
            id: "ukCJQ6is_T3eLJx4lNgFi",
            name: "Rana"
        }
    ]
}

type DraftUser = Pick<IUser, "name">
const createUser = (userData: DraftUser): IUser => {
    return {
        id: nanoid(),
        ...userData
    }
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload)
            state.user.push(userData)
        },
        deleteUser:(state, action:PayloadAction<string>)=>{
            state.user = state.user.filter(user => user.id !== action.payload)
        }
    }
})

export const selectAllUser =(state:RootState)=>{
    return state.users.user
}



export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;