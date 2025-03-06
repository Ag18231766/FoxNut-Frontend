import Button from "./components/Button";
import { FooterComp } from "./components/FooterComp";

export default function ContactPage(){
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
                    <div className="h-full w-full">
                        <Wrapper labelName="First Name"></Wrapper>
                        <Wrapper labelName="Email Address"></Wrapper>
                        <Wrapper labelName="Mobile Number"></Wrapper>
                    <div className="flex justify-center">
                            <div className="mb-6">
                                <Button></Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <FooterComp></FooterComp>
        </div>
    )
}
interface WrapperProps{
    labelName : string;
}


function Wrapper({labelName}:WrapperProps){
    return (
        <div className="flex justify-center">
            <div className="mb-6 w-6xl mt-4  flex justify-center items-center">
                <label className="block mb-2 text-sm font-medium  w-32 text-gray-900 dark:text-gray-600">{labelName}</label>
                <input type="firstName" id="firstName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 lg:w-6xl focus:border-blue-500 block p-2.5 text-black" placeholder={labelName} required />
            </div>
        </div>
    )
}