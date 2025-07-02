export interface ITask {
    id: string
    title: string
    description: string
    dueDate: string
    isCompleted: boolean
    priority: "High" | "Low"|"Medium" 
}

export interface IUser{
    id:string
    name:string
}