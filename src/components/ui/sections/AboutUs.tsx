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
                        
Ulus ve Beşiktaş&apos;ın kalbinde yer alan Rainbow Veteriner Kliniği, İstanbul&apos;daki en güvenilir ve en kapsamlı veteriner hizmetlerini sunmaktadır. 7/24 açık olan kliniğimiz, acil durumlar dahil olmak üzere cerrahi müdahaleler, genel sağlık kontrolleri ve aşılamadan, parazit tedavilerine kadar geniş bir hizmet yelpazesi sunmaktadır. Zorlu, Kuruçeşme ve Rumelihisarı gibi çevre semtlerdeki evcil hayvan sahiplerine de kaliteli ve etkili veteriner hizmeti sunarak, dostlarınızın sağlığını ön planda tutuyoruz. Uzman kadromuz ve modern ekipmanlarımız ile, evcil hayvanlarınızın ihtiyaç duyduğu her an yanınızdayız. Rainbow Veteriner Kliniği, en iyi dostlarınızın sağlığı ve güvenliği için tercih edeceğiniz en doğru adres!
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutUs;