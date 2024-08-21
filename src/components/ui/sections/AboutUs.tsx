import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div id={"aboutus"} className={"w-full flex"}>
            <div className={"w-full h-full flex gap-6 mx-16 my-16"}>
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
                <div className={"flex w-full md:hidden"}>
                    <Image src={"/aboutus.jpg"} alt={"About Us"} width={1024} height={1024} className={"w-full h-full max-h-[16rem] rounded-lg object-cover"} draggable={false}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;