import React from 'react';
import Image from 'next/image';
import profile from '@/../public/pricesForServices/profile/profile.svg'
import profile_verification from '@/../public/pricesForServices/profile/profile_verification.svg'
import profile_verification_gray from '@/../public/pricesForServices/profile/verification-gray.svg'
import global from '@/../public/pricesForServices/profile/global.svg'
import location from '@/../public/pricesForServices/profile/location.svg'
import phone from '@/../public/pricesForServices/profile/phone.svg'
import member from '@/../public/pricesForServices/profile/member.svg'
import bigStar from '@/../public/pricesForServices/profile/big-star.svg'
import info from '@/../public/pricesForServices/profile/info.svg'
import setting from '@/../public/pricesForServices/profile/setting.svg'
import tag from '@/../public/pricesForServices/profile/tag.svg'
import plus from '@/../public/pricesForServices/profile/plus.svg'
import briefcase from '@/../public/pricesForServices/profile/briefcase.svg'
import brush from '@/../public/pricesForServices/profile/brush.svg'
import plusGray from '@/../public/pricesForServices/profile/plus-gray-bg.svg'
import plusGray30 from '@/../public/pricesForServices/profile/plus-gray30.svg'
import bg from '@/../public/pricesForServices/bg.jpg'
import photo from '@/../public/pricesForServices/profile/photo.svg'

