import Image from 'next/image'
import Loginpopup from '@/app/components/loginpopup'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { useRef, useState } from 'react';

export default function Addfile() {

  const divRef = useRef(null);
  const [updatedFiles, setUpdatedFiles] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  const fileExplorerOpen = () => {
    if (divRef.current) {
      divRef.current.click();
    }
    // document.getElementById("fileInput").click();
  }

  const onChangeFileList = (e) => {
    console.log(e.target.files);
    setUpdatedFiles(e.target.files);
  }

  const onClickItem = (file) => {
    setSelectedItem(file);
  }

  return (
    <main>
      <div style={{ height: '100vh' }}>
        <Header />
        <div className="mt-[5.20vw] ml-[17.03vw] mr-[17.03vw] mb-[10.40vw] rounded-[20px] border-[#E0E7ED] border-2 shadow-lg">
          {updatedFiles.length === 0 ? (
            <>
              <div className="mt-6 flex justify-center items-center">
                <h1 className='lg:text-3xl xs:text-[15px] font-bold text-center'>Add File</h1>
                <input ref={divRef} type="file" id="fileInput" onChange={onChangeFileList} multiple style={{ display: 'none' }} />
              </div>
              <div className="drag-drop-area rounded-lg border-2 border-dashed border-blue-500">
                <div className="flex justify-center items-center">
                  <div className="m-auto mt-12 rounded-[50px] border-2 border-grey hover:shadow-lg w-[100px] h-[100px] flex justify-center items-center" >
                    <button onClick={fileExplorerOpen}>
                      <img src="/component/material-symbols_upload.svg" className='lg:w-[50px] xs:w-[20px]' alt="upload" />
                    </button>
                  </div>
                </div>
                <div className="mt-2 mb-10 text-center">
                  <span className="lg:text-[26px] xs:text-[15px] text-[#0145E6]">Click to Upload files</span><br></br>
                  <span>or drag and drop</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <h1 className="mt-[3.64vw] ml-[3.70vw] mb-[2.60vw] lg:text-[40px] sm:text-[20px] line-height-[60px] ">
                  Add File
                </h1>
                <button className="mt-[3.64vw] mr-[3.67vw] mb-[2.60vw] lg:pt-[15px] lg:pb-[15px] lg:pl-[36px] lg:pr-[36px] sm:pt-[7px] sm:pb-[7px] sm:pl-[18px] sm:pr-[18px] text-white lg:text-[20px] sm:text-[12px] bg-blue-500 rounded-[110px] border-2 border-blue hover:bg-blue-300">
                  Upload Files
                </button>
              </div>
              <div className="overflow-x-auto mr-[3.65vw] mb-[3.65vw] ml-[3.65vw] border-2 border-[#F0F4FF] rounded-[10px]">
                <table className="min-w-full divide-y divide-gray-200  responsive-table">
                  <thead className='h-[71px]'>
                    <tr className='text-[16px]'>
                      <th className="px-6 py-3 w-[60%] bg-gray-100 text-left font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 w-[20%] bg-gray-100 text-left font-medium text-gray-500 uppercase tracking-wider">Minutes</th>
                      <th className="px-6 py-3 w-[20%] bg-gray-100 text-center font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.keys(updatedFiles).map((item, index) => {
                      return (
                        <tr className='h-[84px] text-[15px] hover:font-semibold text-[18px] cursor-pointer' key={ index } onClick={() => {
                          onClickItem(updatedFiles[item]);
                        }}>
                          <td className="px-6 py-4 whitespace-nowrap">{ updatedFiles[item].name }</td>
                          <td className="px-6 py-4 whitespace-nowrap">1</td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">0.25$</td>
                        </tr>
                      )
                    })}
                    <tr className='h-[140px]'>
                      <td></td>
                      <td></td>
                      <td>
                        <div className='flex justify-start'>
                          <button className="pt-[15px] pb-[15px] pl-[36px] pr-[36px] text-white text-[20px] bg-blue-500 rounded-[110px] border-2 border-blue hover:bg-blue-300">
                            Checkout
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

        </div>
        <Footer />
      </div>
    </main>
  )
}
