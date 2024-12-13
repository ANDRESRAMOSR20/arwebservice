"use client";
import Image from "next/image";
import robot from "../assets/robot.png";
import cohete from "../assets/cohete.png";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
    return (
        <div className="py-16 sm:py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#44235C_60%,#2B1942_80%)]">

            <div className="absolute rounded-[50%] w-[1500px] h-[700px] sm:w-[3000px] sm:h-[1300px] top-[300px] sm:top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

            <div className="relative" id="about">
                <div className="text-4xl sm:text-7xl font-bold text-center px-4">
                    <h1 className="text-white/100">
                        Empower your{" "}
                        <span className="from-blue-200 via-indigo-500 to-purple-500 bg-gradient-to-r text-transparent bg-clip-text">
                            Business
                        </span>
                        <br /> with automation
                    </h1>
                </div>

                {/* Ocultar imágenes flotantes en móviles */}
                <motion.div
                    className="hidden md:block absolute left-[10%] top-[100px]"
                    drag
                >
                    <Image
                        src={cohete}
                        height={150}
                        width={150}
                        alt="cursor"
                        className="transform"
                        style={{ rotate: "-20deg" }}
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    className="hidden md:block absolute right-[10%] top-[100px]"
                    drag
                >
                    <Image
                        src={robot}
                        height={150}
                        width={150}
                        alt="cursor"
                        className="transform"
                        style={{ rotate: "350deg" }}
                        draggable="false"
                    />
                </motion.div>

                <iframe
                    className="block mx-auto rounded-lg mt-6 sm:mt-10 mb-10"
                    width="100%"
                    height="240"
                    style={{ maxWidth: "800px", height: "450px" }}
                    src="https://www.youtube.com/embed/pRyBzZbv_IU"
                    allowFullScreen
                ></iframe>

                <div className="text-center mt-6 sm:mt-0 mb-6 sm:mb-8">
                    <a
                        href="https://wa.me/573203361049"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-700 shadow-md shadow-purple-700/50 text-white text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h4l3 6 4-8 3 6h4"
                            />
                        </svg>
                        Schedule your call
                    </a>
                </div>

                <div
                    className="w-[90%] sm:w-[770px] bg-gradient-to-b from-gray-950 via-gray-800 to-black h-5 flex items-center mx-auto rounded-lg"
                >
                    <div className="w-[85%] sm:w-[750px] border-t-4 border-indigo-900 mx-auto rounded-lg"></div>
                </div>
                <p className="text-center text-indigo-200 pt-6 sm:pt-10 px-4">
                    Reliable and fast, that is how our clients describe us.
                </p>

                <div className="text-3xl sm:text-5xl font-bold text-center pt-10 sm:pt-20 -mb-4 sm:-mb-10 px-4">
                    <h2 className="text-white/100">
                        Save Time and{" "}
                        <span className="from-white via-indigo-100 to-indigo-100 bg-gradient-to-r text-transparent bg-clip-text">
                            Money
                        </span>
                        <br />
                        With Our{" "}
                        <span className="from-white via-indigo-100 to-indigo-300 bg-gradient-to-r text-transparent bg-clip-text">
                            Tools
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
