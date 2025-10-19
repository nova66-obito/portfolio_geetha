import React from "react";
import './skill.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
export default function Skills() {
    // Map the icon Component itself, not its name as a string
    const sList = [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "Sass", icon: FaSass },
        { name: "Java", icon: FaJava },
        { name: "Git", icon: FaGithubSquare },
        { name: "SQL", icon: SiMysql },
    ];

    return (
        <div className="s-con center">
            {/* Added a container for better structure */}
            {sList.map((skill, index) => {
                // Assign the icon component to a variable starting with Capital Letter (required for JSX)
                const IconComponent = skill.icon;

                return (
                    // Use a unique key for the parent element (index is okay for static lists)
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="s-box center col-center" key={index}>
                        <div className="s-icon">
                            {/* Render the Icon Component here */}
                            <IconComponent className="s-icons" />
                        </div>
                        <h3>{skill.name}</h3>
                    </motion.div>
                );
            })}
        </div>
    );
}