const Profile: React.FC = () => {
    return (
        <div className="relative">
            <div className="relative h-72 w-full overflow-hidden rounded-t-[24px] -z-50">
                <Image
                    src={ bg }
                    alt="Cover"
                    layout="fill"
                    objectFit="cover"
                />
                <button
                    className="absolute top-4 right-4 flex items-center gap-1 bg-white text-black px-5 py-3.5 rounded-[12px]">
                    <Image
                        src={ photo }
                        alt="Cover"
                        width={ 18 }
                        height={ 18 }
                    />
                    Edit Cover Image
                </button>
            </div>
            <div className="z-30 mx-10 flex justify-center -mt-24">
                <div className="bg-white rounded-[24px] w-full p-7 flex flex-col md:flex-row pr-3 ">
                    {/* Left section */ }
                    <div
                        className="relative mt-[80px] ml-3 md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
                        <Image
                            src={ profile }
                            alt="Profile"
                            width={ 152 }
                            height={ 152 }
                            className='absolute -top-36 right-48 -z-0'
                        />
                        <div className="border border-[#F1F3F9] rounded-[24px] pt-5 pb-2.5 px-3 ml-12 mt-[36px]">
                            <p className='text-center mb-[14px]'><strong>@James_K</strong></p>
                            <div className='ml-5 space-y-[8px] text-[#202020] font-bold'>
                                <div className="flex items-center mb-[8px]">
                                    <Image className='m-[8px] mr-[12px]' src={ profile_verification_gray }
                                           alt="verification"
                                           width={ 32 } height={ 32 }/>
                                    <p className='font-bold'>Identity confirmed</p>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <Image className='m-[8px] mr-[12px]' src={ global } alt="global" width={ 32 }
                                           height={ 32 }/>
                                    <p>RUS, UZ, ENG</p>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <Image className='m-[8px] mr-[12px]' src={ location } alt="location" width={ 32 }
                                           height={ 32 }/>
                                    <p>Uzbekistan</p>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <Image className='m-[8px] mr-[12px]' src={ phone } alt="phone" width={ 32 }
                                           height={ 32 }/>
                                    <p>Phone confirmed</p>
                                </div>
                                <div className="flex items-center font-bold">
                                    <Image className='m-[8px] mr-[12px]' src={ member } alt="member" width={ 32 }
                                           height={ 32 }/>
                                    <div className='flex flex-col space-y-[8px] leading-[20px]'>
                                        <p className='text-[#9CA5B3]'>Member since</p>
                                        <p className='text-[14px]'>February 2, 2016</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-[27px] flex justify-center md:justify-start bg-[#FAFAFC] rounded-[100px]">
                                <button className="px-[24px] py-[10px] text-[#9CA5B3] rounded flex items-center">
                                    <Image className='mr-[5px]' src={ briefcase } alt='briefcase' width={ 16 }
                                           height={ 16 }/>
                                    <p>Client</p>
                                </button>
                                <button
                                    className="px-[24px] py-[10px] text-[#9CA5B3] rounded-[100px] bg-[#EDF4FF] border border-solid border-[#F2F2F2] flex items-center">
                                    <Image className='mr-[5px]' src={ brush } alt='briefcase' width={ 16 }
                                           height={ 16 }/>
                                    <p className='text-[#4790FF]'>Seller</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right section */ }
                    <div className="md:w-2/3 mr-10">
                        <div className='flex gap-0.5 mb-[3px]'>
                            <p className="text-[32px] font-bold text-[#202020] mr-[4px] leading-10">James Kilroy</p>
                            <Image src={ profile_verification } alt="verification" width={ 24 } height={ 24 }/>
                        </div>
                        <p className="text-[#202020] text-[20px] font-bold leading-7 mb-[15px]">Web Developer,
                            Professional
                            Linkbuilder</p>
                        <div className="flex items-center  space-x-[5px] text-green-500 mb-[22px]">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <span className="text-[14px] font-bold leading-5 text-[#575E6A]">Online</span>
                        </div>
                        <div className="flex justify-between items-center mb-[10px]">
                            <h3 className="text-xl font-semibold">About me</h3>
                        </div>
                        <p className="mb-[12px] text-[#575E6A] leading-6">
                            During its work, more than 100 projects of varying levels of complexity were completed. What
                            can
                            I offer you
                        </p>
                        <button
                            className="mb-[24px] text-[#202020] space-x-[5px] px-[13px] py-[9.5px] flex bg-[#FAFAFC] rounded-[12px]">
                            <p className='font-medium text-[14px] text-[#202020]'>Read full description</p>
                            <Image className='ml-[5px]' src={ plus } alt='plusIcon' width={ 26 }
                                   height={ 26 }/>
                        </button>
                        <div className='mb-[24px]'>
                            <h3 className="text-xl font-semibold mb-[17px]">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                            <span
                                className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Bitrix24</span>
                                <span
                                    className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Development on 1C-Bitrix</span>
                                <span
                                    className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Bitrix24</span>
                                <span
                                    className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Development on 1C-Bitrix</span>
                                <span
                                    className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full flex">
                                <p>Show all skills (20)</p>
                                <Image className='ml-[5px]' src={ plusGray } alt='plusIcon' width={ 18 } height={ 18 }/>
                            </span>
                            </div>
                        </div>
                        <div className='inline-flex flex-col'>
                            <div className="py-[24px] rounded-lg cursor-pointer">
                                <div className='inline-flex items-center'>
                                    <Image className='mr-[5px]' src={ tag } alt='joinIcon' width={ 16 }
                                           height={ 16 }/>
                                    <span
                                        className='font-bold mr-[8px] text-[#202020] text[16px]'>Prices for services</span>
                                    <Image src={ plusGray30 } alt='joinIcon' width={ 30 }
                                           height={ 30 }/>
                                </div>
                            </div>
                            <div className="py-[7.5px] rounded-lg cursor-pointer">
                                <div className='inline-flex items-center'>
                                    <Image className='mr-[5px]' src={ tag } alt='joinIcon' width={ 16 }
                                           height={ 16 }/>
                                    <span className='font-bold mr-[8px] text-[#202020] text[16px]'>Certificates</span>
                                    <Image src={ plusGray30 } alt='joinIcon' width={ 30 }
                                           height={ 30 }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */ }
                <div className="min-w-[365px] ml-[20px] bg-white rounded-[24px] flex flex-col md:flex-row ">
                    <div className="py-[16px] px-[20px]">
                        <div className="flex justify-center items-center gap-[8px] font-medium mb-[20px]">
                            <button
                                className="flex items-center py-[14px] px-[26px] bg-[#202020] border border-white text-white rounded-[12px] transition-all ease-in-out duration-500">
                                <Image className='mr-[5px]' src={ setting } alt='joinIcon' width={ 18 }
                                       height={ 18 }/>
                                <p>Settings</p>
                            </button>
                            <button
                                className="flex items-center py-[14px] px-[26px] border border-[#AEB5BF] text-[#202020] hover:bg-white hover:text-gray-900 rounded-[12px] transition-all ease-in-out duration-500">
                                <p>Preview Profile</p>
                            </button>
                        </div>
                        <div className="text-center">
                            <div className="relative flex justify-center mb-[20px]">
                                <Image src={ bigStar } alt="bigStar" width={ 35 } height={ 35 }/>
                                <div className="flex flex-row">
                                    <span className="text-[48px] font-bold mx-[5px]">5.0</span>
                                    <span
                                        className="items-start text-[#202020] text-[14px] mb-[13px] font-bold mt-auto">Seller</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-[8px]">
                                <span className="py-[5.5px] px-[13px] bg-[#EDF4FF] rounded-[8px]">PRO ⭐️</span>
                                <span className="text-gray-600 font-bold">Highest rating plus</span>
                                <Image src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 text-center mb-[6px]">
                            <div
                                className="flex items-center justify-between p-[12px] bg-[#FAFAFC] mb-[6px] rounded-[8px] leading-5">
                                <span className='text-[#202020] text-[20px] font-bold'>20588</span>
                                <span className='text-[14px] font-bold'>Orders completed</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-[12px] bg-[#FAFAFC] mb-[6px] rounded-[8px] leading-5">
                                <span className='text-[#202020] text-[20px] font-bold'>16360</span>
                                <span className='text-[14px] font-bold'>Feedback received</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-[12px] bg-[#FAFAFC] mb-[6px] rounded-[8px] leading-5">
                                <span className='text-[#202020] text-[20px] font-bold leading-5'>100%</span>
                                <span className='text-[14px] font-bold'>Orders successfully delivered</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-[12px] bg-[#FAFAFC] mb-[6px] rounded-[8px] leading-5">
                                <span className='text-[#202020] text-[20px] font-bold mr-[4x] leading-5'>100%</span>
                                <div className='flex'>
                                    <span className='mr-[4px] text-[14px] font-bold'>Orders delivered on time</span>
                                    <Image src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between p-[12px] bg-[#FAFAFC] mb-[6px] rounded-[8px] leading-5">
                                <span className='text-[#202020] text-[20px] font-bold leading-5'>55%</span>
                                <span className='text-[14px] font-bold'>Repeat orders</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className='flex space-x-[5.2px]'>
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