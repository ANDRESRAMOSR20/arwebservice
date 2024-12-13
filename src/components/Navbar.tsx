"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#service" },
    { title: "Questions", path: "#faq" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="text-white/70 pt-6">
            {/* Desktop Navbar */}
            <div className="hidden md:flex  justify-between px-4 py-2 mx-auto max-w-[1200px]">
                {/* Business Logo/Name */}
                <h1 className="text-2xl font-bold text-white text-left -ml-[75px]">arWebService</h1>

                {/* Navigation Links */}
                <ul className="flex flex-row p-4 space-x-10 mr-[450px]">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p>{link.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Toggle Button */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Sidebar */}
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <div className="text-center mt-5">
                    {/* Mobile Business Logo/Name */}
                    <h1 className="text-2xl font-bold text-white">arWebService</h1>
                </div>
                <ul className="text-4x1 font-semibold my-24 text-center space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;

