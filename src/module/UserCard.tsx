import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types/types";
import { MdDelete } from "react-icons/md";

interface IProps{
    user: IUser
}

const UserCard = ({user}:IProps) => {
    const dispatch = useAppDispatch()
    return (
        <div className="border-2 rounded-lg h-20 pl-5 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <MdDelete onClick={()=>{dispatch(deleteUser(user.id))}} className="text-red-500 mr-5"></MdDelete>
        </div>
    );
};

export default UserCard;