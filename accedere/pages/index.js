import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import HomeServices from "./componets/HomeServices";
import CountingSection from "./componets/CountingSection";
import Whychoose from "./componets/Whychoose";
import CaseStudy from "./componets/CaseStudy";
import Testimonial from "./componets/Testimonial";
import Clientlogo from "./componets/Clientlogo";
import Footer from "./componets/Footer";

function home(){
    return(
        <>
          <Navbar/>
          <Banner/>
          <div className='totals-body-part float-start w-100  comon-body-part'>
       
            <HomeServices/>

            <CountingSection/>

            <Whychoose/>

            <CaseStudy/>

            <Testimonial/>

            <Clientlogo/>

          </div>
          <Footer/>
        </>
    );
}
export default home;