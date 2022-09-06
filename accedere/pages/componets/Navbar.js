import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightShort, BsFillGridFill, BsFillShieldLockFill,BsFillBookmarkFill,BsLayersFill, BsCloudHaze2Fill, BsFileEarmarkBarGraphFill,BsKeyFill } from "react-icons/bs";



function Navbar(){

    const router = useRouter()


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light float-start w-100">
         <div className="container">
            <Link href='/' className="navbar-brand">
             <a> 
                <Image
                src="/logo.png"
                alt="Picture of the author"
                width={177}
                height={33}
                />
            </a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className={router.pathname == "/" ? "active" : ""}>
                        <Link href='/' > 
                            <span className="nav-link">  Home </span>
                        </Link>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : ""}>
                        <Link href='/about' > 
                            <span className="nav-link">  About</span>
                        </Link>
                    </li>
                    <li className="dropdown dropdown-mega position-static">
                        <a className="nav-link mega-menu-a dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                           <div className='mega-content'>
                               <div className='row'>
                                  <div className='col-lg-6'>
                                       <div className='row row-cols-1 row-cols-lg-2'>
                                            <div className='col'>
                                                <div className='comon-div1-links'>
                                                    <h5> <BsFileEarmarkBarGraphFill/> AICPA SOC 1, 2, 3 Reports </h5>
                                                    <ul className='list-unstyled '>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC Reporting Services</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC 1 Type 2 Compliance Audit</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC 2 Type 2 Compliance Audit</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC 2 Type 2 Compliance Audit</span>
                                                        </Link>
                                                        </li>
                                                  
                                                    </ul>
                                                    <h5 className='mt-3'>
                                                        <Link href='/' > 
                                                             <span> <BsLayersFill/> SOC reports for Privacy </span>
                                                        </Link>
                                                    </h5>
                                                    <h5>
                                                        <Link href='/' > 
                                                                <span> <BsFillBookmarkFill/> ISO Certification Services </span>
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div className='comon-div1-links'>
                                                    <h5> <BsFileEarmarkBarGraphFill/> AICPA SOC 1, 2, 3 Reports </h5>
                                                    <ul className='list-unstyled '>
                                                        
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC 2 Type 2 Compliance Audit</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC Reports for Cloud Security</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC Reports for Privacy</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC Reports for Cyber Risk</span>
                                                        </Link>
                                                        </li>
                                                        <li>
                                                        <Link href='/' > 
                                                            <span className="nav-link">SOC for Supply Chain</span>
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                   
                                                </div>
                                            </div>
                                       </div>
                                      
                                  </div>
                                  <div className='col-lg-6'>
                                      <div className='row row-cols-1 row-cols-lg-3'>
                                                <div className='col'>
                                                        <div className='comon-div1-links'>
                                                            <h5><BsFillShieldLockFill/>  Cybersecurity </h5>
                                                            <ul className='list-unstyled'>
                                                                <li>
                                                                    <Link href='/' > 
                                                                        <span className="nav-link">Cybersecurity</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href='/' > 
                                                                        <span className="nav-link">SCADA | ICS</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href='/' > 
                                                                        <span className="nav-link">Security Operations</span>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href='/' > 
                                                                        <span className="nav-link">Vulnerability Assessment</span>
                                                                    </Link>
                                                                </li>
                                                                
                                                                
                                                            </ul>
                                                            
                                                        </div>
                                                </div>

                                                <div className='col'>
                                                    <div className='comon-div1-links'>
                                                        <h5> <BsCloudHaze2Fill/> Cloud Security </h5>
                                                        <ul className='list-unstyled'>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link">Cloud Security Assessment</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link">SOC for Cloud Security</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link">SOC Reports for Privacy</span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link">Hire Cybersecurity Contractor</span>
                                                                </Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className='col'>
                                                    <div className='comon-div1-links'>
                                                        <h5> <BsKeyFill/> Privacy </h5>
                                                        <ul className='list-unstyled'>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link"> Privacy Assessment Services </span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link"> HIPAA </span>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='/' > 
                                                                    <span className="nav-link"> SOC reports for Privacy </span>
                                                                </Link>
                                                            </li>
                                                            
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                      </div>
                                  </div>


                               </div>
                           </div>
                        </ul>
                    </li>
                    <li className={router.pathname == "/contact" ? "active" : ""}>
                        <Link href='/contact' > 
                            <span className="nav-link">  Contact </span>
                        </Link>
                    </li>

                    <li>
                        <Link href='/about' > 
                            <span className="btn lets-btn1"> Send a message </span>
                        </Link>
                    </li>
                
                
                    
                
                </ul>
            
            </div>
            
         </div>
        </nav>
        </>
    )
}
export default Navbar;