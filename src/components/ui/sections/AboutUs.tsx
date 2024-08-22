"use client";

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div id={"aboutus"} className={"w-full flex"}>
            <motion.div className={"w-full h-full flex gap-12 mx-16 my-16"}
                        whileInView={{opacity: 1}}
                        initial={{opacity: 0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}}
            >
                <div className={"flex md:hidden"}>
                    <Image src={"/aboutus.jpg"} alt={"About Us"} width={1024} height={1024} className={"max-w-[36rem] max-h-[16rem] object-cover rounded-xl"} draggable={false}/>
                </div>
                <div className={"flex flex-col gap-4 w-full"}>
                    <h2 className={"font-bold text-4xl"}>
                        Hakkımızda
                    </h2>
                    <p className={"leading-normal text-black/60"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui ac nunc ultrices
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;