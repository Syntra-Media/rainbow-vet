import React from 'react';
import Image from "next/image";
import {ArrowRight} from "lucide-react";

type CardProps = {
    title: string;
    description: string;
    image: string;
    className?: string;
}

const Card = ({title, description, image, className}: CardProps) => {
    return (
        <div className={"flex w-full flex-col rounded-lg bg-cardComponent border border-stroke"}>
            <Image src={image} alt={"Test"} width={1024} height={1024} className={"w-full max-h-36 rounded-t-lg object-cover"} draggable={false}/>
            <div className={"w-full h-full flex"}>
                <div className={"flex flex-col gap-2 w-full h-full px-4 py-4"}>
                    <p className={"font-medium"}>
                        {title}
                    </p>
                    <p className={"text-sm text-black/50 leading-normal"}>
                        {description}
                    </p>
                    <div className={"flex w-full justify-between items-center"}>
                        <p className={"text-sm font-light"}>
                            Detaylı İncele
                        </p>
                        <ArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;