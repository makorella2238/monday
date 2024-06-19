import profile_verification from '../../../../../public/pricesForServices/profile/profile_verification.svg'
import Image from 'next/image';

function Title() {
    return (
        <div>
            <div className='flex justify-center sm:justify-start gap-0.5 mb-[3px]'>
                <p className="text-[32px] font-bold text-[#202020] mr-[4px] leading-10">James Kilroy</p>
                <Image src={ profile_verification } alt="verification" width={ 24 } height={ 24 }/>
            </div>
            <p className="text-[#202020] text-[16px] sm:text-[20px] font-bold leading-7 mb-[15px] text-center sm:text-left">Web Developer, Professional Linkbuilder</p>
            <div className="flex items-center justify-center sm:justify-start space-x-[5px] text-green-500 mb-[22px]">
                <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                <span className="text-[14px] font-bold leading-5 text-[#575E6A]">Online</span>
            </div>
        </div>
    );
}

export default Title;