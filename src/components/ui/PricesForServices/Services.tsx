'use client';

import React, { useState } from 'react';
import Image from "next/image";
import one from '@/../public/pricesForServices/services/1.svg';
import two from '@/../public/pricesForServices/services/2.svg';
import three from '@/../public/pricesForServices/services/3.svg';
import fore from '@/../public/pricesForServices/services/4.svg';
import five from '@/../public/pricesForServices/services/5.svg';

const services = [
    { id: 1, title: "Services", description: "Your current active services", src: one },
    { id: 2, title: "Certificates", description: "Upload and manage certificates", src: two },
    { id: 3, title: "Portfolio", description: "Show your best works", src: three },
    { id: 4, title: "Reviews", description: "Reviews by customers", src: fore },
    { id: 5, title: "Prices for services", description: "Your current services charge", src: five }
];

const Services: React.FC = () => {
    const [activeService, setActiveService] = useState(5);

    return (
        <div className="py-6 mb-[20px] flex gap-[15px] bg-gray-200">
            {services.map(service => (
                <div
                    key={service.id}
                    className={`py-[24px] pl-[26px] pr-[78px] rounded-lg cursor-pointer flex items-center transition-all duration-300 bg-white ${
                        activeService === service.id ? 'shadow-lg' : ''
                    }`}
                    onClick={() => setActiveService(service.id)}
                >
                    <Image
                        src={service.src}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="mr-4"
                    />
                    <div className='ml-[8px]'>
                        <h3 className={`text-[16px] transition-all duration-300 ${
                            activeService === service.id ? 'text-[#202020]' : 'text-[#9CA5B3]'
                        }`}>
                            {service.title}
                        </h3>
                        <p className="m-0 text-sm text-[#9CA5B3] text-[12px]">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
