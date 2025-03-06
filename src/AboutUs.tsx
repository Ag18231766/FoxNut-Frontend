import { FooterComp } from "./components/FooterComp";

export default function About(){
    return (
        <div>
                    <div className="flex justify-center">
                        <div className="h-full w-7xl mt-6 mb-10 bg-gray-100 ">
                            <div className="flex justify-center">
                                <div className="text-3xl pt-5 mb-5 text-gray-600">Connect With Us</div>
                            </div>
                            <div className="flex justify-center">
                                <div className="text-gray-600">You're welcome to contact us at any time. We're ready to assist and excited to connect with you soon!</div>
                            </div>
                            {/* <div className="h-full w-full">
                                <Wrapper labelName="First Name"></Wrapper>
                                <Wrapper labelName="Email Address"></Wrapper>
                                <Wrapper labelName="Mobile Number"></Wrapper>
                            <div className="flex justify-center">
                                    <div className="mb-6">
                                        <Button></Button>
                                    </div>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                    <FooterComp></FooterComp>
                </div>
    )
}