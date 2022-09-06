
import Image from "next/image";
import Alltestimonials from "./TestimonialsApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";




import {useState} from "react";


function Testimonial(){

    const [ workData , setworkData] =useState(Alltestimonials);
    console.log(workData);

    const settings = {
        dots:  true,
        infinite: true,
        margin:30,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              infinite: true,
              dots:  true
            }
          },
          {
            breakpoint: 668,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      };
    return(
        <>
            <div className="testimonials-div">
                <div className="container">
                    <h4 className="comon-head-sub text-center"> testimonial</h4>
                    <h2 className="comon-head-main text-center"> What our clients are saying </h2>
                    <p className="col-lg-7 mx-auto text-center"> It is a long established fact that a reader will be distracted by the readable content
                     of a page when looking at its layout. </p>

                     
                   <div className="tesimonsli-slide mt-5">
                       <Slider {...settings}>
                            
                            {
                                    workData.map((curElem) =>{
                                        const { id, para,img, logoclient } = curElem;
                                        return(
                                            <>
                                              <div className="comon-testi-com">
                                                  <figure className="ts-big">
                                                        <Image src={img}
                                                        alt="Picture of the author"
                                                        width={512}
                                                        height={512}
                                                        layout="responsive"/>
                                                  </figure>
                                                  <div className="content-div-t">
                                                      <FaQuoteLeft/>
                                                      <p>{para}</p>
                                                      <figure className="ts-logo">
                                                            <Image src={logoclient}
                                                            alt="Picture of the author"
                                                            width={100}
                                                            height={100}
                                                            layout="responsive"/>
                                                      </figure>
                                                  </div>
                                              </div>
                                            </>
                                        );
                                    })
                                }


                       </Slider>
                   </div>

                </div>
            </div>
        </>
    )
};
export default Testimonial;