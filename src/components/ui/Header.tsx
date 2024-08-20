"use client"

import React, {useState} from 'react';
import {Button} from "@/components/ui/Button";
import { MenuIcon } from 'lucide-react';
import {cn} from "@/utils/cn";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={"absolute w-full h-24 flex"}>
            <div className={"flex w-full h-full mx-12 justify-between items-center text-white xl:text-lg"}>
                <div className={"flex"}>
                    Rainbow Veteriner Kliniği
                </div>
                {
                    isMenuOpen &&
                        <div className={"absolute top-0 left-0 h-screen bg-section/20 backdrop-blur w-48 flex"}>
                            <div className={"flex flex-col mx-4 my-4 gap-3"}>
                                <a>
                                    Hakkımızda
                                </a>
                                <a>
                                    Hizmetlerimiz
                                </a>
                                <a>
                                    Müşteri Yorumları
                                </a>
                                <a>
                                    Acil Durumlar
                                </a>
                                <Button variant={"default"} size={"sm"}>
                                    Bize Ulaşın
                                </Button>
                            </div>
                        </div>

                }

                <div>
                    <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant={"ghost"} size={"icon"}
                            className={"hidden md:block"}>
                        <div className="flex items-center justify-center w-full h-full">
                            <MenuIcon size={24}
                                      className={cn("transition-all", isMenuOpen ? "rotate-90" : "rotate-0")}/>
                        </div>
                    </Button>
                    <div className={"flex items-center gap-4 md:hidden"}>
                        <a>
                            Hakkımızda
                        </a>
                        <a>
                            Hizmetlerimiz
                        </a>
                        <a>
                            Müşteri Yorumları
                        </a>
                        <a>
                            Acil Durumlar
                        </a>
                        <Button variant={"default"} size={"sm"}>
                            Bize Ulaşın
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;