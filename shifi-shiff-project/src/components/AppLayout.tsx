import { Outlet } from "react-router"
import NavBar from "./NavBar"

const AppLayout = () => {

    return (<>
        
           
            <div style={{ border: '1px solid red' }}>
                <NavBar />
                <div></div>
                <Outlet />
                <div></div>
                _______________________________________
            </div>
        
            ************
    </>)
}

export default AppLayout