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
        </>
    )
}