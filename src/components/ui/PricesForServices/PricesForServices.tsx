import React from 'react';
import Image from 'next/image';
import setting from '@/../public/pricesForServices/pricesServices/setting.svg'
import profile from '@/../public/pricesForServices/pricesServices/profile.svg'
import creationSites from '@/../public/pricesForServices/pricesServices/creatiob-sites.svg'
import vector from '@/../public/pricesForServices/pricesServices/vector.svg'
import arrDown from '@/../public/pricesForServices/pricesServices/arr-down.svg'

const PricesForServices: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Prices for services</h2>
            <div>
                <div className="bg-white rounded-[24px] pt-[30px] pb-[15px] mb-[35px]">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="pl-[40px] text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Service</th>
                            <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Price
                                Range
                            </th>
                            <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Price Per
                                Hour
                            </th>
                            <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Minimal
                                Budget
                            </th>
                            <th className="text-left text-[14px] font-bold leading-5 text-[#9CA5B3] uppercase pb-[17px]">Description</th>
                        </tr>
                        </thead>
                        <tbody className='mt-[17px] border-t border-[#F2F2F2]'>
                        <tr>
                            <td className="pl-[40px] inline-block">
                                <div className="flex items-center mt-[21px] mb-[30px] pr-[68px] rounded-[12px] p-[8px] border border-solid border-[#F2F2F2]">
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
                            <td className="text-[16px] font-bold leading-5">100000 - 150000 <span className='text-[#9CA5B3]'>UZS</span></td>
                            <td className="text-[16px] font-bold leading-5">100000 <span className='text-[#9CA5B3]'>UZS</span></td>
                            <td className="text-[16px] font-bold leading-5">100000 <span className='text-[#9CA5B3]'>UZS</span></td>
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
                                        <p className="text-[12px] font-bold leading-4">Improving and adjusting the<br/>
                                            site</p>
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
                    <div className="flex justify-end mt-[15px]">
                        <button className="mr-3 px-[30px] py-[14px] bg-[#EDF4FF] rounded-[12px] flex items-center">
                            <Image
                                src={ setting }
                                alt="Profile"
                                width={ 18 }
                                height={ 18 }
                            />
                            <p className='ml-[2px] text-[#4790FF]'>Edit Prices</p>
                        </button>
                    </div>
                </div>

                <div className="bg-white py-2 mb-8 border border-[#AEB5BF] rounded-full ">
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
                                alt="Profile"
                                width={ 25 }
                                height={ 25 }
                                className="rounded-full mr-2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesForServices;