import { Outlet } from "react-router"
import NavBar from "./NavBar"
import { createContext, useReducer } from "react";
import HomePage from "./HomePage";
import { User, userReducer } from "./user";

export type UserContextType = {
    user: User;
    userDispatch: React.Dispatch<any>;
};

export const UserContext = createContext<UserContextType | null>(null);

const AppLayout = () => {



    const initialUser: User = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        addres: '',
        phone: ''
    };


    const [user, userDispatch] = useReducer(userReducer, initialUser)

    return (<>

        <UserContext value={{ user, userDispatch }}>

            <HomePage></HomePage>
            
            <NavBar />
            <div></div>
            <Outlet />
            <div></div>
        </UserContext>

    </>)
}

export default AppLayout