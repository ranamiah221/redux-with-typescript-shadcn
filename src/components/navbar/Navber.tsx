import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "../mode/mode-toggle";


const Navber = () => {
    
    return (
        <>
            <div className="flex justify-between items-center m-5">
                <p className="text-xl font-medium text-purple-500">Tasks --</p>
                <div>
                    <Link className="ml-5" to='/'>Tasks</Link>
                    <Link className="ml-5" to='/users'>Users</Link>
                </div>
                <ModeToggle></ModeToggle>
            </div>
          

            <Outlet></Outlet>
        </>
    );
};

export default Navber;