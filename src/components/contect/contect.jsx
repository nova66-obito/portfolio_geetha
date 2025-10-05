import React, { useState } from "react";
import './contect.css';
import '../../css/Holder.css';
import '../../css/HoldRes.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
    const conLink = [
        { name: "linkedin", Link: "#", Icon: FaLinkedin },
        { name: 'git', Link: "#", Icon: FaGithub },
        { name: 'whats', Link: "#", Icon: BsWhatsapp },
        { name: 'mail', Link: "#", Icon: IoMdMail },
    ];

    // Form validation
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmit, setIsSubmit] = useState(false);

    // Validation rules
    const validate = () => {
        const newErrors = {
            name: '',
            email: '',
            message: '',
        };

        let isvalid = true;

        // Name validate
        if (!userData.name.trim()) {
            newErrors.name = 'Name is required';
            isvalid = false;
        } else if (userData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
            isvalid = false;
        }

        // Email validate
        if (!userData.email.trim()) {
            newErrors.email = 'Email is required';
            isvalid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isvalid = false;
        }

        // Message validation
        if (!userData.message.trim()) {
            newErrors.message = 'Message is required';
            isvalid = false;
        } else if (userData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isvalid = false;
        }

        setError(newErrors);
        return isvalid;
    };

    // Input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (error[name]) {
            setError(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);

        if (!validate()) {
            setIsSubmit(false);
            return;
        }

        try {
            // Simulate API call - replace with your actual backend
            console.log('Form submitted:', userData);
            
            // Reset form after successful submission
            setUserData({
                name: '',
                email: '',
                message: '',
            });
            setError({
                name: '',
                email: '',
                message: ''
            });
            
            alert('Message sent successfully!');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmit(false);
        }
    };

    return (
        <>
            <div className="contact center" id="contact">
                <div className="c-text con-box center col-center">
                    <h1 className="head">get in touch</h1>
                    <div className="c-min center col-center">
                        <a href="#" target="__blank"><FaLocationArrow className="c-icons"/> velacheriy,chennai-600042</a>
                        <a href="#" target="__blank"><IoMdMail  className="c-icons"/> sam@gmail.com</a>
                        <a href="#" ><IoCall  className="c-icons"/> +919361998327</a>
                    </div>
                    <div className="c-m-icon center col-center">
                        <h3>contact me</h3>
                        <div className="h-social center">
                            {conLink.map((cont, i) => {
                                const IconComp = cont.Icon;
                                return (
                                    <div className="h-icon" key={i}>
                                        <a href={cont.Link} target="_blank" rel="noopener noreferrer">
                                            <IconComp className="icon" />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* Message form */}
                <div className="c-form con-box">
                    <h2>Message Here</h2>
                    <form onSubmit={handleSubmit} className="center col-center c-h-f" noValidate>
                        <div className="f-in center col-center">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="your name*" 
                                value={userData.name}
                                onChange={handleChange}
                                className={error.name ? 'error' : ''}
                            />
                            {error.name && <small className="error-message">{error.name}</small>}
                        </div>
                        <div className="f-in center col-center">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="your email*" 
                                value={userData.email}
                                onChange={handleChange}
                                className={error.email ? 'error' : ''}
                            />
                            {error.email && <small className="error-message">{error.email}</small>}
                        </div>
                        <div className="f-in center col-center">
                            <textarea 
                                name="message" 
                                id="msg" 
                                placeholder="message here*" 
                                rows={5}
                                value={userData.message}
                                onChange={handleChange}
                                className={error.message ? 'error' : ''}
                            ></textarea>
                            {error.message && <small className="error-message">{error.message}</small>}
                        </div>
                        <div className="c-btn">
                            <button type="submit" disabled={isSubmit}>
                                {isSubmit ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}