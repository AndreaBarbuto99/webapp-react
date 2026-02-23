import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

export default function DefaultLayout() {

    return (
        <>
            <MainHeader />
            <main className="container mt-5">
                <Outlet />
            </main>
        </>
    )

}