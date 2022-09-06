import { useEffect, useRef } from "react";


function Banner(){

   const vidRef=useRef();

   useEffect(() => { vidRef.current.play(); },[]);

    return(
        <>
          <div className="float-start w-100 banner-sec-part">
             <div className="container">
                 <div className="col-lg-7">
                    <div className="banner-content-part ">
                        <h1> Cloud, Data Security <br/> & Privacy Services</h1>
                    </div>
                 </div>
             </div>

             <div className="video-sec">
                  <div className="video-bg"></div>
                  <video
                  src="/Untitled2.mp4"
                  ref={vidRef}
                  muted
                  autoPlay
                  loop 
                  />
               </div>
          </div>
        </>
    )
 };

 export default Banner;
