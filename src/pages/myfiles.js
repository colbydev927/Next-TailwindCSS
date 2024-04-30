
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { InProgress } from 'grommet-icons';


export default function Payment() {

    const onClickNewFolderBtn = () => {

    }
    
    const files = [
        {
            name: 'Recording N232',
            uploaded: '23 Aug, 2023',
            action: true,
            status: 'completed'
        },
        {
            name: 'Recording fr32',
            uploaded: '23 Aug, 2023',
            action: true,
            status: 'completed'
        },
        {
            name: 'Recording 532',
            uploaded: '23 Aug, 2023',
            action: false,
            status: 'progress'
        },
        {
            name: 'Recording 5r4',
            uploaded: '23 Aug, 2023',
            action: true,
            status: 'completed'
        },
        {
            name: 'Recording d34',
            uploaded: '23 Aug, 2023',
            action: true,
            status: 'completed'
        },
        {
            name: 'Recording N64',
            uploaded: '23 Aug, 2023',
            action: false,
            status: 'failed'
        },
        {
            name: 'Recording N223',
            uploaded: '23 Aug, 2023',
            action: true,
            status: 'completed'
        }
    ]

    return (
        <main>
            <div style={{ height: '100vh' }}>
                <Header />
                <div className="ml-[20.01vw] mr-[7.52vw] mb-[59.8vh] mt-[9.26vh] pl-[30px] pr-[30px] rounded-[20px] border-[#E0E7ED] border-2 shadow-lg">
                    <div className='flex mt-[26px] mb-[30px] lg:justify-between lg:flex-row lg:items-center  sm:flex-col sm:items-start responsive'>
                        <div className='flex items-center responsive-myfiles-font'>
                            <h1 className='mr-[7px] text-[30px]'>
                                My Files
                            </h1>
                            <span>
                                1 member
                            </span>
                        </div>
                        <div className='flex lg:flex-row lg:items-center md:items-center md:flex-row sm:flex-col sm:items-center responsive'>
                            <span className='text-[16px] text-[blue]'>
                                <a onClick={onClickNewFolderBtn}>+New Folder</a>
                            </span>
                            <div className='lg:ml-[2.13vw] lg:mt-0 md:ml-[2.13vw] md:mt-0 sm:ml-0 sm:mt-5'>
                                <div class="relative">
                                    <input className='pl-[30px] lg:w-[16.41vw] md:w-full sm:w-[60vw] h-[60px] border-2 border-[#999999] rounded-[110px]' placeholder='Search' />

                                    {/* <input type="text" placeholder=" " class="pl-8 pr-4 py-2 border border-gray-300 rounded-lg" /> */}
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <SearchOutlined />
                                    </div>
                                </div>
                            </div>
                            <div className='lg:ml-[1.56vw] lg:mt-0 md:ml-[1.56vw] md:mt-0 sm:ml-0 sm:mt-5'>
                                <button className="lg:ml-[30px] pt-[1.38vw] pb-[1.38vw] pl-[3.33vw] pr-[3.33vw] text-white lg:text-[20px] md:text-[16px] bg-blue-500 rounded-[110px] border-2 border-blue hover:bg-blue-300">
                                    Place New Order
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-x-auto lg:overflow-x-hidden sm:overflow-x-scroll'>
                    <table className="min-w-full rounded-[10px] border-2 border-gray-100 ">
                        <thead className='h-[71px] bg-gray-100 rounded-[10px] border-2 border-gray-100'>
                            <tr className='lg:text-[16px]'>
                                <th className="px-2 py-3 w-[60%] text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-2 py-3 w-[15%] text-center font-medium text-gray-500 uppercase tracking-wider">Uploaded</th>
                                <th className="px-2 py-3 w-[15%] text-center font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                <th className="px-2 py-3 w-[20%] text-center font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                files.map((item, index) => {
                                    return (
                                    <tr className='h-[84px] lg:text-[15px]' key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.uploaded}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.action ? (
                                                <button className="pt-2 pb-2 pl-3 pr-3 text-white text-[16px] bg-blue-500 rounded-[110px] border-2 border-blue hover:bg-blue-300">
                                                <SaveAltIcon /> Download
                                            </button>
                                            ) : ('---')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                item.status === 'completed' ? (
                                                    <span className='text-[18px] text-[#31990D] leading-[18px]'><i className='icon-check'></i> Complete</span>
                                                ) : (
                                                    item.status === 'failed' ? (
                                                        <span className='flex text-[18px] text-[#EB0000] leading-[18px]'>
                                                            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                                                                <path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22" stroke="#EB0000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 30L41 42" stroke="#EB0000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 30L29 42" stroke="#EB0000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 4V14H40" stroke="#EB0000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg> Failed</span>
                                                    ) : (
                                                        <span className='text-[18px] text-[#EF8203] leading-[18px]'><i className="fas fa-hourglass-half"></i> In Progress</span>
                                                    )
                                                )
                                            }
                                        </td>
                                    </tr>
                                )})
                            }
                        </tbody>
                    </table>
                    </div>
                    <div className='pb-[30px] pt-[30px] pr-[1.56vw] pl-[1.56vw] flex lg:justify-between lg:flex-row sm:flex-col min-w-full rounded-br-[10px] rounded-bl-[10px] border-2 border-top-0 border-gray-100 responsive-pagination '>
                        <span className='lg:mb-0 sm:mb-5'>Showing 1 to 25 of 56 results</span>
                        <div>
                            <span>Show</span>
                            <select defaultValue={23} className='pl-1 ml-5 mr-5 w-[70px] h-[30px] rounded-[10px] border-2 border-[#E0E7ED]'>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                                <option value={14}>14</option>
                                <option value={15}>15</option>
                                <option value={16}>16</option>
                                <option value={17}>17</option>
                                <option value={18}>18</option>
                                <option value={19}>19</option>
                                <option value={20}>20</option>
                                <option value={21}>21</option>
                                <option value={22}>22</option>
                                <option value={23}>23</option>
                                <option value={24}>24</option>
                            </select>
                            <span>entities</span>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    )
}
