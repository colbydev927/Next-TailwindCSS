import Image from 'next/image'
import { Inter } from 'next/font/google'
import LandingFooter from '@/components/landingfooter';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <div className="header_background w-full h-[500px] lg:h-[42vw] xl:h-[39vw] md:h-[46vw] sm:h-[39vw]">
                <div className="flex justify-between pl-[7vw] pr-[7.7vw] md:p-[1vw 7vw] h-[6.1vw]">
                    <div className=" flex justify-start items-center text-white font-bold text-center text-[17px] md:text-3xl lg:text-3xl sm:text-xl 2xl:text-[30px]">TranscriptSheet</div>
                    {/* <div className="col-span-4"></div> */}

                    <div className="grid grid-cols-4 gap-4 text-white text-center m-[1vw] font-sans font-normal text-[10px] lg:text-[17px]  md:text-[17px] xl:text-[20px] xs:text-[8px] xs:w-[173px] md:w-[300px] lg:w-[600px] xl:w-[600px] 2xl:w-[620px] 2xl:p-[7px]">
                        <button className="col-span-1 flex justify-center items-center">
                            <a>Contact</a>
                        </button>
                        <button className="col-span-1 flex justify-center items-center">
                            <a>Try Now</a>
                        </button>
                        <button className="col-span-1 navbar_btn flex justify-center items-center">
                            <a>Sign Up</a>
                        </button>
                        <button className="col-span-1 float-right flex justify-center items-center">
                            <a className="underline hover:no-underline">Sign In</a>
                        </button>
                    </div>
                </div>
                <hr className='header-hr' />
                <div className="sm:grid sm:grid-cols-2 sm:gap-4  navbar">
                    <div className="sm:col-span-1">
                        <div className='content-header'>
                            <h2 className='font-size-content'>Get speech to text transcripts in spreadsheet format</h2>
                        </div>
                        <div className='xs:w-[83vw] xs:text-center sm:w-[35vw] sm:text-left'>
                            <h5 className='font-size-subcontent'>Best In Class Speech Recognition Available In .csv and .xls</h5>
                        </div>
                        <div className=' xs:pl-[120px] sm:pl-[0px]' >
                            <div className=' rectangle'>
                                <div className='rectangle-p flex justify-start items-center'><p>$0.25 per minute</p></div>
                            </div>
                        </div>

                        <div className='drag-file flex justify-start items-center'>
                            <p>Drag and drop or select audio/video files</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className='svg-circle' width="2.8vw" height="2.8vw" viewBox="0 0 42 42" fill="none">
                                <circle cx="21" cy="21" r="21" transform="matrix(-1 0 0 1 42 0)" fill="#0145E6" />
                                <path d="M26.144 22.9228L20.477 28.6159C20.2222 28.8889 20.083 29.2509 20.0891 29.6252C20.0951 29.9994 20.2459 30.3567 20.5095 30.6213C20.773 30.8859 21.1287 31.0371 21.5013 31.0429C21.8739 31.0487 22.2341 30.9087 22.5057 30.6524L30.6216 22.5005C30.7553 22.367 30.8614 22.2082 30.9338 22.0333C31.0062 21.8584 31.0435 21.6709 31.0435 21.4815C31.0435 21.2921 31.0062 21.1046 30.9338 20.9297C30.8614 20.7548 30.7553 20.5961 30.6216 20.4625L22.5057 12.3091C22.3733 12.1715 22.215 12.0617 22.04 11.9862C21.865 11.9106 21.6767 11.8709 21.4862 11.8692C21.2957 11.8675 21.1068 11.904 20.9305 11.9765C20.7542 12.0489 20.594 12.156 20.4593 12.2913C20.3246 12.4266 20.218 12.5875 20.1459 12.7647C20.0738 12.9418 20.0375 13.1316 20.0391 13.323C20.0408 13.5143 20.0803 13.7035 20.1555 13.8793C20.2307 14.0551 20.34 14.2142 20.477 14.3471L26.144 20.0402H12.3912C12.0107 20.0402 11.6458 20.1921 11.3767 20.4624C11.1077 20.7327 10.9565 21.0992 10.9565 21.4815C10.9565 21.8638 11.1077 22.2304 11.3767 22.5006C11.6458 22.7709 12.0107 22.9228 12.3912 22.9228H26.144Z" fill="white" />
                            </svg>
                        </div>
                        <div className='example-div'>
                            <p className='underline'>See an example</p>
                        </div>
                    </div>
                    <div className="sm:col-span-1 img-content">
                        <img className='img-position rounded-tl-3xl rounded-tr-3xl' src='/content.png' />
                        <img className='img-ellipse' src='/Ellipse125.png' />
                        <img className='img-points' src='/points.png' />
                        <img className='img-half-ellipse' src='/Ellipse126.png' />

                    </div>
                </div>
            </div>

            <div className='first-body-info'>
                <div className='first-sub-body'>
                    <div className='sub-body-h1'>
                        <h1 >
                            Empowering researchers by transforming interview and focus group data into insightful automated reports
                        </h1>
                    </div>

                    <div className='sub-body-card sm:grid sm:grid-cols-3 sm:gap-4'>
                        <div className='sm:col-span-1 sub-card'>
                            <div className='img-position-avatar'>
                                <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                                <img src='upload.svg' className='img-avatar' />
                            </div>
                            <div className='sub-body-card-d1'>
                                <p>Upload</p>
                            </div>
                            <div className='sub-body-card-d2'>
                                <p>Upload any audio, video, or an existing transcript in txt or docx</p>
                            </div>

                        </div>
                        <div className='sm:col-span-1 sub-card'>
                            <div className='img-position-avatar'>
                                <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                                <img src='uis_process.svg' className='img-avatar' />
                            </div>
                            <div className='sub-body-card-d1'>
                                <p>Process</p>
                            </div>
                            <div className='sub-body-card-d2'>
                                <p>Files are transcribed and processed into a spreadsheet.</p>
                            </div>

                        </div>

                        <div className='sm:col-span-1 sub-card'>
                            <div className='img-position-avatar'>
                                <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                                <img src='material-symbols_download.svg' className='img-avatar' />
                            </div>
                            <div className='sub-body-card-d1'>
                                <p>Download</p>
                            </div>
                            <div className='sub-body-card-d2'>
                                <p>Export you transcript as a csv or xls spreadsheet.</p>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>

                    <div className='sub-body-card2 grid grid-cols-3 gap-4'>
                        <div className='col-span-1 '></div>
                        <div className='col-span-1 flex justify-center items-center'>
                            <button className='order-button'>Place an Order</button>
                        </div>
                        <div className='col-span-1'></div>

                    </div>

                </div>

                <div className='first-sub-body2'>
                    <div className='sub-body-h1'>
                        <h1 >
                            Transcripts To Spreadsheets
                        </h1>

                    </div>
                    <div className='sub-body-p'>
                        <p className='flex justify-center'>Get you conversations automatically formatted in easy-to-use Spreadsheets, helping you find answers and organize your work faster.</p>
                    </div>
                    <div className='ml-[7.82vw] mr-[7.82vw] mt-[3.82vw]'>
                        <img src='xsl.PNG' />
                    </div>
                    <div className='sub-body-h1 mt-[120px]'>
                        <h1 >
                            Transcripts To Feature
                        </h1>

                    </div>
                    <div className='sub-body-card2 sm:grid sm:grid-cols-2 sm:gap-8'>
                    <div className='sm:col-span-1 sub-card flex'>
              <div className='relative inline-flex'>
                <img src='Ellipse 3.svg' width={'100px'} height={'100px'} alt="Image" />
                <img src='material-symbols_drag-click.svg' className='img-avatar-spread' width={'76px'} height={'76px'} />
              </div>
              <div className='pl-[14px]'>
                <div className='mt-6 font-sans xs:text-lg sm:text-2xl font-bold'>
                  <p>Easy to use</p>
                </div>
                <div className='mt-2 mr-2 xs:text-[12px] text-base font-sans'>
                  <ul class="list-inside sm:text-[20px]">
                    <li class="list-disc list-blue">
                      $0.25 per audio minute (average 60 words)
                    </li>
                    <li class="list-disc list-red">No minimums</li>
                    <li class="list-disc list-red">No subscription required.</li>
                  </ul>
                  {/* <p>Upload any audio, video, or an existing transcript in txt or docx</p> */}
                </div>
              </div>


            </div>
            <div className='sm:col-span-1 sub-card flex'>
              <div className='relative inline-flex'>
                <img src='Ellipse 3.svg' width={'100px'} height={'100px'} alt="Image" />
                <img src='ph_files.svg' className='img-avatar-spread' width={'76px'} height={'76px'} />
              </div>
              <div  className='pl-[14px]'>
                <div className='mt-6 font-sans xs:text-lg sm:text-2xl font-bold'>
                  <p>Quick turnaround</p>
                </div>
                <div className='mt-2 mr-2 text-base font-sans'>
                  <ul class="list-inside xs:text-[13px] sm:text-[20px]">
                    <li class="list-disc list-blue">
                      Transcribed in 5 minutes or less
                    </li>
                    <li class="list-disc list-red">Short files delivered faster</li>
                    <li class="list-disc list-red">Multiple download options.</li>
                  </ul>
                  {/* <p>Upload any audio, video, or an existing transcript in txt or docx</p> */}
                </div>
              </div>

            </div>

                    </div>

                    <div className='sub-body-card2 grid grid-cols-3 gap-4'>
                        <div className='col-span-1 '></div>


                    </div>

                </div>



            </div>

            <div className='third-sub-body2'>
                <div className='sub-body-h1'>
                    <h1 >
                        What We Offer
                    </h1>

                </div>
                <div className='sub-body-p3 '>
                    <p className='flex justify-center'>Start by uploading an existing transcript, or use our industry best speech-to-text and download your transcript in multiple formats.</p>
                </div>
                <div className='sub-body-card2 grid grid-cols-2 gap-4 '>
                    <div className='col-span-1 sub-card'>
                        <div className='img-position-avatar'>
                            <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                            <img src='material-symbols_speech-to-text.svg' className='img-avatar' />
                        </div>
                        <div className='sub-body-card-d1'>
                            <p>Best in class speech to text transcription</p>
                        </div>
                        <div className='sub-body-card-d2'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ullamco laboris nisi ut aliquip ex ea commo.
                            </p>

                        </div>
                        <div className='mt-[10px] mb-[22px] text-[blue]'>
                            <a >Learn more</a>
                        </div>
                    </div>
                    <div className='col-span-1 sub-card'>
                        <div className='img-position-avatar'>
                            <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                            <img src='fluent_speaker-2-24-regular.svg' className='img-avatar' />
                        </div>
                        <div className='sub-body-card-d1'>
                            <p>Speaker identification</p>
                        </div>
                        <div className='sub-body-card-d2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ullamco laboris nisi ut aliquip ex ea commo.</p>
                        </div>
                        <div className='mt-[10px] mb-[22px] text-[blue]'>
                            <a >Learn more</a>
                        </div>
                    </div>

                </div>
                <div className='sub-body-card3 grid grid-cols-2 gap-4 '>
                    <div className='col-span-1 sub-card'>
                        <div className='img-position-avatar'>
                            <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                            <img src='carbon_time.svg' className='img-avatar' />
                        </div>
                        <div className='sub-body-card-d1'>
                            <p>Speaker timestamps</p>
                        </div>
                        <div className='sub-body-card-d2'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerccitation ullamco laboris nisi ut ullamco laboris nisi ut aliquip ex ea commo.
                            </p>
                        </div>
                        <div className='mt-[10px] mb-[22px] text-[blue]'>
                            <a >Learn more</a>
                        </div>
                    </div>
                    <div className='col-span-1 sub-card'>
                        <div className='img-position-avatar'>
                            <img src='Ellipse 3.svg' width={'100px'} height={'100px'} />
                            <img src='lucide_files.svg' className='img-avatar' />
                        </div>
                        <div className='sub-body-card-d1'>
                            <p>Download in csv, xls, txt, and docx formats</p>
                        </div>
                        <div className='sub-body-card-d2'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ullamco laboris nisi ut aliquip ex ea commo.
                            </p>
                        </div>
                        <div className='mt-[10px] mb-[22px] text-[blue]'>
                            <a >Learn more</a>
                        </div>
                    </div>

                </div>

                <div className='sub-body-card4 grid grid-cols-2 gap-4'>
                    <img className='img-half-ellipse1' src='/Ellipse126.png' />

                </div>

            </div>
            <div className='third-sub-body3'>
                <div className='sm:grid sm:grid-cols-2 sm:gap-4'>
                    <div className='sm:col-span-1'>
                        <img src='/middle1.png' className='img-middle' />
                    </div>
                    <div className='sm:col-span-1 ml-[10px]'>
                        <h1 className='footer-h1'>For Researchers</h1>
                        <p className='footer-p'>
                            Lorem ipsum dolor sit amet, concestetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis atue irure dolor in reprehenderit. ullamco laboris nisi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button className='learn-btn'>Learn more</button>

                    </div>

                </div>
                <img src='Ellipse129.svg' className='img-half-ellipse2' />
            </div>

            <div className='third-sub-body4'>
                <div className='sm:grid sm:grid-cols-2 sm:gap-4'>
                    <div className='sm:col-span-1 '>
                        <h1 className='footer2-h1'>For Journalists</h1>
                        <p className='footer2-p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenerit. ullamco laboris nisi ut alliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                        <button className='learn2-btn'>Learn more</button>
                    </div>
                    <div className='col-span-1 '>
                        <img src='/middle2.png' className='img-middle' />
                    </div>
                </div>
            </div>

            <div className='footer-transform flex justify-center'>
                <div>
                    <h1 className='trans-h1'>Instantly transforms audio and  video transcripts into spreadsheets</h1>
                    <p className='trans-p'>Stop wasting hours sorting through transcripts. Get straight to the insights you need.</p>
                    <button className='start-btn'>Get Started</button>
                </div>
            </div>
            <div className='mt-[7vw]'>
                <LandingFooter />

            </div>


        </main>
    )
}
