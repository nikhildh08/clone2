import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

export default function RootLayout({ children }) {
    return (
        <div className="">
            <div className="px-16 ">
                <Navbar />
            </div>
            <div className="flex">
                <div className="m-0 p-0  top-0">
                    < Sidebar />
                </div>

                <div className=" ">
                    <div className="w-[83.33vw]">
                        < TopBar />
                    </div>
                    <main >
                        {children}
                    </main>
                </div>
            </div>

           <Footer/>
        </div>

    );
}