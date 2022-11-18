import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/img-perfil.png';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import Typical from 'react-typical';

function Home() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hello 👋 I am </p>
              <h1>Kenneth Mei <span className="span">{'/>'}</span> </h1>
              <Typical 
                steps={['Full Stack JS Developer', 1000, 'Web Development Expert', 1000]}
                loop={Infinity}
                wrapper="h2"
              />
              <a 
                href="https://gitconnected.com/thiagodanobrega/resume" 
                target="_blank"
                className="btn-download" rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>
            <img src={image} alt="Profile photo of Kenneth Mei, a Enthusiastic man with great experience."  className="image-perfil" />
          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;