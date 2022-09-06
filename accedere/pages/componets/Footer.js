import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitterSquare, FaLinkedin,FaYoutube } from "react-icons/fa";


function Footer(){
    return(
        <>
            <div className="footer-part float-start w-100">
                <div className="container">
                   <div className="row">
                      <div className="col-lg-3">
                          <Link href="/">
                              <span className="footer-logo">
                                 <h5 className="ft-comon-part"> Accedere </h5>

                              </span>
                          </Link>
                          <p className="mt-4">999, 18th St,
                          #3000, Denver,
                          Colorado 80202</p> 
                          <p>Spaces Inspire Hub, Western Heights,
                          J P Road 4 Bunglows, Andheri West,
                          Mumbai 400053</p> 
                          <ul className="list-unstyled d-flex align-items-center social-links mt-3">
                              <li>
                                 <Link href="/">
                                     <FaFacebook/>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/">
                                    <FaTwitterSquare/>
                                 </Link>
                                  
                              </li>
                              <li>
                                 <Link href="/">
                                    <FaLinkedin/>
                                 </Link>
                                  
                              </li>
                              <li>
                                 <Link href="/">
                                    <FaYoutube/>
                                 </Link>
                                  
                              </li>
                          </ul>
                      </div>
                      <div className="col-lg-6">
                         <div className="comon-footer-s">
                            <h5 className="ft-comon-part">Services </h5>
                            <ul className="list-unstyled services-ul-links mt-4">
                               <li>
                                 <Link href="/">
                                   <span> SOC Reporting Services </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span> SOC 1 Type 2 Compliance Audit </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span>  SCADA | ICS </span>
                                 </Link>
                               </li>
                              
                               <li>
                                 <Link href="/">
                                   <span> SOC 1 Type 2 Compliance Audit </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span> SOC 2 Type 2 Compliance Audit </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span> SOC 2 Type 2 Compliance Audit </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span> Cloud Security </span>
                                 </Link>
                               </li>
                               <li>
                                 <Link href="/">
                                   <span> Cybersecurity </span>
                                 </Link>
                               </li>
                               <li>
                                    <Link href="/">
                                        <span> Privacy </span>
                                    </Link>
                               
                               </li>
                               
                            </ul>
                         </div>
                      </div>
                      <div className="col-lg-3">
                         <h5 className="ft-comon-part">Company </h5>
                        <ul className="list-unstyled mt-4">
                               <li>
                                 <Link href="/">
                                   <span> About </span>
                                 </Link>
                               </li>
                               <li>
                                    <Link href="/">
                                        <span> Contact </span>
                                    </Link>
                                </li>
                        </ul>
                      </div>
                   </div>
                   <ul className="list-unstyled trums mt-5">
                       <li>
                          © Accedere
                       </li>
                        <li>
                            <Link href="/">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                               Sitemap
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Terms
                            </Link>
                        </li>
                   </ul>

                   <p className="ft-para mt-5"> Accedere is Colorado CPA Firm with License no FRM.5000337 specializing in Cybersecurity with a major focus on AICPA SSAE 18 Attestation (formerly SSAE 16), SOC 1, SOC 2 Type 2 and SOC 3 Compliance Reports, ISO/IEC 27xxx Audits,Cloud Security, Privacy Compliance (HIPAA, GDPR, CCPA, etc.) and Data Security Audit Services. We are an ISO/IEC Certification Body, SOX, Privacy, SSAE 18, SOC Auditors (Service Auditors) registered with PCAOB, and Cloud Security Alliance as Auditors for their STAR program.</p>
                </div>
            </div>
        </>
    )
};
export default Footer;
