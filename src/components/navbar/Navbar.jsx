import React, { useState } from "react";
import './Nav.css';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion, useScroll } from "framer-motion"; // Fixed: removed duplicate import
import Logo from '../../assets/logo.png';

export default function Navbar() {
    const [show, setShow] = useState(false);
    const Link = [
        { name: 'home', links: '#home' },
        { name: 'about', links: '#about' },
        { name: 'skill', links: '#skill' },
        { name: 'project', links: '#project' },
        { name: 'contact', links: '#contact' },
    ];
    const [On, setOn] = useState(false);
    const [activeLink, setActiveLink] = useState(0); // Better naming than show2

    const mode = () => {
        setOn(!On);
    };

    const call = () => {
        setShow(!show);
    };

    const callOff = (index) => {
        setActiveLink(index);
        setShow(false); // Close mobile menu when link is clicked
    };

    const { scrollYProgress } = useScroll(); // Fixed: should be scrollYProgress

    return (
        <>
            <header className="center col-center">
                <nav className="n-main center">
                    <div className="n-logo">
                        <img src={Logo} alt="Geetha" />
                    </div>
                    <div className="n-link center ">
                        <div onClick={mode} className="mode mode1 center">
                            {On ? <CiLight className="light" /> : <CiDark className="light" />}
                        </div>
                        <div className={`n-l-holder center ${show ? 'n-act' : ''}`}>
                            {Link.map((item, index) => {
                                return (
                                    <a 
                                        key={index} // Fixed: Added key prop
                                        onClick={() => callOff(index)} 
                                        className={`${activeLink === index ? 'act2' : ''}`} 
                                        href={item.links}
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                            <div onClick={mode} className="mode mode2 center">
                                {On ? <CiLight className="light" /> : <CiDark className="light" />}
                            </div>
                        </div>
                    </div>
                    <div className="n-bar center">
                        <div className="b-hold" onClick={call}>
                            {show ? <IoMdClose className="bar"/> : <FaBarsStaggered className="bar" />}
                        </div>
                    </div>
                </nav>
                <motion.div 
                    className="n-roll"
                    style={{
                        scaleX: scrollYProgress,
                        originX: 0,
                        backgroundColor: "#ff0088",
                        transformOrigin: "0%", // Better browser support
                    }}
                ></motion.div> 
            </header>
        </>
    );
}