import React from 'react';
import {Phone} from "lucide-react";

const Emergency = () => {
    return (
        <div className={"w-full flex"}>
            <div className={"w-full h-full mx-16 my-16 flex flex-col gap-6"}>
                <h2 className={"text-4xl font-bold"}>
                    Acil Durumlar
                </h2>
                <div className={"w-full flex gap-4"}>
                    <div className={"flex flex-col items-center gap-4 w-64"}>
                        <div className={"flex flex-col w-64 h-32 sm:w-full md:h-48 bg-cardComponent border border-stroke rounded-lg items-center justify-center"}>
                            <p className={"text-rating font-medium text-4xl"}>
                                7/24
                            </p>
                            <p>
                                açık
                            </p>
                        </div>
                        <div className={"flex text-rating gap-2 items-center"}>
                            <Phone/>
                            <a href={"tel:+905533298167"}>
                                553 329 81 67
                            </a>
                        </div>
                    </div>
                    <p className={"w-full font-light text-black/90 sm:hidden"}>
                        Evcil dostlarınızın sağlığı bizim için her şeyden önce gelir. Bu nedenle, Rainbow Veteriner
                        Kliniği olarak haftanın 7 günü, 24 saat boyunca hizmetinizdeyiz. Acil bir durumda asla yalnız
                        değilsiniz; uzman ekibimiz, gece gündüz demeden dostlarınızın yanında. İster gece yarısı olsun,
                        ister hafta sonu, kapımız her zaman açık. Anında müdahale gerektiren durumlarda bize güvenle başvurabilirsiniz. Evcil hayvanınızın sağlığı söz konusu olduğunda, hiçbir zaman beklemek zorunda kalmayacaksınız.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Emergency;