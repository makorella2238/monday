import Image from "next/image";
import verificationIcon from '@/../public/footer/verification.svg'
import starIcon from '@/../public/footer/star.svg'
import joinIcon from '@/../public/footer/join.svg'
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className="bg-[#202020] text-white pt-[125px] pb-[70px] px-[60px]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        <h5 className="text-[18px] font-bold mb-4">About Monday</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className={ s.footerText }>About the project</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Agency contract</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[18px] font-bold mb-4">Help</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Service rules</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Question answer</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[18px] font-bold mb-4">Useful</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className={ s.footerText }>For customers</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>For performers</a></li>
                            <li className="flex mb-2">
                                <a href="#" className={ s.footerText }>PRO account</a>
                                <div className="flex gap-[3px] ml-[8px] px-[8.5px] py-[4.5px] text-xs bg-[#4790FF] rounded-[100px] text-white">
                                    <p>PRO</p>
                                    <Image src={starIcon} alt='starIcon' width={11} height={11}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[18px] font-bold mb-4">Community</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Blog Monday</a></li>
                            <li className="mb-2"><a href="#" className={ s.footerText }>Affiliate program</a></li>
                            <li className="mb-2">
                                <a href="#" className={`${ s.footerText } flex flex-row gap-[5px]`}>
                                    Verification
                                    <Image src={verificationIcon} alt='verificationIcon' width={14} height={14}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-[59px] flex items-center gap-[16px] justify-end">
                    <button
                        className="cursor-auto py-[9.5px] px-[40.5px] border border-white/40 text-white rounded-[12px] transition-all ease-in-out duration-500 text-white/40">Sign In
                    </button>
                    <button
                        className="flex items-center gap-[10px] py-[9px] px-[37.5px] border border-white text-white hover:bg-white hover:text-gray-900 rounded-[12px] transition-all ease-in-out duration-500">
                        <p>Join</p>
                        <Image src={ joinIcon } alt='joinIcon' width={ 16 } height={ 16 }/>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
