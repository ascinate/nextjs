import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from "react";
import Head from "next/Head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


 <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com
"/>
  <link rel="preconnect" href="https://fonts.gstatic.com
" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800&family=Cormorant:wght@500&family=Josefin+Sans:wght@400;500;600&family=Merriweather:wght@300;400;700;900&family=Nunito:wght@300;400;500;600&family=Open+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500;600;700&family=Saira+Condensed:wght@400;500;600;700&display=swap
" rel="stylesheet"/>
  </Head>


  return <Component {...pageProps} />
}

export default MyApp
