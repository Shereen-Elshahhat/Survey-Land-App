import { Outlet } from "react-router-dom";

const AuthLayout = () =>{
    return(
        <>
        <div className="min-h-screen bg-white">
            {/* header */}
            <header className="flex h-20 items-center justify-between border-b border-gray-100 px-6 md:px-16">
                <a href="/" className="text-2xl font-bold tracking-tight text-teal-700">Survay<span className="text-gray-800">Land </span></a>
                <p className="hidden text-sm text-gray-500 sm:block">Dont have account ?<a href="/" className="text-teal-500"> Apply Now</a></p>
            </header>

            {/* main */}
            <main className="min-h-[calc(100vh-5rem)]">
                <Outlet/>
            </main>
        </div>
        </>
    )
}
export default AuthLayout;