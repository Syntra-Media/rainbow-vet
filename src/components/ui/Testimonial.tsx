import React from 'react';
import {PawPrint} from "lucide-react";

type TestimonialProps = {
    title: string;
    description: string;
    rating: number;
}

const Testimonial = ({title, description, rating}: TestimonialProps) => {
    return (
        <div className={"relative rounded-lg bg-cardComponent border border-stroke w-full h-full flex overflow-hidden"}>
            <div className={"relative px-4 py-4 flex flex-col w-full h-full gap-2"}>
                <p className={"text-sm text-black/50"}>
                    {description}
                </p>
                <div className={"flex mt-auto justify-between items-center text-sm"}>
                    <p>
                        — {title}
                    </p>
                    <div className={"text-rating text-sm gap-2 items-center flex"}>
                        <p>{rating}</p>
                        <PawPrint size={16}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;