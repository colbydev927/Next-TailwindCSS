
// import { vw } from "../config"
import Image from 'next/image';
export default function LandingFooter() {
    return (
        <>
            <div className='footer pb-12'>
                <div className=" min-h-[15vw] flex flex-col justify-center items-center">
                    <div className="hole"></div>
                    <h1 style={{ fontSize: '30px' }} className='mt-12 font-semibold text-center text-white'>
                        TranscriptSheet
                    </h1>
                    <p className='landingfooter-p'>Lorem ipsum dolor sit amet, consecteur adipiscing elit. At porttitor dui leo suscipit vitae vehicula massa adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At porttitor dui leo suscript vitae vehicula massa adipiscing.</p>
                    <div className='mt-16 flex justify-center'>
                        <span style={{ fontSize: '20px' }} className='m-4 text-white'>
                            Company
                        </span>
                        <span style={{ fontSize: '20px' }} className='m-4 text-white'>
                            FAQ
                        </span>
                        <span style={{ fontSize: '20px' }} className='m-4 text-white'>
                            Contact
                        </span>
                        <span style={{ fontSize: '20px' }} className='m-4 text-white'>
                            Login
                        </span>
                    </div>


                    <hr className="w-[85vw] border-gray-33"></hr>
                </div>
                <div className='flex justify-start ml-[7vw] mr-[7vw] mt-[2vw] justify-between'>
                    <div>
                        <span style={{ fontSize: '18px' }} className='text-white'>
                            Privacy policy
                        </span>
                        <span style={{ fontSize: '18px' }} className='ml-[5vw] text-white'>
                            Conditions
                        </span>
                    </div>
                    <div>
                        <span style={{ fontSize: '18px' }} className='text-white'>
                            Lorem ipsum dolor sit amet
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}