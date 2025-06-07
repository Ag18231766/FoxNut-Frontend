import Wrapper from "./components/Wrapper";


export default function TermsAndConditions() {

    return(
        <Wrapper heading="Terms And Conditions" arr={[{   
            key:1,
            title: "Website Terms and Conditions of Use",
            content: "By accessing this Website, accessible from foxnami.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trademark law."
        },
        {   key:2,
            title: "Disclaimer",
            content: "All materials on foxnami.com are provided without any guarantees or promises. foxnami.com does not offer any warranties, whether explicitly stated or implied, and explicitly disclaims all other warranties. Additionally, foxnami.com does not guarantee the accuracy or reliability of the materials on its Website or any linked sites. The information provided is intended for general use and may not be up-to-date or comprehensive.This version maintains the core message while using alternative phrasing to convey the same legal protections."
        },
        {   key:3,
            title: "License To Use",
            content: `Permission is granted to temporarily download one copy of the materials on foxnami.com Website for personal, non-commercial, transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not : modify or copy the materials;use the materials for any commercial purpose or for any public display;attempt to reverse engineer any software contained on foxnami.com Website;remove any copyright or other proprietary notations from the materials; ortransfer the materials to another person or "mirror" the materials on any other server.This license will automatically terminate if you violate any of these restrictions, and may be terminated by foxnami.com at any time. Upon termination, your viewing right will also be terminated, and you must destroy any downloaded materials in your possession whether in printed or electronic format.`
        },
        {   key:4,
            title: "Limitations",
            content: "In no event shall foxnami.com or its suppliers be liable for any damages arising out of the use or inability to use the materials on foxnami.com Website, even if foxnami.com or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental or consequential damages, these limitations may not apply to you."
        },
        {   key:5,
            title: "Accuracy of Materials",
            content: "The materials appearing on foxnami.com Website may include technical, typographical, or photographic errors. foxnami.com does not warrant that any of the materials on its Website are accurate, complete, or current. foxnami.com may make changes to the materials contained on its Website at any time without notice. foxnami.com does not make any commitment to update the materials."
        },
        {   key:6,
            title: "Links",
            content: "foxnami.com has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by foxnami.com of the site. The use of any linked website is at the user’s own risk."
        },
        {   key:7,
            title: "Terms of Use Modifications",
            content: "foxnami.com may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use."
        },
        {   key:8,
            title: "Governing Law",
            content: "Any claim relating to foxnami.com Website shall be governed by the laws of the Country without regard to its conflict of law provisions."
        }]}></Wrapper>
    )
}
