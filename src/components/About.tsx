"use client";
import React from "react";
import Image from "next/image";
import facebook from "../assets/facebook.webp";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">
            {/* Sección con fondo */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-8">
                <div className="grid grid-cols-8 gap-4 place-items-center">
                    {/* Facebook and WhatsApp in the first column */}
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            drag
                            dragConstraints={{top: -50, left: -50, right: 50, bottom: 50}} // Límites para el drag
                            whileDrag={{scale: 1.1}}
                            className="absolute"
                        >
                            <Image
                                draggable="false"
                                src={facebook}
                                alt="Facebook"
                                className="w-[100px] h-[100px]"
                            />
                        </motion.div>
                        <motion.div
                            drag
                            dragConstraints={{top: -50, left: -50, right: 50, bottom: 50}} // Límites para el drag
                            whileDrag={{scale: 1.1}}
                            className="absolute top-2 left-8"
                        >
                            <Image
                                draggable="false"
                                src={whatsapp}
                                alt="WhatsApp"
                                className="w-[130px] h-[130px]"
                            />
                        </motion.div>
                    </div>

                    {/* Instagram in the second column */}
                    <motion.div drag dragConstraints={{top: -50, left: -50, right: 50, bottom: 50}}
                                className="flex justify-start row-span-3 w-full">

                        <Image draggable="false" src={instagram} alt="Instagram" className="w-[90px] h-[90px]"/>
                    </motion.div>

                    {/* Párrafo que ocupa 6 columnas */}
                    <p className="col-span-6 text-left text-xl max-w-[1000px] mx-auto mt-8 text-white/80">
                        arWebService develops AI-driven solutions to optimize business processes. We specialize in
                        designing and implementing virtual agents, chatbots, and Retrieval-Augmented Generation <code
                        className="bg-black text-[#A3B5FF] px-1 rounded">RAG</code> systems to manage and enhance
                        high-information databases.<br /><br />
                        Our solutions seamlessly integrate with leading platforms such as Facebook, Instagram, WhatsApp,
                        and email, delivering smooth and effective digital interactions for businesses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
