import Services from "@/components/ui/PricesForServices/Services";
import Profile from "@/components/ui/PricesForServices/Profile";
import React from "react";
import PricesForServices from "@/components/ui/PricesForServices/PricesForServices";

export default function Home() {
    return (
        <div>
            <Profile/>
            <div className='mx-[40px]'>
                <Services/>
                <PricesForServices/>
            </div>
        </div>
    );
}
