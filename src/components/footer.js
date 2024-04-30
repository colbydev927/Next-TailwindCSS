
// import { vw } from "../config"
import Image from 'next/image';
export default function Footer() {
    return (
        <>
            <div className='footer pb-12'>
                <div className=" min-h-[15vw] flex flex-col justify-center items-center">
                    <div className="hole"></div>
                    <h1 className='lg:text-[30px] xs:text-[15px] mt-12 font-semibold text-center text-white'>
                        TranscriptSheet
                    </h1>
                    <div className='mt-16 flex justify-center'>
                        <span className='lg:text-[20px] m-4 text-white'>
                            Company
                        </span>
                        <span className='lg:text-[20px] m-4 text-white'>
                            FAQ
                        </span>
                        <span className='lg:text-[20px] m-4 text-white'>
                            Contact
                        </span>
                        <span className='lg:text-[20px] m-4 text-white'>
                            Login
                        </span>
                    </div>
                    <hr style={{ backgroundColor: 'black' }} className="w-[85vw] border-white-33"></hr>
                </div>
                <div className='flex justify-start'>
                    <span className='lg-text[18px] ml-[5vw] mt-6 text-white'>
                        Privacy policy
                    </span>
                    <span className='lg-text[18px] ml-[5vw] mt-6 text-white'>
                        Conditions
                    </span>
                </div>  
            </div>
        </>
    )
}