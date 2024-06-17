import React from 'react';
import Image from 'next/image';
import profile from '@/../public/pricesForServices/profile/profile.svg'
import profile_verification from '@/../public/pricesForServices/profile/profile_verification.svg'
import global from '@/../public/pricesForServices/profile/global.svg'
import location from '@/../public/pricesForServices/profile/location.svg'
import phone from '@/../public/pricesForServices/profile/phone.svg'
import member from '@/../public/pricesForServices/profile/member.svg'
import bigStar from '@/../public/pricesForServices/profile/big-star.svg'
import info from '@/../public/pricesForServices/profile/info.svg'
import setting from '@/../public/pricesForServices/profile/setting.svg'
import tag from '@/../public/pricesForServices/profile/tag.svg'
import certificates from '@/../public/pricesForServices/profile/certificates.svg'
import plus from '@/../public/pricesForServices/profile/plus.svg'

const Profile: React.FC = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-[24px] w-full p-8 flex flex-col md:flex-row gap-8">
                {/* Left section */ }
                <div className="md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
                    <Image
                        src={ profile }
                        alt="Profile"
                        width={ 152 }
                        height={ 152 }
                    />
                    <div className="mt-4 space-y-[8px]">
                        <p className='text-center'><strong>@James_K</strong></p>
                        <div className="flex items-center">
                            <Image src={ profile_verification } alt="verification" width={ 18 } height={ 18 }/>
                            <p className=''>Identity confirmed</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={ global } alt="global" width={ 18 } height={ 18 }/>
                            <p>RUS, UZ, ENG</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={ location } alt="location" width={ 18 } height={ 18 }/>
                            <p>Uzbekistan</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={ phone } alt="phone" width={ 18 } height={ 18 }/>
                            <p>Phone confirmed</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={ member } alt="member" width={ 18 } height={ 18 }/>
                            <p>Member since February 2, 2016</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">Client</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Seller</button>
                    </div>
                </div>
                {/* Right section */ }
                <div className="md:w-2/3">
                    <div className='flex gap-0.5'>
                        <p className="text-2xl font-bold">James Kilroy</p>
                        <Image src={ profile_verification } alt="verification" width={ 16 } height={ 20 }/>
                    </div>
                    <p className="text-gray-600">Web Developer, Professional Linkbuilder</p>
                    <div className="flex items-center space-x-2 mt-2 text-green-500">
                        <span className="text-sm">Online</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold">About me</h3>
                    </div>
                    <p className="mt-2 text-gray-600">
                        During its work, more than 100 projects of varying levels of complexity were completed. What can
                        I offer you
                    </p>
                    <button className="mt-2 text-blue-500">Read full description</button>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-4 py-2 bg-gray-200 rounded-full">Bitrix24</span>
                            <span className="px-4 py-2 bg-gray-200 rounded-full">Development on 1C-Bitrix</span>
                            <span className="px-4 py-2 bg-gray-200 rounded-full">Show all skills (20)</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Services</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="flex items-center p-4 rounded-lg cursor-pointer">
                                <div className='flex'>
                                    <Image className='mr-[5px]' src={ tag } alt='joinIcon' width={ 16 }
                                           height={ 16 }/>
                                    <span className='font-bold mr-2'>Prices for services</span>
                                    <Image className='mr-[5px]' src={ plus } alt='joinIcon' width={ 25 }
                                           height={ 25 }/>
                                </div>
                            </li>
                            <li className="flex items-center p-4 rounded-lg cursor-pointer">
                                <div className='flex'>
                                    <Image className='mr-[5px]' src={ certificates } alt='joinIcon' width={ 16 }
                                           height={ 16 }/>
                                    <span className='font-bold mr-2'>Certificates</span>
                                </div>
                                <Image className='mr-[5px]' src={ plus } alt='joinIcon' width={ 25 }
                                       height={ 25 }/>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Stats Section */ }
                <div className="md:w-1/3 mt-8 md:mt-0">
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-center gap-0.5">
                            <button
                                className="flex items-center py-[14px] px-[26px] bg-[#202020] border border-white text-white rounded-[12px] transition-all ease-in-out duration-500">
                                <Image className='mr-[5px]' src={ setting } alt='joinIcon' width={ 18 } height={ 18 }/>
                                <p>Settings</p>
                            </button>
                            <button
                                className="flex items-center py-[14px] px-[26px] border border-[#AEB5BF] text-[#202020] hover:bg-white hover:text-gray-900 rounded-[12px] transition-all ease-in-out duration-500">
                                <p>Preview Profile</p>
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <div className="flex justify-center items-center">
                                <Image src={ bigStar } alt="bigStar" width={ 35 } height={ 35 }/>
                                <span className="text-2xl font-bold ml-2">5.0</span>
                            </div>
                            <span className="text-gray-600">Seller</span>
                            <div className="flex justify-center items-center gap-[8px] mt-2">
                                <span className="py-[5.5px] px-[13px] bg-[#EDF4FF]">PRO ⭐️</span>
                                <span className="text-gray-600 font-bold">Highest rating plus</span>
                                <Image src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 text-center bg-[#FAFAFC] mb-[6px]">
                            <div className="flex justify-between">
                                <span className='text-[#202020] text-[20px] font-bold'>20588</span>
                                <span>Orders completed</span>
                            </div>
                            <div className="flex justify-between bg-[#FAFAFC] mb-[6px]">
                                <span className='text-[#202020] text-[20px] font-bold'>16360</span>
                                <span>Feedback received</span>
                            </div>
                            <div className="flex justify-between bg-[#FAFAFC] mb-[6px]">
                                <span className='text-[#202020] text-[20px] font-bold'>100%</span>
                                <span>Orders successfully delivered</span>
                            </div>
                            <div className="flex justify-between bg-[#FAFAFC] mb-[6px]">
                                <span className='text-[#202020] text-[20px] font-bold mr-[4x]'>100%</span>
                                <div className='flex'>
                                    <span className='mr-[4px]'>Orders delivered on time</span>
                                    <Image src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                                </div>
                            </div>
                            <div className="flex justify-between  bg-[#FAFAFC] mb-[6px]">
                                <span className='text-[#202020] text-[20px] font-bold'>55%</span>
                                <span>Repeat orders</span>
                            </div>
                            <div className="mt-[20px] flex items-center justify-between">
                                <div className='flex'>
                                    <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                                    <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                                    <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                                    <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                                    <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                                </div>
                                <button className="text-[#9CA5B3]">Show all awards (20)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;