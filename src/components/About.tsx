"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import facebook from "../assets/facebook.webp";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";

const About = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    const secondRef = useRef(null); // Referencia adicional para el segundo grid

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting); // Cambia el estado si el elemento está en vista
            },
            {
                threshold: 0.2, // Ajuste el umbral de visibilidad al 20%
            }
        );

        if (ref.current) {
            observer.observe(ref.current); // Observa el primer grid
        }

        if (secondRef.current) {
            observer.observe(secondRef.current); // Observa el segundo grid
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Des-observa el primer grid al desmontar
            }
            if (secondRef.current) {
                observer.unobserve(secondRef.current); // Des-observa el segundo grid al desmontar
            }
        };
    }, []);

    return (
        <div className="max-w-[1200px] mx-auto bg-black" id="about">
            {/* Sección con fondo */}
            <div
                className="bg-gradient-to-b from-gray-900 via-gray-800 to-black backdrop-blur-lg rounded-xl overflow-hidden p-8"
                ref={ref} // Aplica el ref aquí para el primer grid
            >
                {/* Primer Grid con animación de entrada desde la derecha */}
                <motion.div
                    className="grid grid-cols-8 gap-4 place-items-center"
                    initial={{ opacity: 0, x: 200 }} // Inicia desde la derecha
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }} // Animación activa cuando está en vista
                    transition={{ duration: 0.8 }} // Duración de la animación
                >
                    {/* Facebook and WhatsApp in the first column */}
                    <div className="flex flex-col items-center gap-4 relative">
                        <motion.div
                            drag
                            dragConstraints={{
                                top: -50,
                                left: -50,
                                right: 50,
                                bottom: 50,
                            }} // Límites para el drag
                            whileDrag={{ scale: 1.1 }}

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
                            dragConstraints={{
                                top: -50,
                                left: -50,
                                right: 50,
                                bottom: 50,
                            }} // Límites para el drag
                            whileDrag={{ scale: 1.1 }}
                            initial={{ top: "80px", left: "8px" }} // Posición inicial
                            animate={{ top: "80px", left: "8px" }} // Posición final después de la animación

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
                    <motion.div
                        drag
                        dragConstraints={{
                            top: -50,
                            left: -50,
                            right: 50,
                            bottom: 50,
                        }}
                        className="flex justify-start row-span-3 w-full"
                    >
                        <Image
                            draggable="false"
                            src={instagram}
                            alt="Instagram"
                            className="w-[90px] h-[90px]"
                        />
                    </motion.div>

                    {/* Texto */}
                    <div className="col-span-6 text-xl mx-auto mt-8 text-white/80">
                        <h2 className="text-6xl font-bold text-white pb-10">
                            System Compatibility <br /> for Your Enterprise
                        </h2>
                        <p className="text-left">
                            arWebService develops AI-driven solutions to optimize business
                            processes. We specialize in designing and implementing virtual
                            agents, chatbots, and Retrieval-Augmented Generation{" "}
                            <code className="bg-black text-[#A3B5FF] px-1 rounded">RAG</code>{" "}
                            systems to manage and enhance high-information databases.
                            <br />
                            <br />
                            Our solutions seamlessly integrate with leading platforms such as
                            Facebook, Instagram, WhatsApp, and email, delivering smooth and
                            effective digital interactions for businesses.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Segundo Grid con animación de entrada desde abajo */}
            <div
                className="grid grid-cols-6 gap-4 place-items-center mt-10"
                ref={secondRef} // Aplica el ref aquí para el segundo grid
            >
                {[...Array(3)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="col-span-2 text-xl mx-auto mt-8 text-white/80 bg-gradient-to-b from-gray-900 via-gray-800 to-black backdrop-blur-lg rounded-xl overflow-hidden p-8"
                        initial={{ opacity: 0, y: 50 }} // Empieza desde abajo
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Activar animación cuando entra en vista
                        transition={{ duration: 0.8, delay: index * 0.3 }} // Retraso secuencial para cada div
                    >
                        <h2 className="text-center text-4xl font-bold from-blue-200 via-indigo-500 to-purple-500  bg-gradient-to-r text-transparent bg-clip-text">
                            {/* Títulos dinámicos según el índice */}
                            {index === 0 && "Agent AI"}
                            {index === 1 && "RAG"}
                            {index === 2 && "Chat Bot"}
                        </h2>
                        <p className="mb-4 mt-4 text-center">
                            {/* Descripciones dinámicas */}
                            {index === 0 &&
                                "A robust web service that automates repetitive tasks and decision-making processes for businesses, powered by cutting-edge AI."}
                            {index === 1 &&
                                "An intelligent web service that enhances your application with accurate, up-to-date, and domain-specific knowledge delivery."}
                            {index === 2 &&
                                "A conversational web service enabling businesses to engage users across multiple platforms with human-like interactions."}
                        </p>
                        <ul className="text-xs space-y-5 text-[#A3B5DF]">
                            {/* Lista con puntos */}
                            <li className="before:content-['✔'] before:mr-2 before:text-green-500 flex flex-star">
                                Execute actions across platforms like CRM, ERP.
                            </li>
                            <li className="before:content-['✔'] before:mr-2 before:text-green-500 flex flex-star">
                                Easily integrate into your existing web applications via APIs.
                            </li>
                            <li className="before:content-['✔'] before:mr-2 before:text-green-500 flex flex-star">
                                Provide personalized and contextual responses based on user
                                interactions.
                            </li>
                            <li className="before:content-['✔'] before:mr-2 before:text-green-500 flex flex-star">
                                Customer support automation, lead qualification, and operational
                                workflows.
                            </li>
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Botón para programar llamada */}
            <div className="text-7xl font-bold text-center mt-[40px] mb-[80px]">
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
        </div>
    );
};

export default About;
