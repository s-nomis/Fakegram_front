import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Posts from "../components/posts/Posts";

const Home = () => {
    return (
        <div className="container flex-col">
            <Navbar activeTab={1} />

            <main>
                <Posts />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
