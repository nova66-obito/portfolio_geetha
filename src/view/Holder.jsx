import React from "react";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/skills/skill";
import Footer from "../components/Footer/footer";
import Hi from '../assets/hai.webp';
import Bg from '../assets/bg2.png';
import Bg2 from '../assets/bg7.png'
import '../css/Holder.css';
import '../css/HoldRes.css';
import Project from "../components/project/project";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Contact from "../components/contect/contect";
export default function Holder() {
    let call = [1, 2, 3];
    const conLink = [
        { name: "linkedin", Link: "#", Icon: FaLinkedin },
        { name: 'git', Link: "#", Icon: FaGithub },
        { name: 'whats', Link: "#", Icon: BsWhatsapp },
        { name: 'mail', Link: "#", Icon: IoMdMail },
    ]
    return (
        <>
            <main>
                <Navbar />
                <section>
                    <div id="home" className="home center">
                        <div className="h-left center col-center">
                            <div className="h-text">
                                <h1>hi all, i'm geetha <img src={Hi} alt="" className="Hi" /></h1>
                                <h3>web developer</h3>
                                <p>A passionate Full Stack web Developer 🚀 having an experience of building Websites with JavaScript / Reactjs / Java and some other cool libraries and frameworks.</p>
                            </div>
                            <div className="h-social center">
                                {conLink.map((cont, i) => {
                                    const IconComp = cont.Icon
                                    return (
                                        <div className="h-icon" key={i}>
                                            <IconComp className="icon" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="cnt center">
                                <button className="btn-cover">contact me</button>
                                <button className="btn-cover">Download Resume</button>
                            </div>
                        </div>
                        {/* image div */}
                        <div className="h-right center">
                            <img src={Bg} alt="" />
                        </div>
                    </div>
                    {/* about page */}
                    <div id="about" className="about center">
                        <div className="a-pic center">
                            <img src={Bg2} alt="" />
                        </div>
                        <div className="a-text">
                            <div className="a-des center">
                                <h2>about me</h2>
                                <div className="dot center">
                                    {call.map((item, i) => {
                                        return (
                                            <>
                                                <p></p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="a-txt-hold">
                                <h1>hello i'm Geetha...</h1>
                                <p><b>Full Stack Developer</b>. 2024 MCA Graduate.
                                    Trained at Code99 IT Academy in end-to-end Java development.
                                    I build things for the web, from front-end interfaces to back-end systems.
                                    My tech toolkit includes Java, Spring, React, and MySQL.
                                    I am actively looking for a full-time developer role to start my career.
                                    I am motivated, adaptable, and ready to learn.
                                    Let's connect and discuss how I can add value to your team.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* skills block */}
                    <div id="skill" className="skills center col-center">
                        <h1 className="head">skills</h1>
                        <Skills />
                    </div>
                    {/* project */}
                    <Project/>
                    {/* contact */}
                    <Contact/>
                    {/* footer */}
                    <Footer/>
                </section>
            </main>
        </>
    )
}