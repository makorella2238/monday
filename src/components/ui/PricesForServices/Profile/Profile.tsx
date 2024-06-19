import React from 'react';
import Image from 'next/image';
import profile from '../../../../../public/pricesForServices/profile/profile.svg'
import profile_verification_gray from '../../../../../public/pricesForServices/profile/verification-gray.svg'
import profile_verification from '../../../../../public/pricesForServices/profile/profile_verification.svg'
import global from '../../../../../public/pricesForServices/profile/global.svg'
import location from '../../../../../public/pricesForServices/profile/location.svg'
import phone from '../../../../../public/pricesForServices/profile/phone.svg'
import member from '../../../../../public/pricesForServices/profile/member.svg'
import setting from '../../../../../public/pricesForServices/profile/setting.svg'
import tag from '../../../../../public/pricesForServices/profile/tag.svg'
import plus from '../../../../../public/pricesForServices/profile/plus.svg'
import briefcase from '../../../../../public/pricesForServices/profile/briefcase.svg'
import brush from '../../../../../public/pricesForServices/profile/brush.svg'
import plusGray from '../../../../../public/pricesForServices/profile/plus-gray-bg.svg'
import plusGray30 from '../../../../../public/pricesForServices/profile/plus-gray30.svg'
import bg from '../../../../../public/pricesForServices/bg.jpg'
import photo from '../../../../../public/pricesForServices/profile/photo.svg'
import eye from '../../../../../public/pricesForServices/profile/eye.svg'

