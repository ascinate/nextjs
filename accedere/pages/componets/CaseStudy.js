import Link from "next/link";
import Image from "next/image";
import Allcase from "./CaseStApi";
import {useState} from "react";



function CaseStudy(){
    const [ workData , setworkData] =useState(Allcase);
    console.log(workData);
    return(
        <>
          <div className="case-study-div py-5">
               <div className="container">
                    <h4 className="comon-head-sub"> Case Studies </h4>
                    <h2 className="comon-head-main"> Featured Case Studies  </h2>

                    <div className="row row-cols-1 row-cols-lg-3 mt-5">

                    {
                        workData.map((curElem) =>{
                            const { id, imgicon,time,author,tags,titel,pagelink} = curElem;
                            return(
                                <>

                                <div className="col">
                                        <Link href={pagelink}>
                                            <div className="case-styudies-div">
                                                <h6> {tags} </h6>
                                                <h4> {titel}</h4>
            
                                                <ul className="list-unstyled d-flex align-items-center">
                                                    <li>
                                                    {author}
                                                    </li>
                                                    <li>
                                                    {time}
                                                    </li>
                                                </ul>
            
                                                <ul className="list-unstyled d-flex align-items-center btn-grop1">
                                                    <li>
                                                    <Link href="/">
                                                        <span className="btn cm-st1">
                                                        ISO 27001
                                                        </span>
                                                    </Link>
                                                    </li>
                                                    <li>
                                                    <Link href="/">
                                                        <span className="btn cm-st1">
                                                            SOC 2
                                                        </span>
                                                    </Link>
                                                    </li>
                                                </ul>
            
                                                <figure className="mt-4">
                                                    <Image src={imgicon} alt="st1"  width={436} height={448}
                                                    layout="responsive" />
                                                </figure>
                                                
                                            </div>
                                        </Link>
                                </div>
                            
                                </>
                            );
                        })
                    }
                       
                    </div>
               </div>
          </div>
        </>
    )
};
export default CaseStudy;