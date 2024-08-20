import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/Button";

const Hero = () => {
    return (
        <div className={"w-full h-screen flex bg-[url('/background.jpg')] bg-cover"}>
            <div className={"w-full h-full flex flex-col items-center justify-center bg-black/60 text-white text-center"}>
                <h1 className={"font-medium text-6xl  leading-[1.1] w-2/3 md:text-4xl 2xl:text-7xl mobile:w-full"}>
                    En iyi dostlarınız için, güvenilir veteriner hizmetleri
                </h1>
                <p className={"text-lg font-light mobile:text-sm"}>
                    Ulus ve Beşiktaş&apos;ın Kalbindeki Rainbow Veteriner Kliniği
                </p>
                <Button size={"lg"} variant={"default"} className={"mt-3"}>
                    Randevu Alın
                </Button>
            </div>

        </div>
    );
};

export default Hero;