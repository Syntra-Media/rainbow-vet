import React from 'react';
import {Instagram, Linkedin, Twitter} from "lucide-react";
import {FaTiktok} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={"w-full flex bg-footer"}>
            <div className={"w-full h-full flex flex-col px-16 py-16"}>
                <div className={"w-full h-full flex md:flex-col gap-8"}>
                    <div className={"w-full h-full flex flex-col gap-2"}>
                        <h2 className={"font-bold text-xl"}>
                            Rainbow Veteriner Kliniği
                        </h2>
                        <p className={"text-sm text-black/50"}>
                            Evcil dostlarınızın sağlığı için 7/24 yanınızdayız. Profesyonel ekibimiz ve modern ekipmanlarımızla, güvenli ve sevgi dolu bir ortamda en iyi veteriner hizmetini sunuyoruz. Bize her zaman ulaşabilirsiniz!
                        </p>
                        <div className={"flex gap-4 mt-2"}>
                            <a className={"flex items-center justify-center bg-rating rounded-full w-12 h-12"} href={"https://www.instagram.com/rainbow_veteriner/"}>
                                <Instagram/>
                            </a>
                            <a className={"flex items-center justify-center bg-rating rounded-full w-12 h-12"} href={"https://www.tiktok.com/@rainbow_veteriner"}>
                                <FaTiktok />
                            </a>
                        </div>
                    </div>
                    <div className={"w-full h-full flex flex-col items-end gap-4 md:items-start"}>
                        <div className={"flex gap-4 sm:flex-col sm:gap-1"}>
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
                            <a>
                                Bize Ulaş
                            </a>
                        </div>
                        <p className={"text-xs text-black/50"}>
                            © 2024 Rainbow Veteriner Kliniği. <a href="https://syntramedia.com" target="_blank" rel="dofollow"><strong>Syntra Media</strong></a> tarafından geliştirildi. Tüm hakları saklıdır.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;