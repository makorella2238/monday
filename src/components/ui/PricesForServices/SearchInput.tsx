'use client'

import { useState } from 'react';
import Image from "next/image";
import searchIcon from '@/../public/header/search.svg'
import timer from '@/../public/header/timer.svg'

const services = ["Social & SMM", "SEO", "Copywriting", "Web Development", "Scripts & Telegram Bots"];
const recent = ["Wibtrix site improvements", "Seo optimisation"];

function SearchInput() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="relative z-50" onBlur={() => setShowDropdown(false)}>
            <input
                type="text"
                placeholder="Search for services..."
                className="w-[316px] bg-[#FAFAFC] rounded-[12px] px-[16px] py-[13px] text-sm focus:outline-none pr-[40px]"
                onFocus={() => setShowDropdown(true)}
            />
            <Image src={ searchIcon } alt='searchIcon' width={ 18 } height={ 18 }
                className="absolute top-1/2 transform -translate-y-1/2 right-4"/>
            {showDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-[12px] p-4">
                    <div className="text-sm font-bold">Top services🔥</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {services.map(service => (
                            <span key={service} className="bg-gray-200 rounded-full px-3 py-1 text-sm">{service}</span>
                        ))}
                    </div>
                    <div className="mt-4 text-sm font-bold">Recent</div>
                    <ul className="mt-2 space-y-1">
                        {recent.map(item => (
                            <li key={item} className="flex items-center gap-1">
                                <Image src={ timer } alt='searchIcon' width={ 12 } height={ 12 }/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchInput;
