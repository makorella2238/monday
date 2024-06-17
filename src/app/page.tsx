import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer/Footer";
import Services from "@/components/ui/PricesForServices/Services";
import Profile from "@/components/ui/PricesForServices/Profile";
import React from "react";

export default function Home() {
    return (
        <div>
            <Header/>
            <Profile/>
            <Services/>
            <Footer/>
        </div>
    );
}
