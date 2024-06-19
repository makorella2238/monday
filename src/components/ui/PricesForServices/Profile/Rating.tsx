import Image from "next/image";
import bigStar from "../../../../../public/pricesForServices/profile/big-star.svg";
import info from "../../../../../public/pricesForServices/profile/info.svg";
import React from "react";

function Rating() {
    return (
        <div>
            <div className="hidden sm:block text-center">
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
            <div className="sm:hidden flex text-center justify-between  ">
                <div className="relative flex justify-between mb-[20px]">
                    <div className='hidden sm:flex'><Image src={ bigStar } alt="bigStar" width={ 35 } height={ 35 }/>
                    </div>
                    <div className='flex sm:hidden'><Image src={ bigStar } alt="bigStar" width={ 28 } height={ 28 }/>
                    </div>
                    <div className="flex">
                        <span className="text-[36px] sm:text-[48px] font-bold mx-[5px]">5.0</span>
                        <span
                            className="items-center text-[#202020] text-[12px] sm:text-[14px] mb-[8px] sm:mb-[12px] font-bold mt-auto">Seller</span>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[8px]">
                    <span
                        className="py-[6px] pr-1 pl-2 sm:px-[13px] bg-[#EDF4FF] text-[#9CA5B3] rounded-[8px] text-[8px] sm:text-[12px]">PRO ⭐️</span>
                    <span className="font-bold text-[12px]">Highest rating plus</span>
                    <Image className='hidden sm:block' src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                </div>
            </div>
            <div className="mt-4 space-y-2 text-center">
                <div className='hidden sm:flex flex-col space-y-2 mb-[16px]'>
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
                </div>
                <div className='flex flex-col sm:hidden space-y-[2px] mb-[16px] text-[#575E6A]'>
                    <div
                        className="flex items-center justify-between p-[12px] bg-[#FAFAFC] rounded-[8px] leading-5">
                        <span className='text-[12px] font-bold'>Orders successfully delivered</span>
                        <span className='text-[#202020] text-[20px] font-bold leading-5'>100%</span>
                    </div>
                    <div
                        className="flex items-center justify-between p-[12px] bg-[#FAFAFC] rounded-[8px] leading-5">
                        <div className='flex'>
                            <span className='mr-[4px] text-[12px] font-bold'>Orders delivered on time</span>
                            <Image src={ info } alt="bigStar" width={ 18 } height={ 18 }/>
                        </div>
                        <span className='text-[#202020] text-[20px] font-bold mr-[4x] leading-5'>100%</span>
                    </div>
                    <div
                        className="flex items-center justify-between p-[12px] bg-[#FAFAFC] rounded-[8px] leading-5">
                        <span className='text-[12px] font-bold'>Repeat orders</span>
                        <span className='text-[#202020] text-[20px] font-bold leading-5'>55%</span>
                    </div>
                    <div
                        className="flex items-center justify-between p-[12px] bg-[#FAFAFC] rounded-[8px] leading-5 gap-16">
                        <span className='text-[12px] font-bold'>Orders successfully delivered</span>
                        <span className='text-[#202020] text-[20px] font-bold'>20588</span>
                    </div>
                    <div
                        className="flex items-center justify-between p-[12px] bg-[#FAFAFC] rounded-[8px] leading-5">
                        <span className='text-[12px] font-bold'>Feedback received</span>
                        <span className='text-[#202020] text-[20px] font-bold'>16360</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex space-x-[5.2px]'>
                        <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                        <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                        <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                        <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                        <div className='w-[38px] h-[38px] bg-[#9CA5B3] rounded-[24px]'></div>
                    </div>
                    <button className="text-[#9CA5B3] font-bold">Show all<br/> awards (20)</button>
                </div>
            </div>
        </div>
    );
}

export default Rating;