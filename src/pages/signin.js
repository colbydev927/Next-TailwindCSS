import GoogleLogin from "react-google-login";
import { useRef, useState } from 'react';




export default function SingIn() {
    const googleRef = useRef(null);

    const responseGoogle = () => {

    }
    
    const onClickGoogleLoginBtn = () => {
        googleRef.current?.render();
        // console.log(document.getElementsByTagName('GoogleLogin'));
        // document.getElementsByTagName('GoogleLogin').click();   
    }

    return (
        <main className="flex min-h-screen flex-col">
        <div className="grid lg:grid-cols-2 gap-4 md:flex-row">
            <div className="ml-[7.76vw]">
                <h1 className="mt-[11.01vh] text-[30px] font-semibold">
                    TranscriptSheet
                </h1>
                <h1 className="mt-[5.37vh] lg:text-[34px] sm:text-[20px] font-semibold">
                    Sign Up/Sign In
                </h1>
                <p className="mt-[1.66vh]">
                    To continue, create an account or sign in using Google.
                </p>
                <div className="relative w-[33.12vw] h-[60px] border-2 border-black rounded-[60px] mt-[80px] flex justify-center items-center responsive-google-btn" onClick={onClickGoogleLoginBtn}>
                    <img src='/component/google-icon.png' alt="Google Login" width={32} />
                    <span className="text-[18px] ml-[20px]">
                        Continue with Google
                    </span>
                    <GoogleLogin
                        id="google"
                        clientId="YOUR_CLIENT_ID"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className="custom-google-button"
                    />
                </div>
                {/* <div id='GoogleLogin' class="hidden"> */}
                <div>
                
                </div>
                {/* </div> */}
            </div>
            <div className="h-[100vh] p-[27px] signin-landing-1">
                <div className="bg-gradient h-[100%]">
                <div className="relative z-[-1] signin-landing h-[100%]">
                    <img src="/component/line.svg" className="absolute bottom-[10.09vh] left-[40px]" />
                    <div className="absolute bottom-[11.01vh] left-[66px]">
                        <div className="flex items-center mb-[27px]">
                            <h1 className="lg:text-[45px] sm:text-[20px] font-semibold text-white mr-[9px]">
                                Hey
                            </h1>
                            <img src="/component/highfive.png" className="w-[48px]"/>
                        </div>
                        <h1 className="text-white lg:text-[35px] mb-[8px] sm:text-[15px]">
                            Welcome to
                        </h1>
                        <h1 className="text-[#5092FF] underline lg:text-[35px] sm:text-[15px]">
                            TranscriptSheet
                        </h1>
                    </div>
                    <span className="absolute bottom-[1.38vh] right-[15px] underline text-[#8DAFFF]">
                        English (United Kingdom)
                    </span>
                </div>
                </div>
            </div>
        </div>
        </main>
    )
}