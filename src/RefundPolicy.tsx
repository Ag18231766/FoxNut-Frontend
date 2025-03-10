import { FooterComp } from "./components/FooterComp";

export default function RefundPolicy(){
    return (
        <div>
            <div className="h-full mt-6 mb-10">
                <div className="flex justify-center">
                    <div className="w-7xl bg-gray-100">
                        <div className="flex justify-center"><div className="text-gray-600 text-6xl mt-7">Return Policy</div></div><br></br><br></br>
                        We strive to ensure the accuracy of every order shipped. Please verify the contents of your order upon receipt. If there are any discrepancies or damaged items, please notify us within five days of receiving your order.<br></br><br></br> 

                        For health and safety reasons, food and perishable products cannot be returned or exchanged unless FOXNAMI Suppliers has shipped the incorrect item. Original shipping charges and return shipping costs will not be refunded unless FOXNAMI Suppliers has made an error or sent incorrect items.<br></br><br></br>

                        Once we receive returned items, a full refund will be issued using the original payment method. If you receive damaged goods, please notify us within five days. Please retain the shipping box and packaging as they may need to be inspected by the carrier. Discarding the packaging may prevent claims for damaged goods.<br></br><br></br>

                        If an order is refused or undeliverable, you will be charged the full shipping costs, including return shipping to FOXNAMI Suppliers. This applies to orders with incorrect addresses or where delivery attempts have been unsuccessful. If you provide an incorrect address, we will reship the order at your expense. If you choose not to reship, a 10% restocking fee plus shipping charges will apply.<br></br><br></br>

                        For any questions regarding our return and refund policy, please contact us at foxnami@gmail.com.
                        </div>
                    </div>
            </div>
            <FooterComp></FooterComp>
        </div>
    )
}