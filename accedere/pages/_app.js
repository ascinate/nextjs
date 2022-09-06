import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { useEffect } from "react";
import Head from "next/Head";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
