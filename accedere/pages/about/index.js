import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Clientlogo from "../componets/Clientlogo";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";


function about(){
    return(
        <>
          <Navbar/>
          <Banner/>
          <div className='totals-body-part float-start w-100  comon-body-part'>
               
               <div className="top-about-sec1">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                                <h2 className="comon-head-main"> Company Overview </h2>
                                <p className="mt-4"> Accedere is Colorado CPA Firm with License no FRM.5000337 specializing in Cybersecurity with a major focus on AICPA SSAE 18 Attestation (formerly SSAE 16), SOC 1, SOC 2 Type 2 and SOC 3 Compliance Reports, ISO/IEC 27xxx Audits,Cloud Security, Privacy Compliance (HIPAA, GDPR, CCPA, etc.) and Data Security Audit Services. We are an ISO/IEC Certification Body, SOX, Privacy, SSAE 18, SOC Auditors (Service Auditors) registered with PCAOB, 
                                and Cloud Security Alliance as Auditors for their STAR program.</p>
                                <p> Ashwin Chaudhary is the CEO of Accedere. He is a CPA from Colorado,
                                 MBA, CITP, CISA, CISM, CGEIT, CRISC, CISSP, CDPSE, CCSK, PMP, ISO27001 LA, ITILv3 certified cybersecurity professional with over 19 years of cybersecurity/privacy and 34 years of industry experience.
                                  He has managed many cybersecurity projects covering SOC reporting, Privacy, IoT, SCADA and 
                                  Industrial Control System (ICS), Governance Risk, and Compliance. He has expertise in 
                                  implementing frameworks and compliance mandates such as ISO/IEC 27xxx series, IEC 62443/ISA99, NERC-CIP, NIST 800-82, COBIT, etc.</p>
                                  <p> He also has hands-on deployment experience with projects covering implementation of the Security Operations Centre (SOC), Security Tools, 
                                  etc. Ashwin has several publications to his credit.</p>
                           </div>
                           <div className="col">
                                <figure className="ab-top1">
                                     <Image src="/about-company.jpg" alt="about"
                                     width={700}
                                     height={900}
                                     layout="responsive"
                                     />
                                </figure>
                           </div>
                        </div>
                         
                    </div>
               </div>

               <div className="ourvaule-div">
                   <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            <figure className="ab-top2">
                                <Image src="/value-img.jpg" alt="about"
                                width={700}
                                height={900}
                                layout="responsive"
                                />
                            </figure>
                         </div>
                         <div className="col">
                            <h2 className="comon-head-main text-white"> Our Value Proposition </h2>
                            <p className="text-white"> Knowing how much extra value our services can deliver, many clients find that it makes sense to take steps to ensure a more successful outcome, including hiring experts who are skilled in helping organizations be more thorough and thoughtful in how they approach their engagement. Preparing for a SOC engagement or Cybersecurity assessment is a matter of clear thinking and smart planning. Working with a cybersecurity specialist such as ours, 
                            helps you dig into unknown areas.</p>
                            <h5 className="text-white mt-4">  Some advantages of working with us are: </h5>
                            <ul className="list-unstyled mt-4">
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Colorado Licensed CPA Firm listed with PCAOB and Cloud Security Alliance</span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> One-stop end to end process for SOC Reporting & Attest Services</span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Project management methodology consistently applied to each engagement </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Efficient service delivery with minimal disruption to operations </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Our engagements are executed by senior experienced professionals </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Several years of Information Security & Cybersecurity experience </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Effective time management to complete assignments </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Ongoing support, We are with you whenever you need us </span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
               </div>

               <div className="our-customer-div">
                  <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2">
                          <div className="col">
                                <figure className="ab-top3">
                                    <Image src="/coustomer.jpg" alt="about"
                                    width={700}
                                    height={900}
                                    layout="responsive"
                                    />
                                </figure>
                          </div>
                          <div className="col">
                              <h2 className="comon-head-main"> Our Customers </h2>
                              <ul className="list-unstyled mt-4">
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Cloud services such as IaaS, PaaS, SaaS, etc. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Banking and Financial Services </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Technology and Consulting services </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Construction and Infrastructure </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Energy </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Telecom </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Data Centre Services </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <BsXDiamondFill/>
                                  </span>
                                  <span> Healthcare and many more </span>
                               </li>
                            </ul>
                          </div>
                      </div>
                  </div>
               </div>

               <Clientlogo/>
               

         </div>
          <Footer/>
        </>
    );
}
export default about;