import Rating from "@/components/ui/PricesForServices/Profile/Rating";
import Title from "@/components/ui/PricesForServices/Profile/Title";

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
            <div className="z-30 flex justify-center -mt-24">
                <div
                    className="rounded-[24px] w-full p-[15px] sm:p-7 flex flex-col md:flex-row pr-3 bg-[#FAFAFC] sm:bg-white">
                    {/* Left section */ }
                    <div
                        className="relative w-full md:w-1/3 flex flex-col items-center md:text-left md:items-start ">
                        <Image
                            src={ profile }
                            alt="Profile"
                            width={ 152 }
                            height={ 152 }
                            className='mb-4 -mt-20'
                        />
                        <div className='sm:hidden'>
                            <Title/>
                        </div>
                        <div className='bg-white py-4 px-3.5 rounded-[24px] sm:hidden min-w-[339px]'>
                            <Rating/>
                        </div>
                        <div
                            className="mt-2.5 min-w-[339px] py-3.5 px-4 sm:border sm:border-[#F1F3F9] rounded-[24px] sm:pt-5 sm:pb-2.5 sm:px-3 sm:ml-12 sm:mt-[36px] bg-white">
                            <p className='hidden sm:block text-center mb-[14px] text-[16px]'>
                                <strong>@James_K</strong>
                            </p>
                            <div className='sm:hidden flex justify-between gap-[171px] mb-2.5'>
                                <div className='flex gap-1.5 items-center'>
                                    <p className='text-center text-[16px]'>
                                        <strong>@James_K</strong></p>
                                    <Image src={ profile_verification }
                                           alt="verification" width={ 18 } height={ 18 }/>
                                </div>
                                <Image src={ eye }
                                       alt="verification" width={ 30 } height={ 30 }/>
                            </div>
                            <div className='hidden sm:block space-y-[8px] text-[#202020] font-bold'>
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
                                    <Image className='m-[8px] mr-[12px]' src={ location } alt="location"
                                           width={ 32 }
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
                            <div className='sm:hidden min-w-[339px] space-y-[8px] text-[#202020] font-bold text-[12px]'>
                                <div className='flex justify-between gap-[41px]'>
                                    <div className="flex items-center mb-[8px]">
                                        <Image className='mr-1.5' src={ profile_verification_gray }
                                               alt="verification"
                                               width={ 28 } height={ 28 }/>
                                        <p className='font-bold'>Identity confirmed</p>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <Image className='mr-1.5' src={ global } alt="global"
                                               width={ 28 }
                                               height={ 28 }/>
                                        <p>RUS, UZ, ENG</p>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="flex items-center mb-[8px]">
                                        <Image className='mr-1.5' src={ location } alt="location"
                                               width={ 28 }
                                               height={ 28 }/>
                                        <p>Uzbekistan</p>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <Image className='mr-1.5' src={ phone } alt="phone" width={ 28 }
                                               height={ 28 }/>
                                        <p>Phone confirmed</p>
                                    </div>
                                </div>
                                <div className="flex items-center font-bold text-[12px] sm:text-[14px]">
                                    <Image className='mr-1.5' src={ member } alt="member" width={ 28 }
                                           height={ 28 }/>
                                    <div className='flex flex-row items-center gap-1 leading-[20px]'>
                                        <p className='text-[#9CA5B3]'>Member since</p>
                                        <p className='text-[14px]'>February 2, 2016</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="mt-2.5 sm:mt-[27px] flex justify-center md:justify-start bg-[#FAFAFC] rounded-[100px]">
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
                    <div className="mt-2.5 pt-[15px] pb-5 rounded-[12px] px-5 md:w-2/3 sm:mr-10 bg-white w-full">
                        <div className='hidden sm:block'><Title/></div>
                        <div className='bg-[#FAFAFC] p-[15px] rounded-[16px]'>
                            <div className="flex justify-between items-center mb-[10px]">
                                <h3 className="sm:text-xl font-semibold text-lg">About me</h3>
                            </div>
                            <p className="mb-5 sm:mb-[12px] text-[#575E6A] leading-6">
                                During its work, more than 100 projects of varying levels of complexity were completed.
                                What
                                can
                                I offer you
                            </p>
                            <button
                                className="mb-[24px] text-[#202020] space-x-[5px] px-[13px] py-[9.5px] flex bg-[#FAFAFC] rounded-[12px]">
                                <p className='font-medium text-[14px] text-[#202020]'>Read full description</p>
                                <Image className='ml-[5px]' src={ plus } alt='plusIcon' width={ 26 }
                                       height={ 26 }/>
                            </button>
                            <div className='sm:mb-[24px]'>
                                <h3 className="sm:text-xl font-semibold text-lg mb-[17px]">Skills</h3>
                                <div className="flex flex-wrap gap-1 sm:gap-2 text-[12px] sm:text-[14px] ">
                                    <span className="px-[12.5px] py-[10.5px] border border-solid border-[#F2F2F2] rounded-full">Bitrix24</span>
                                    <span className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Development on 1C-Bitrix</span>
                                    <span className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Bitrix24</span>
                                    <span className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full">Development on 1C-Bitrix</span>
                                    <span className="px-[12.5px] py-[10.5px] text-[14px] border border-solid border-[#F2F2F2] rounded-full flex">
                                <p>Show all skills (20)</p>
                                <Image className='ml-[5px]' src={ plusGray } alt='plusIcon' width={ 18 } height={ 18 }/>
                            </span>
                                </div>
                            </div>
                        </div>
                        <div className='inline-flex flex-col gap-[15px]'>
                            <div className="py-[7px] rounded-lg cursor-pointer">
                                <div className='inline-flex items-center'>
                                    <Image className='mr-[5px]' src={ tag } alt='joinIcon' width={ 16 }
                                           height={ 16 }/>
                                    <span
                                        className='font-bold mr-[8px] text-[#202020] text[16px]'>Prices for services</span>
                                    <Image src={ plusGray30 } alt='joinIcon' width={ 30 }
                                           height={ 30 }/>
                                </div>
                            </div>
                            <div className="py-[7px] rounded-lg cursor-pointer">
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
                <div className="hidden min-w-[365px] ml-[20px] bg-white rounded-[24px] sm:flex flex-col">
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
                        <Rating/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;