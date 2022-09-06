import Link from "next/link";
import Image from "next/image";
import {useState } from "react";
import Allservices from "./ServicesApi";
import { BsArrowRightShort } from "react-icons/bs";




function HomeServices(){
    const [ workData , setworkData] =useState(Allservices);
    console.log(workData);

    return(
        <>
        <div className='services-part-home'>
            <div className='container'>
                <h4 className='comon-head-sub text-center'> Our Services </h4>
                <h2 className='comon-head-main text-center'> Introduce Our Best Security Services </h2>

                <div className="row row-cols-1 row-cols-lg-3 mt-0 g-lg-5">

                    {
                        workData.map((curElem) =>{
                            const { id, imgicon,para,titel,pagelink} = curElem;
                            return(
                                <>

                                <div className="col">
                                    <Link href={pagelink}>
                                        <div className="comon-card">
                                            <figure>
                                                <Image src={imgicon}
                                                alt="Picture of the author"
                                                width={512}
                                                height={50}
                                                layout="responsive"/>
                                            </figure>
            
                                            <h4>{titel}</h4>
                                            <p> {para} </p>
            
                                            <span className="btn"> read more <BsArrowRightShort/> </span>
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
}
export default HomeServices;