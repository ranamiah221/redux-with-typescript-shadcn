import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTaskModal from "@/module/AddTaskModal";
import TaskCard from "@/module/TaskCard";
import { selectAllTask, updateFilter } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


const Task = () => {
    const tasks = useAppSelector(selectAllTask)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2 className="text-2xl font-xl ml-4">Task: </h2>
            <div className="flex justify-end items-center">
                <Tabs defaultValue="All">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter('All'))} value="All">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('Low'))} value="Low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('Medium'))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('High'))} value="High">High</TabsTrigger>
                    </TabsList>
                </Tabs>

                <AddTaskModal></AddTaskModal>
            </div>
            {
                tasks.map((task, idx) => <TaskCard key={idx} task={task}></TaskCard>)
            }

        </div>
    );
};

export default Task;