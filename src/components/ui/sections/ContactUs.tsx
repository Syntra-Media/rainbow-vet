import React from 'react';
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import Image from "next/image";
import {MapPinHouse, Phone} from "lucide-react";

const ContactUs = () => {
    return (
        <div id={"contactus"} className={"w-full flex"}>
            <div className={"w-full h-full flex flex-col gap-6 mx-16 my-16"}>
                <h2 className={"text-4xl font-bold"}>
                    Bize Ulaş
                </h2>
                <div className={"w-full h-full flex gap-4"}>
                    <div className={"flex flex-col gap-4 w-full h-full sm:hidden"}>
                        <div className={"w-full h-60"}>
                            <Image src={"/map.png"} alt={"Map"} width={1024} height={1024} className={"w-full h-full object-cover"} draggable={false}/>
                        </div>
                        <div className={"flex flex-col gap-4 w-full"}>
                            <div className={"flex gap-2 items-center"}>
                                <div className={"flex w-11 h-11 justify-center items-center rounded-full bg-rating"}>
                                    <MapPinHouse className={"text-white"}/>
                                </div>
                                <p className={""}>
                                    Öz Topuz Cd. Huzur Apartmanı No:5/B, Beşiktaş/İstanbul
                                </p>
                            </div>
                            <div className={"flex gap-2 items-center"}>
                                <div className={"flex w-11 h-11 justify-center items-center rounded-full bg-rating"}>
                                    <Phone className={"text-white"}/>
                                </div>
                                <p className={""}>
                                    <a href={"tel:+905533298167"}>
                                        553 329 81 67
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full h-full gap-4"}>
                        <form className={"flex flex-col gap-4 w-full h-full"}>
                            <div className={"flex gap-4"}>
                                <Input placeholder={"Ad Soyad"} type={"text"}/>
                                <Input placeholder={"Telefon Numarası"} type={"tel"}/>
                            </div>
                            <Input placeholder={"E-Posta Adresi"} type={"email"}/>
                            <Input placeholder={"Mesajınız"} type={"text"} className={"h-64"}/>
                            <Button type={"submit"} className={"w-full"}>
                                Gönder
                            </Button>
                        </form>
                        <div className={"flex flex-col w-full h-full gap-2 justify-center text-center text-sm text-black/50"}>
                            <Image src={"/map.png"} alt={"Map"} width={1024} height={1024} className={"hidden sm:block w-96 h-96 object-cover"} draggable={false}/>
                            <p>
                                Öz Topuz Cd. Huzur Apartmanı No:5/B, Beşiktaş/İstanbul
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;