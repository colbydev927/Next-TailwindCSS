
// import { vw } from "../config"
import Image from 'next/image';
import Loginpopup from './loginpopup';
export default function Footer() {
    return (
        <div className="grid grid-cols-2 gap-4 header-navbar flex items-center">
          <div className={`pl-[7.76vw] text-[white] lg:text-[30px] leading-[36px] sm:text-[15px] font-semibold flex justify-start`}>
            <h1>
              TranscriptSheet
            </h1>
          </div>
          <div className='flex justify-end mr-[7.8125vw]'>
            <Loginpopup />
          </div>
        </div>
    )
}