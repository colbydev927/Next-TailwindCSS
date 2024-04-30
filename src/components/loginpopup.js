
// import { vw } from "../config"
import Image from 'next/image';
export default function Loginpopup() {
    return (
        <div className="lg:w-[234px] lg:h-[60px] border-2 border-[white] rounded-[110px] ml-[7.8vw] flex justify-between items-center  xs:w-[180px] xs:h-[40px]">
            <div className="lg:rounded-[50px] lg:w-[50px] lg:h-[50px] bg-[white] m-[5px] lg:text-[20px] text-[blue] md:w-[30px] md:h-[30px] md:rounded-[30px] md:text-[12px] responsive-circle-area flex justify-center items-center">
                JL
            </div>
            <div className="flex justify-center" style={{ marginLeft: '10px' }}>
                <span className = "lg:text-[18px] text-white">
                    Jay Logan
                </span>
            </div>
            <a href='#'>
                <Image className='flex justify-end mr-[24px]' src="/component/popup.svg" alt="Footer Background" width={20} height={20}  />
            </a>
        </div>
    )
}