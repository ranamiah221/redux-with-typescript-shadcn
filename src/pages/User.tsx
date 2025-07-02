import AddToUser from "@/module/AddToUser";
import UserCard from "@/module/UserCard";
import { selectAllUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const User = () => {
    const users = useAppSelector(selectAllUser)

    return (<>
        <div className="m-4">
            <div className="flex justify-end ">
                <AddToUser></AddToUser>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    </>

    );
};

export default User;