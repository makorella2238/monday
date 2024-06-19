'use client';

import React, {useState} from 'react';
import Image from "next/image";
import one from '../../../../../public/pricesForServices/services/1.svg';
import two from '../../../../../public/pricesForServices/services/2.svg';
import three from '../../../../../public/pricesForServices/services/3.svg';
import fore from '../../../../../public/pricesForServices/services/4.svg';
import five from '../../../../../public/pricesForServices/services/5.svg';
import s from './Services.module.scss'

const services = [
    {id: 1, title: "Services", description: "Your current active services", src: one},
    {id: 2, title: "Certificates", description: "Upload and manage certificates", src: two},
    {id: 3, title: "Portfolio", description: "Show your best works", src: three},
    {id: 4, title: "Reviews", description: "Reviews by customers", src: fore},
    {id: 5, title: "Prices for services", description: "Your current services charge", src: five}
];

const Services: React.FC = () => {
    const [activeService, setActiveService] = useState(5);

    return (
        <div className="w-full flex  flex-col sm:flex-row sm:justify-between px-3 sm:py-6 mb-2.5 sm:mb-[20px] gap-[5px] sm:gap-[15px]">
            { services.map(service => (
                <div
                    key={ service.id }
                    className={ `py-[24px] pl-[26px] pr-[110px] rounded-[16px] cursor-pointer flex items-center transition-all duration-300 bg-white ${
                        activeService === service.id ? 'bg-transparent sm:bg-white border border-[#AEB5BF] sm:border-none sm:shadow-lg' : ''
                    }` }
                    onClick={ () => setActiveService(service.id) }
                >
                    { activeService !== service.id && <div className={ `hidden sm:block p-3 mr-2` }>
                        <Image
                            src={ service.src }
                            alt={ service.title }
                            width={ 19 }
                            height={ 19 }
                        />
                    </div> }
                    { activeService === service.id && <div className={ `hidden sm:block p-3 mr-2 ${ s.border }` }>
                        <Image
                            src={ service.src }
                            alt={ service.title }
                            width={ 19 }
                            height={ 19 }
                        />
                    </div> }
                    <div className={ `sm:hidden p-3 mr-2 ${ s.border }` }>
                        <Image
                            src={ service.src }
                            alt={ service.title }
                            width={ 19 }
                            height={ 19 }
                        />
                    </div>
                    <div className='ml-[8px]'>
                        <h3 className={ `font-bold text-[16px] transition-all duration-300 ${
                            activeService === service.id ? 'text-[#202020] ' : 'text-[#9CA5B3]'
                        }` }>
                            { service.title }
                        </h3>
                        <p className="m-0 text-sm text-[#9CA5B3] text-[12px] leading-4">{ service.description }</p>
                    </div>
                </div>
            )) }
        </div>
    );
};

export default Services;
