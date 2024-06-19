'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import setting from '../../../../../public/pricesForServices/pricesServices/setting.svg'
import profile from '../../../../../public/pricesForServices/pricesServices/profile.svg'
import vector from '../../../../../public/pricesForServices/pricesServices/vector.svg'
import arrDown from '../../../../../public/pricesForServices/pricesServices/arr-down-blue.svg'
import arrDownBlack from '../../../../../public/pricesForServices/pricesServices/arr-down-black.svg'
import arrDownWhite from '../../../../../public/pricesForServices/pricesServices/arr-down-white.svg'
import creationSites from '@/../public/pricesForServices/pricesServices/creation-sites.svg'
import s from './PricesForServices.module.scss'

const PricesForServices: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="mt-2.5 sm:px-4 md:px-0 ">
            <h2 className="hidden sm:block sm:text-2xl font-bold mb-4">Prices for services</h2>
            <div className="bg-[#FAFAFC] sm:bg-white  rounded-[24px] sm:pt-[30px] sm:pb-[15px] mb-[35px]">
                <table className="min-w-full bg-white hidden md:table">
                    <thead>
                    <tr>
                        <th className="pl-[40px] text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Service</th>
                        <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Price
                            Range
                        </th>
                        <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Price
                            Per Hour
                        </th>
                        <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Minimal
                            Budget
                        </th>
                        <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Description</th>
                    </tr>
                    </thead>
                    <tbody className='mt-[17px] border-t border-[#F2F2F2]'>
                    <tr>
                        <td className="pl-[40px]">
                            <div
                                className="flex items-center mt-[21px] mb-[30px] pr-[68px] rounded-[12px] p-[8px] border border-solid border-[#F2F2F2]">
                                <Image
                                    src={ creationSites }
                                    alt="Service Icon"
                                    width={ 32 }
                                    height={ 32 }
                                    className="mr-2"
                                />
                                <div>
                                    <p className="text-[12px] font-bold leading-4">CREATION AND<br/> IMPROVEMENT OF
                                        SITES</p>
                                </div>
                            </div>
                        </td>
                        <td className="text-[16px] font-bold leading-5">100000 - 150000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                        <td className="text-[16px] font-bold leading-5">100000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                        <td className="text-[16px] font-bold leading-5">100000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                    </tr>
                    <tr>
                        <td className="pl-[89px] relative">
                            <div className="flex items-center">
                                <Image
                                    src={ vector }
                                    alt="Service Icon"
                                    width={ 15 }
                                    height={ 33 }
                                    className="mr-2 absolute top-[-23px] left-16"
                                />
                                <div>
                                    <p className="text-[12px] font-bold leading-4">Improving and adjusting the<br/> site
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td className="text-[16px] font-bold leading-5">100000 - 150000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                        <td className="text-[16px] font-bold leading-5">100000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                        <td className="text-[16px] font-bold leading-5">100000 <span
                            className='text-[#9CA5B3]'>UZS</span></td>
                        <td className="text-[16px] font-bold leading-5">Lorem ipsum</td>
                    </tr>
                    </tbody>
                </table>
                <div className="block p-4 md:hidden rounded-[24px]">
                    <h2 className="text-[16px] font-bold mb-1">Prices for services</h2>
                    <div onClick={ toggleExpand }
                         className="cursor-pointer flex items-center justify-between p-4 rounded-[12px] bg-[#F2F2F2]">
                        <div className="flex items-center">
                            <Image
                                src={ creationSites }
                                alt="Service Icon"
                                width={ 40 }
                                height={ 40 }
                                className="mr-2"
                            />
                            <p className="text-[12px] font-bold">CREATION AND<br/> IMPROVEMENT OF SITES</p>
                        </div>
                        <Image
                            src={ arrDownBlack }
                            alt="Arrow Down"
                            width={ 25 }
                            height={ 25 }
                            className={ `transform transition-transform ${ isExpanded ? 'rotate-180' : '' }` }
                        />
                    </div>
                    { isExpanded && <div className="mt-[5px] bg-white rounded-lg shadow-md">
                        <div className="border-b border-gray-200">
                            <button className="w-full text-left p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src={ creationSites }
                                        alt="Service Icon"
                                        width={ 40 }
                                        height={ 40 }
                                        className="mr-2"
                                    />
                                    <p className="text-[12px] font-bold">CREATION AND<br/> IMPROVEMENT OF SITES
                                    </p>
                                </div>
                            </button>
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <div className="p-4 space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-[#9CA5B3]">DESCRIPTION</p>
                                    <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">Lorem ipsum</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#9CA5B3]">PRICE RANGE</p>
                                    <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">100000 - 150000 UZS</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#9CA5B3]">PRICE PER HOUR</p>
                                    <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">100000 UZS</p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#9CA5B3]">MINIMAL BUDGET</p>
                                    <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">100000 UZS</p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4 pr-4 pl-4 space-y-4 rounded-[12px]">
                            <div>
                                <p className="text-sm font-semibold text-[#9CA5B3] text-[12px]">Service</p>
                                <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">Improving and
                                    adjusting the sitem</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#9CA5B3] text-[12px]">DESCRIPTION</p>
                                <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">Lorem ipsum</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#9CA5B3] text-[12px]">PRICE
                                    RANGE</p>
                                <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">100000 - 150000
                                    UZS</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#9CA5B3] text-[12px]">PRICE PER
                                    HOUR</p>
                                <p className="text-sm pb-2.5 border-b border-[#F2F2F2]">100000 UZS</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#9CA5B3] text-[12px]">MINIMAL
                                    BUDGET</p>
                                <p className="text-sm pb-2.5 border-b border-[#F2F2F2] ">100000 UZS</p>
                            </div>
                            <div className="w-full sm:flex sm:justify-end sm:mt-[15px] mt-[25px]">
                                <button
                                    className="w-full mr-3 px-[30px] py-[14px] bg-[#EDF4FF] rounded-[12px] flex items-center justify-center">
                                    <Image
                                        src={ setting }
                                        alt="Edit Prices"
                                        width={ 18 }
                                        height={ 18 }/>
                                    <p className=' text-[#4790FF]'>Edit Prices</p>
                                </button>
                            </div>
                        </div>

                    </div>
                    }
                </div>

            </div>

            <div className="hidden sm:block bg-white py-2 mb-8 border border-[#AEB5BF] rounded-full">
                <div className="flex justify-between items-center">
                    <div className="pl-[12px] gap-4 flex items-center">
                        <Image
                            src={ profile }
                            alt="Profile"
                            width={ 45 }
                            height={ 45 }
                            className="rounded-full mr-2"
                        />
                        <p className="font-semibold">James_K statistics</p>
                    </div>
                    <button className="text-[#4790FF] pr-4 flex">
                        Show statistics
                        <Image
                            src={ arrDown }
                            alt="Arrow Down"
                            width={ 25 }
                            height={ 25 }
                            className="rounded-full mr-2"
                        />
                    </button>
                </div>
            </div>
            <div
                className="sm:hidden bg-white px-[15px] pt-6 pb-3 mb-[54px] border border-[#AEB5BF] rounded-[20px] sm:rounded-full">
                <Image
                    src={ profile }
                    alt="Profile"
                    width={ 45 }
                    height={ 45 }
                    className='mb-2.5 mx-auto'
                />
                <p className="font-semibold mb-2.5 text-[20px] text-center">James_K statistics</p>
                <button
                    className={ `text-white w-full flex items-center justify-center pr-2 rounded-[12px] ${ s.gradient }` }>
                    Show statistics
                    <Image
                        src={ arrDownWhite }
                        alt="Arrow Down"
                        width={ 25 }
                        height={ 25 }
                        className="rounded-[12px] py-[14px] mr-2"
                    />
                </button>
            </div>
        </div>
    );
};

export default PricesForServices;