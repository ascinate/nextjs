
import $ from 'jquery';
import { FaPlus } from "react-icons/fa";


function CountingSection(){


    
    return(
        <>
          <div className="countaing-div py-5">
             <div className="container">
                  <h2 className='comon-head-main text-center text-center text-white'>
                  It is a long established fact that a reader 
                  </h2>

                  <p className="col-lg-9 mx-auto text-center text-white mt-3"> Accedere is Colorado CPA
                   Firm with License no FRM.5000337 specializing in Cybersecurity with a major focus 
                   on AICPA SSAE 18 Attestation (formerly SSAE 16), SOC 1, SOC 2 Type 2 and SOC 3 
                   Compliance Reports.</p>


                   <div className="row row-cols-1 row-cols-md-4  g-lg-5 mt-0" id="counter">
                        <div className="col">
                            <div className="comon-number1" data-aos="fade-up">
                                <div className="d-flex align-items-center justify-content-center">
                                    <h2 className="counter-value" data-count="10">200</h2>
                                    <span> <FaPlus/> </span>
                                </div>
                                    
                                <p> Cloud Security Audit </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1" data-aos="fade-up">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value" data-count="28">150</h2>
                                <span> <FaPlus/> </span>
                            </div>
                                <p>  Data Privacy Audits </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1" data-aos="fade-down">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value" data-count="500">500</h2>
                                <span> <FaPlus/> </span>
                            </div>
                                <p>  ISO Certification  </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="comon-number1" data-aos="fade-up">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="counter-value" data-count="450">240</h2>
                                <span> <FaPlus/> </span>
                            </div>
                                <p>  ISO Certification </p>
                            </div>
                        </div>
                   
   
                   </div>

             </div>
          </div>
        </>
    )
}
export default CountingSection;