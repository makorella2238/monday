'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import verificationIcon from '@/../public/footer/verification.svg';
import starIcon from '@/../public/footer/star.svg';
import joinIcon from '@/../public/footer/join.svg';
import tag from "../../../../public/pricesForServices/profile/tag.svg";
import arr from "../../../../public/footer/arr-down.svg";

const Footer = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isUsefulOpen, setIsUsefulOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);

    return (
        <footer className="bg-[#202020] text-white pt-[50px] sm:pt-[125px] pb-[60px] sm:pb-[70px] px-5 sm:x-[60px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <div
                            className="text-[18px] font-bold mb-4 cursor-pointer md:cursor-auto flex justify-between"
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                        >
                            About Monday
                            <Image className='sm:hidden' src={ arr } alt='arr' width={ 24 }
                                   height={ 24 }/>
                        </div>
                        <ul className={`${isAboutOpen ? 'block' : 'hidden'} md:block`}>
                            <li className="mb-2"><a href="#" className="text-white">About the project</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Agency contract</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div
                            className="text-[18px] font-bold mb-4 cursor-pointer md:cursor-auto flex justify-between"
                            onClick={() => setIsHelpOpen(!isHelpOpen)}
                        >
                            Help
                            <Image className='sm:hidden' src={ arr } alt='arr' width={ 24 }
                                   height={ 24 }/>
                        </div>
                        <ul className={`${isHelpOpen ? 'block' : 'hidden'} md:block`}>
                            <li className="mb-2"><a href="#" className="text-white">Service rules</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Question answer</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Support</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div
                            className="text-[18px] font-bold mb-4 cursor-pointer md:cursor-auto  flex justify-between"
                            onClick={() => setIsUsefulOpen(!isUsefulOpen)}
                        >
                            Useful
                            <Image className='sm:hidden' src={ arr } alt='arr' width={ 24 }
                                   height={ 24 }/>
                        </div>
                        <ul className={`${isUsefulOpen ? 'block' : 'hidden'} md:block`}>
                            <li className="mb-2"><a href="#" className="text-white">For customers</a></li>
                            <li className="mb-2"><a href="#" className="text-white">For performers</a></li>
                            <li className="flex mb-2 items-center">
                                <a href="#" className="text-white">PRO account</a>
                                <div className="flex items-center gap-[3px] ml-[8px] px-[8.5px] py-[4.5px] text-xs bg-[#4790FF] rounded-full text-white">
                                    <p>PRO</p>
                                    <Image src={starIcon} alt='starIcon' width={11} height={11}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div
                            className="text-[18px] font-bold mb-4 cursor-pointer md:cursor-auto flex justify-between"
                            onClick={() => setIsCommunityOpen(!isCommunityOpen)}
                        >
                            Community
                            <Image className='sm:hidden' src={ arr } alt='arr' width={ 24 }
                                   height={ 24 }/>
                        </div>
                        <ul className={`${isCommunityOpen ? 'block' : 'hidden'} md:block`}>
                            <li className="mb-2"><a href="#" className="text-white">Blog Monday</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Affiliate program</a></li>
                            <li className="mb-2 flex items-center">
                                <a href="#" className="text-white flex items-center gap-[5px]">
                                    Verification
                                    <Image src={verificationIcon} alt='verificationIcon' width={14} height={14}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[48px] sm:mt-[59px] flex items-center gap-[13px] sm:gap-[16px] justify-centerк">
                    <button className="cursor-auto py-[14px] sm:py-[9.5px] px-[59.5px] sm:px-[40.5px] border border-white/40 text-white rounded-[12px] transition-all ease-in-out duration-500 text-white/40">
                        Sign In
                    </button>
                    <button className="flex items-center gap-[10px] py-[14px] sm:py-[9px] px-[56.5px] sm:px-[37.5px] border border-white text-white rounded-[12px]">
                        <p>Join</p>
                        <Image src={joinIcon} alt='joinIcon' width={16} height={16}/>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;