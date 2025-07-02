import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/tasks/tasksSlice";
import { selectAllUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types/types";
import { MdDelete } from "react-icons/md";


interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
const users = useAppSelector(selectAllUser)
    const assignedUser = users.find(user => user.id === task.assignedTo)

    const dispatch = useAppDispatch()
    return (
        <>
             <div className="flex justify-between items-start border-2 rounded-lg m-4 p-4">
            <div>
                <h1 className={cn("text-2xl font-xl", {
                    "text-green-500": task.priority == 'High',
                    "text-purple-700": task.priority == 'Medium',
                    "text-red-500": task.priority == 'Low'
                }, {"line-through": task.isCompleted}
                )}>{task.title}</h1>
                <h3>Assigned To : {assignedUser ? assignedUser.name : "No one"} </h3>
                <p>{task.description}</p>
            </div>
            <div className="flex justify-between items-center gap-4">
                <input checked={task.isCompleted} onClick={()=>{dispatch(toggleCompleteState(task.id))}} type="checkbox" />
                <MdDelete onClick={()=>{dispatch(deleteTask(task.id))}} />
            </div>
        </div>
        </>
       
    );
};

export default TaskCard;