import {AllCards} from "./components/Card";
import { FooterComp } from "./components/FooterComp";
import { Hero } from "./components/Hero";
import Journey from "./components/Journey";

export default function Landing(){

    return (
        <>
            <Hero></Hero>
            <AllCards></AllCards>
            <Journey></Journey>
            <FooterComp></FooterComp>
            <div className="fixed flex justify-center items-center bottom-5 right-5 ">
                <div className="mr-2 text-gray-600 bg-blue-50 font-bold">Want to chat?</div>
                <div onClick={() => {window.open('https://wa.me/9889259475')}} className=" h-14 w-14 rounded-full bg-green-500 cursor-pointer transition-transform duration-400 hover:scale-120"><div className="flex justify-center items-center pt-0.5"><i className='bx bxl-whatsapp text-white bx-lg'></i></div></div>
            </div>
        </>
    )
}