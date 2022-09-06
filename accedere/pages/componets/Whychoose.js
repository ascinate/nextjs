import Link from "next/link";
import { BsCheckLg, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

function Whychoose(){
    return(
        <>
         <div className="chooser-div1">
           <div className="container">
               <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                   <div className="col">
                        <h4 className="comon-head-sub"> why choose us</h4>
                        <h2 className="comon-head-main"> SOC 1, SOC 2, SOC 3 Attest <span className="d-block">
                        Reports And ISO/IEC 27000 Audits </span> </h2>

                        <ul className="list-unstyled mt-4">
                            <li>
                               <span className="iconm">
                                  <BsCheckLg/>
                               </span>
                               <span>
                                  CSA Cloud STAR Empanelled Auditors
                               </span>
                            </li>
                            <li>
                               <span className="iconm">
                                  <BsCheckLg/>
                               </span>
                               <span>
                                  C5 Cloud Controls with SOC 2 Report
                               </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                Colorado Licensed CPA Firm
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                ISO/IEC Accredited Certification Body
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                PCAOB Registered Auditors
                                </span>
                            </li>
                            <li>
                                <span className="iconm">
                                <BsCheckLg/>
                                </span>
                                <span>
                                Among few to provide both SOC & ISO under one brand
                                </span>
                            </li>
                            

                            
                        </ul>

                        <Link href="/about">
                           <span className="btn about-btn mt-3"> Read more About <BsArrowRightShort/> </span>
                        </Link>
                   </div>
                   <div className="col">
                        <figure className="why-imgs">
                            <Image src="/why1.jpg" alt="why" width={436} height={448}
                            layout="responsive" />
                        </figure>
                   </div>
               </div>
           </div>
           
        </div>
        </>
    )
};
export default Whychoose;
