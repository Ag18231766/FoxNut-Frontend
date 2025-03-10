import Carousel from "./Carousal";

export default function Journey(){
    return(
        <div className="lg:grid grid-cols-2 gap-0 mb-0">
            <Carousel slides={['fig5.jpeg','fig2.jpeg','fig3.jpeg','fig4.jpeg']}></Carousel>
            <div className="w-full min-h-screen flex justify-center items-center text-gray-600 p-10">
                <div className="max-w-4xl text-center">
                    <h2 className="text-5xl font-bold mb-6">Our Journey...</h2>
                    <p className="text-lg leading-relaxed">
                    Nestled in the fertile lands of Bihar, where the sacred rivers nourish the soil, grows a hidden gem of nature—Makhana (Foxnut). 
                    For generations, the farmers of Bihar have dedicated themselves to cultivating these delicate yet nutrient-rich seeds, carefully 
                    harvesting them from the serene waters of the Mithila region. More than just a snack, Makhana is a symbol of tradition, resilience, and purity.
                    <br /><br />
                    Foxnut has deep roots in Indian culture, dating back over 2,000 years. Revered in Ayurveda for its medicinal properties, 
                    it was once a royal delicacy, gracing the tables of kings and sages alike. Its crunchy texture and subtly sweet taste make it a 
                    perfect companion for mindful snacking, while its rich antioxidants, protein, and minerals offer a wealth of health benefits.
                    <br /><br />
                    As we share Bihar’s finest Makhana with the world, we invite you to experience not just its taste, but the love and heritage 
                    infused in every bite.
                    </p>
                </div>
            </div>

      </div>
    )
}