import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">Hello,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  My name is <span className="span-highlight">Kenneth Mei.</span> I love to solve problems through codes. I have a Bachelor's degree in Software Engineering, I love <span className="span-highlight"> Full Stack JavaScript.</span>
                </p>
                <p className="text-about">
                  My focus is to be able to improve people's lives, developing applications that are <span className="span-highlight">accessible and functional</span>. <br />Experience includes troubleshooting and testing, working in teams with good communication and tech skill.
                </p>
                <p className="text-about last">
                  Relevant skills include: <span className="span-highlight">Html5, CSS3, JavaScript, React, Next, Redux, Hooks, Jest/RTL, AWS, Expres.js, Django, MongoDB, PostgreSQL.</span>
                </p>
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;