import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";


function contact(){
    return(
        <>
          <Navbar/>
          <div className='contact-page-1 float-start w-100'>
               
              <div className="top-contact-div">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                            <div className="col">
                                <h2 className="comon-head-main text-white">Contact Us </h2>
                                <p className="text-white"> Our team is ready to assist you with any of your compliance, cybersecurity and privacy needs. 
                                Complete the contact form and our team will reach out within 24 hours.  </p>
                                
                                <div className="map-div-1 mt-4">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24540.597722237064!2d-104.991358!3d39.749203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78da287122a9%3A0x1f7a76af26546f63!2sDenver%20Place%2C%20999%2018th%20St%20%233000%2C%20Denver%2C%20CO%2080202%2C%20USA!5e0!3m2!1sen!2sin!4v1662474621712!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col">
                                <h5 className="text-white"> Fill The Form Below </h5>
                                <form method="get" action="an">
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Company Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea type="text" className="form-control" placeholder="Your Query" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                                                    I agree to allow Accedere to store and process my personal data.*
                                                </label>
                                            </div>
                                        </div>

                                        

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-sumit" value="Submit"/>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>   
              </div> 
              <div className="next-contact-div">
                  <div className="container">
                      <div className="row row-cols-1 row-cols-lg-3">
                          <div className="col">
                             <div className="comon-cont-ft">
                                <h5> Headquarters </h5>
                                <p> 999, 18th St,
                                #3000, Denver,
                                Colorado 80202</p>

                                <p> Spaces Inspire Hub, Western Heights,
                                J P Road 4 Bunglows, Andheri West
                                Mumbai 400053 </p>
                             </div>
                          </div>
                          <div className="col d-lg-grid justify-content-lg-end">
                             <div className="comon-cont-ft">
                                <h5> Contact Us </h5>
                                <p>info@accedere.io</p>
                             </div>
                          </div>
                          <div className="col d-lg-grid justify-content-lg-end">
                             <div className="comon-cont-ft">
                                <h5> Follow Us </h5>
                                 <ul className="list-unstyled d-flex align-items-center">
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaFacebookF/>
                                       </span>
                                    </Link>
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaTwitter/>
                                       </span>
                                    </Link>
                                    <Link href="/">
                                       <span className="comon-soc">
                                           <FaYoutube/>
                                       </span>
                                    </Link>
                                 </ul>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <Footer/>
        </>
    );
}
export default contact;