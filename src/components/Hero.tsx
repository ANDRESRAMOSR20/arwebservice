"use client";
import Image from "next/image";
import robot from "../assets/robot.png";
import cohete from "../assets/cohete.png";
import {motion} from "framer-motion";



const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#44A08C_60%,#DBAF6E_80%)]">

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>


            <div className="relative">
                <div className="text-7xl font-bold text-center">
                    <h1 className="text-white/100">Empower
                        your <span
                            className="from-blue-200 via-indigo-500 to-purple-500  bg-gradient-to-r text-transparent bg-clip-text">Business</span><br></br> with
                        automation</h1>
                </div>
                <motion.div
                    className="absolute lef-[100px] top-[100px] ml-[5%]"
                    drag
                >
                    <Image
                        src={cohete}
                        height="190"
                        width="190"
                        alt="cursor"
                        className="transform"
                        style={{ rotate: "-20deg" }}
                        draggable="false"
                    />


                </motion.div>

                <motion.div
                    className="absolute right-[100px] top-[100px]"
                    drag
                >
                    <Image
                        src={robot}
                        height="190"
                        width="190"
                        alt="cursor"
                        className="transform"
                        style={{ rotate: "350deg" }}
                        draggable="false"
                    />


                </motion.div>


                <iframe
                    className="block mx-auto rounded-lg m-[5%]"
                    width="800"
                    height="450"
                    src="https://www.youtube.com/embed/pRyBzZbv_IU"
                    allowFullScreen
                ></iframe>




            </div>
        </div>
    );
};

export default Hero;
