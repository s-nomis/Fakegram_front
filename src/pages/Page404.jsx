import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import NotFound from "../components/NotFound";

const Page404 = () => {
    return (
        <div className="container flex-col">
            <Navbar />

            <main>
                <NotFound />
            </main>

            <Footer />
        </div>
    );
};

export default Page404;
