import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";


interface InitialState {
    tasks: ITask[],
    filter: "All" | "Low" | "Medium" | "High"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "n4TzEFsPcCx2_T_IcnrV0",
            isCompleted: true,
            title: "come on babu",
            description: " iuhuigtzsezrdxjckjk;lkjhjdszdxfghj",
            priority: "High",
            dueDate: "2025-07-09T18:00:00.000Z",
            assignedTo:null
        },
        {
            id: "n4TzEFsPcCx2_T_IcnrV01",
            isCompleted: false,
            title: "Rana chole ja",
            description: " iuhuigtzsezrdxjckjk;lkjhjdszdxfghj",
            priority: "Low",
            dueDate: "2025-07-09T18:00:00.000Z",
            assignedTo:null
        },

    ],
    filter: "All"
}

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate"|"assignedTo">

const createTask = (taskData: DraftTask): ITask => {
    return {
          ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                task.id === action.payload ?
                    (task.isCompleted = !task.isCompleted) : task
            )
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"All" | "Low" | "Medium" | "High">) => {
            state.filter = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteUser, (state, action)=>{
            state.tasks.forEach((task)=> task.assignedTo === action.payload ? (task.assignedTo=null): task)
        })
    }
})

export const selectAllTask = (state: RootState) => {
    if (state.todo.filter == 'Low') {
        return state.todo.tasks.filter(task => task.priority == 'Low')
    } else if (state.todo.filter == 'Medium') {
        return state.todo.tasks.filter(task => task.priority == 'Medium')
    }
    else if (state.todo.filter == 'High') {
        return state.todo.tasks.filter(task => task.priority == 'High')
    } else {
        return state.todo.tasks
    }

}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;