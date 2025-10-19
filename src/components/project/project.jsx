import React from "react";
import './project.css';
import Pro1 from '../../assets/proj1.jpg';
import Pro2 from '../../assets/proj2.jpg';
import Pro3 from '../../assets/proj3.png';
import Pro4 from '../../assets/bg7.png';
import { FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function Project() {
    const proDetails = [
        { name: 'Greenland', Link: '', Des: '', img: Pro1 },
        { name: 'WoodShop', Link: '', Des: '', img: Pro2 },
        { name: 'CakeStore', Link: '', Des: '', img: Pro3 },
        { name: 'Portfolio', Link: '', Des: '', img: Pro4 },
    ]
    return (
        <>
            <div className="project center col-center" id="project">
                <h1 className="head headline headline2">project</h1>
                <div className="p-hold center">
                    {proDetails.map((item, i) => {
                        return (
                            <>
                                <motion.div
                                 initial={{opacity:0,scale:0}}
                                 whileInView={{opacity:1,scale:1,transition:{duration:0.4}}}
                                 viewport={{once:false,amount:0.3}}
                                    className="p-cover">
                                    <div className="p-img">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="p-txt center col-center">
                                        <h3>{item.name}</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        <a href="#"><button><b><FaLink /></b> Demo Link</button></a>
                                    </div>
                                </motion.div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}