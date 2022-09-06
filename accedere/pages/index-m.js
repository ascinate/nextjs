import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import HomeServices from "./componets/HomeServices";

export default function index() {


  return (
       <>
       <Navbar/>
       <Banner/>
       
       </>
  )
}
