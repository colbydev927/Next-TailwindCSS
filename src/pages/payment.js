
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { useRef, useState } from 'react';

export default function Payment() {


    return (
        <main>
            <div style={{ height: '100vh' }}>
                <Header />
                <div className="mt-[5.20vw] ml-[17.03vw] mr-[17.03vw] mb-[10.40vw] rounded-[20px] border-[#E0E7ED] border-2 shadow-lg">
                    <div className='mr-[3.64vw] ml-[3.64vw]'>
                        <div className='mt-[6.48vh] mb-[3.24vh] flex items-center justify-between'>
                            <div className='flex items-center'>
                                <h1 className='lg:text-[40px] sm:text-[15px] font-semibold'>
                                    Payment Details
                                </h1>
                                <span className='text-[16px] ml-[16px]'>
                                    1 File (Edit)
                                </span>
                            </div>
                            <h1 className='lg:text-[40px] sm:text-[20px] text-[#0145E6] font-bold '>
                                $0.25
                            </h1>
                        </div>
                        <hr className='bg-[#F0F4FF] mb-[3.10vw]' />
                        <span className='text-[20px]'>
                            Card number*
                        </span>
                        <div className='w-full border-2 border-[#F0F4FF] rounded-[10px] flex justify-between'>
                            <input className='p-5 outline-none w-[60%]' value='1323 1232 1232 1233' />
                            <div className='flex mr-[2vw]'>
                                <img src="/component/card1.svg" alt="card1" className='mr-[0.5vw] responsive-card' />
                                <img src="/component/card2.svg" alt="card2" className='mr-[0.5vw] responsive-card' />
                                <img src="/component/card3.svg" alt="card3" className='mr-[0.5vw] responsive-card' />
                                <img src="/component/card4.svg" alt="card4" className='mr-[0.5vw] responsive-card' />
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 gap-1 md:flex-row mb-[30px] w-full'>
                            <div>
                                <h1>Expiration*</h1>
                                <input className='p-[20px] h-[60px] w-[full] border-2 border-[#F0F4FF] rounded-[10px]' placeholder='MM/YY'/>
                                    
                            </div>
                            <div>
                                <h1>CVC*</h1>
                                <div className='border-2 border-[#F0F4FF] rounded-[10px] flex justify-between'>
                                    <input className='p-[20px] h-[60px] w-[100px] outline-none' placeholder='CVC' />
                                    {/* <span className='text-[16px]'>CVC</span> */}
                                    <img src="/component/solar_card-linear.svg" alt='solar_card-linear' className='mr-[10px]' />
                                </div>
                            </div>
                            <div>
                                <h1>Zip Code*</h1>
                                <input className='p-[20px] h-[60px] outline-none w-full border-2 border-[#F0F4FF] rounded-[10px]' />
                            </div>
                        </div>
                        <hr className='mt-[50px] bg-[#F0F4FF]' />
                        <div className='flex justify-end'>
                        <button className='mt-[40px] mb-[56px] pt-[1.38vw] pb-[1.38vw] pl-[3.33vw] pr-[3.33vw] text-white lg:text-[20px] md:text-[16px] bg-blue-500 rounded-[110px] border-2 border-blue hover:bg-blue-300'>
                            Place order
                        </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}
