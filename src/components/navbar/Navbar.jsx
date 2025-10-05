import React, { useState } from "react";
import './Nav.css';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Logo from '../../assets/logo.png';
export default function Navbar() {
    const [show,setShow] = useState(false);
    const Link = [
        { name: 'home', links: '#home', },
        { name: 'about', links: '#about',},
        { name: 'skill', links: '#skill' },
        { name: 'project', links: '#project' },
        { name: 'contact', links: '#contact' },
    ]
    const [On, setOn] = useState(false);
    const mode = () => {
        setOn(!On);
    }
    const call = () =>{
       setShow(!show);
    }
    const [show2 , setShow2] = useState(0)
    const callOff = (n) =>{
      setShow2(n);
      console.log(show2)
      setShow(!show);
    }
    return (
        <>
            <header className="center">
                <nav className="n-main center">
                    <div className="n-logo">
                        <img src={Logo} alt="Geetha" />
                    </div>
                    <div className="n-link center ">
                        <div onClick={mode} className="mode mode1 center">
                            {On ? <CiLight className="light" /> : <CiDark className="light" />}
                        </div>
                        <div className={`n-l-holder center ${show ? 'n-act' : null}`}>
                            {Link.map((item, i) => {
                                return (
                                    <> <a onClick={() => callOff(i)} className={`${show2 === i ? 'act2' : null}`} href={item.links}>{item.name}</a></>
                                )
                            })}
                            <div onClick={mode} className="mode mode2 center">
                                {On ? <CiLight className="light" /> : <CiDark className="light" />}
                            </div>
                        </div>
                    </div>
                    <div className="n-bar center">
                        <div className="b-hold" onClick={call}>
                             {show ? <IoMdClose className="bar"/> :  <FaBarsStaggered className="bar" /> }
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}