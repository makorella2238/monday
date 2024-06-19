import Services from "@/components/ui/PricesForServices/Services/Services";
import Profile from "@/components/ui/PricesForServices/Profile/Profile";
import React from "react";
import PricesForServices from "@/components/ui/PricesForServices/PricesForServices/PricesForServices";

export default function Home() {
    return (
        <div>
            <Profile/>
            <Services/>
            <PricesForServices/>
        </div>
    );
}
