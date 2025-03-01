import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Nvbar";

export function Layout(){
    
    return (
        <div className="h-screen bg-[#0D1821] font-[DM_Sans] text-[#F0F4EF]">
            <div>
                <NavBar />
            </div>
            <Outlet />
            <div>
                Footer
            </div>
        </div>
    )
}