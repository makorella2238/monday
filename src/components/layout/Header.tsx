import Image from "next/image";
import profilePhoto from '@/../public/header/profile.svg';
import languageIcon from '@/../public/header/language.svg';
import favoriteIcon from '@/../public/header/favorite.svg';
import cartIcon from '@/../public/header/cart.svg';
import messageIcon from '@/../public/header/message.svg';
import notificationIcon from '@/../public/header/notification.svg';
import emptyWalletIcon from '@/../public/header/empty-wallet.svg';
import downArrIcon from '@/../public/header/down-ar.svg';
import downArrLan from '@/../public/header/arr-down.svg';
import burger from '@/../public/header/burger.svg';
import SearchInput from "@/components/ui/PricesForServices/SearchInput";

const Header = () => {
    return (
        <header className="bg-white shadow-sm pt-[47px] sm:pt-[33px]">
            <div className="mx-auto px-3 sm:px-[33px] pb-[20px] flex items-center justify-between">
                <Image className='sm:hidden mr-1' src={ burger } alt='downArrLan' width={ 26 }
                       height={ 40 }/>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-[14px] sm:text-[16px] mr-1 sm:mr-2.5 leading-[21px]">MONDAY</span>
                    <div className="flex items-center gap-2 sm:gap-[8px]">
                        <div className="relative bg-[#FAFAFC] py-2 sm:py-[10px] pl-2 pr-1 sm:px-[6.5px] rounded-[12px]">
                            <div className="flex items-center text-gray-500">
                                <Image className='mr-1 sm:mr-[2px]' src={ languageIcon } alt='languageIcon' width={ 16 }
                                       height={ 16 }/>
                                <span className="mr-[6px] sm:mr-[10px] text-[12px] sm:text-[16px] text-[#B7C3D6]">UZ</span>
                                <Image src={ downArrLan } alt='downArrLan' width={ 9 }
                                       height={ 4 }/>
                            </div>
                        </div>
                        <SearchInput/>
                    </div>
                </div>
                <div className="flex items-center">
                    <nav className="hidden sm:flex gap-[25px]">
                        <a href="#" className="text-[#9CA5B3]">Orders</a>
                        <a href="#" className="text-[#9CA5B3]">Projects</a>
                        <a href="#" className="text-[#9CA5B3]">Sellers</a>
                        <div className='flex gap-[5px]'>
                            <Image src={ favoriteIcon } alt='favoriteIcon' width={ 18 } height={ 18 }/>
                            <a href="#" className="text-[#9CA5B3]">Favorites</a>
                        </div>
                    </nav>
                    <div className='sm:hidden '>
                        <Image src={ favoriteIcon } alt='favoriteIcon' width={ 18 } height={ 18 }/>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-[5px] ml-4 sm:ml-[30px] mr-4 sm:mr-[55px]">
                        <a href="#" className="relative">
                            <Image className='sm:m-[8px]' src={ cartIcon } alt='cartIcon' width={ 18 }
                                   height={ 18 }/>
                            <span
                                className="hidden sm:flex absolute top-[2px] right-0  items-center justify-center w-[14px] h-[14px] text-[9px] font-extrabold text-white bg-[#4790FF] rounded-[100px]">
                               2
                             </span>
                        </a>
                        <a href="#" className="relative hidden sm:block">
                            <Image className='m-2 sm:m-[8px]' src={ messageIcon } alt='messageIcon' width={ 18 }
                                   height={ 18 }/>
                            <span
                                className="absolute top-[3px] right-0 flex items-center justify-center w-[17px] h-[14px] text-[9px] font-extrabold text-white bg-[#FF8E8E] rounded-[100px]">
                             12
                            </span>
                        </a>
                        <a href="#" className="relative hidden sm:block">
                            <Image className='m-2 sm:m-[8px]' src={ notificationIcon } alt='notificationIcon'
                                   width={ 18 }
                                   height={ 18 }/>
                        </a>
                    </div>

                    <div className='hidden sm:flex items-center justify-end gap-2 sm:gap-[5px]'>
                        <div className='relative'>
                            <Image className='absolute top-0 left-[-28px] rounded-[20px]' src={ emptyWalletIcon }
                                   alt='emptyWalletIcon'
                                   width={ 26 }
                                   height={ 26 }/>
                            <a href="#">
                                <Image src={ profilePhoto } alt='profile' width={ 45 } height={ 45 }
                                       className="rounded-full"/>
                            </a>
                            <span
                                className="absolute bottom-0 right-0 inline-block w-[8px] h-[8px] bg-[#62F94D] border border-solid border-[#fff] rounded-full"></span>
                        </div>
                        <Image src={ downArrIcon } alt='downArrIcon' width={ 9 } height={ 4 }/>
                    </div>
                </div>
            </div>
            <nav className="hidden sm:block mx-[40px]">
                <div className="flex justify-between items-center gap-[6px] text-[16px]">
                <a href="#"
                       className="px-[15.5px] py-[11.5px] text-[16px] mr-6 leading-[21px] border-b-2 border-solid border-[#4790FF] font-medium">Social
                        & SMM</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">SEO</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Copywriting</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Web Development</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Scripts & Telegram Bots</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Logotypes & Branding</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Web & Mobile Design</a>
                    <a href="#" className="text-[#9CA5B3] px-[15.5px] py-[11.5px]">Scripts & Bots</a>
                    <div>
                        <svg width="1" height="27" viewBox="0 0 1 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.6" x1="0.5" y1="0.5" x2="0.499999" y2="26.5" stroke="#9CA5B3"/>
                        </svg>
                    </div>
                    <div className="relative">
                        <button className="flex items-center text-[#9CA5B3] px-[15.5px] py-[11.5px]">
                            <span className="mr-1">All Services</span>
                            <Image src={ downArrIcon } alt='searchIcon' width={ 9 } height={ 4 }/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;