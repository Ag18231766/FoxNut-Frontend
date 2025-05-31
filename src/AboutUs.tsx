import { FooterComp } from "./components/FooterComp";

export default function About(){

    return (
        <div>
            <div className="flex justify-center">
                <div className="h-full w-7xl bg-gray-100 ">
                    <div className="flex justify-center">
                        <div className="text-4xl font-['Chewy'] lg:text-6xl pt-5 mb-5 text-gray-600">About FOXNAMI</div>
                    </div>
                    <div className="text-3xl text-center font-['Chewy'] mt-16 mb-12  text-gray-600">Who We Are</div>
                    <div className="grid grid-cols-1  text-center lg:grid-cols-2">
                        <div className="flex justify-center"><img src="fig1.jpeg" className="h-80 w-96 lg:ml-48"></img></div>
                        <div className="mt-10 text-xl text-gray-600 lg:mt-0">
                            At FOXNAMI, we are passionate about bringing the nutritious goodness of makhana to your doorstep. Based in Kishoraganj, Ranchi, Bihar, we are deeply connected to the rich agricultural heritage of the region. Our journey began with a simple yet profound mission: to share the health benefits and versatility of makhana with the world. We work closely with local farmers to source high-quality makhana, which we then blend with a variety of spices and flavors to create delicious and healthy snacks. Our commitment to quality, sustainability, and community empowerment drives everything we do. We are excited to introduce you to our range of products, each carefully crafted to enhance your snacking experience while supporting the local farming community.
                        </div>
                    </div>
                    <div className="text-3xl text-center font-['Chewy'] mt-16 mb-12  text-gray-600">Building A Healthier Future</div>

                    <div className="grid grid-cols-1  text-center lg:grid-cols-2 ">
                        <div className="flex justify-center"><img src="fig5.jpeg" className="h-80 w-96 lg:ml-48"></img></div>
                        <div className="mt-10 text-xl text-gray-600 lg:mt-0">
                            At FOXNAMI, we believe that healthy living starts with mindful eating. Our vision is to contribute to a healthier future by making makhana-based snacks accessible to everyone. Makhana, or fox nuts, are not only a tasty treat but also a superfood packed with nutrients and antioxidants. By choosing our products, you are not only nourishing your body but also supporting sustainable farming practices and the well-being of local farmers. We are dedicated to innovation, constantly exploring new flavors and recipes that showcase the versatility of makhana. Our goal is to inspire healthier communities by connecting people to real, wholesome food that is both delicious and nutritious. Join us on this journey as we redefine snacking with a focus on health, sustainability, and community empowerment.
                        </div>
                    </div>
                    
                            
                </div>
            </div>
                <FooterComp></FooterComp>
        </div>
    )
}



