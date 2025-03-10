import { useState } from "react";
import Button from "./components/Button";
import { FooterComp } from "./components/FooterComp";

interface ContactPageProps {
    name: string;
    email: string;
    message: string;
    mobileNumber: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactPageProps>({
        name: '',
        email: '',
        message: '',
        mobileNumber: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    function Check():string{
        if(formData.email == ''){
            return 'email not present';
        }else if(formData.message == ''){
            return 'message not present';
        }else if(formData.mobileNumber == ''){
            return 'mobileNumber not present';
        }else if(formData.name == ''){
            return 'name not present';
        }else{
            return '';
        }
    }
    const whatsappMessage = `Hello from ${formData.name}. My email is ${formData.email} and my mobile number is ${formData.mobileNumber}. ${formData.message}`;

    return (
        <div>
            <div className=" flex flex-col justify-center items-center h-screen">
                <div className="w-full max-w-7xl p-6 bg-gray-100">
                    <div className="flex justify-center">
                        <div className="text-3xl pt-5 mb-5 text-gray-600">Connect With Us</div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-gray-600">You're welcome to contact us at any time. We're ready to assist and excited to connect with you soon!</div>
                    </div>
                    <div className="h-full w-full">
                        <Wrapper labelName="First Name" name="name" value={formData.name} onChange={handleInputChange} />
                        <Wrapper labelName="Email Address" name="email" value={formData.email} onChange={handleInputChange} />
                        <Wrapper labelName="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
                        <Wrapper labelName="Message" name="message" value={formData.message} onChange={handleInputChange} />
                        <div className="flex justify-center">
                            <div onClick={(e) => {
                                e.preventDefault();
                                const whatsappNumber = "9110908363"; // Replace with your WhatsApp Business number
                                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                                console.log(formData)
                                const returnValue = Check();
                                console.log(returnValue)
                                if(returnValue.length > 0){
                                    alert(returnValue);
                                }else{
                                    window.open(url,'_blank');
                                }
                                
                            }} className="mb-6">
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

interface WrapperProps {
    labelName: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Wrapper({ labelName, name, value, onChange }: WrapperProps) {
    return (
        <div className="flex justify-center">
            <div className="mb-6 w-6xl mt-4  flex justify-center items-center">
                <label className="block mb-2 text-sm font-medium  w-32 text-gray-900 dark:text-gray-600">{labelName}</label>
                <input type="text" id={name} name={name} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 lg:w-6xl focus:border-blue-500 block p-2.5 text-black" placeholder={labelName} value={value} onChange={onChange} required />
            </div>
        </div>
    )
}
