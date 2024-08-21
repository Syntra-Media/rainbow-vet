"use client";

import React from 'react';
import {Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Testimonial from "@/components/ui/Testimonial";

const Testimonials = () => {
    return (
        <div id={"testimonials"} className={"w-full flex"}>
            <div className={"w-full h-full flex flex-col mx-16 my-16 gap-6"}>
                <h2 className={"text-4xl font-bold"}>
                    Müşteri Yorumları
                </h2>
                <Carousel
                    plugins={[
                        // @ts-ignore
                        Autoplay({
                            delay: 5000,
                        })
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Zeynep Aksoy, Luna’nın annesi"} description={"Kedim Luna, Rainbow Veteriner Kliniği'nde her zaman harika bir bakım görüyor. Özellikle zor bir dönem geçirdiğimizde, onların gösterdiği ilgi ve uzmanlık sayesinde Luna hızla toparlandı. Artık kontrollerimize gönül rahatlığıyla gidiyoruz."} rating={9.2}/>
                        </CarouselItem>

                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Ali Kaya, Rex’in sahibi"} description={"Köpeğim Rex’in yaşadığı alerji problemiyle uzun süre baş edemedik, ancak Rainbow Veteriner Kliniği’nde aldığımız tedaviyle sorun tamamen çözüldü. Rex artık çok daha mutlu ve sağlıklı!"} rating={9.0}/>
                        </CarouselItem>

                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Selin Yılmaz, Ponçik’in sahibi"} description={"Tavşanım Ponçik için acil bir durum yaşadık ve Rainbow Veteriner Kliniği'ne başvurduk. Gece vakti olmasına rağmen hızlıca müdahale ettiler ve Ponçik’in hayatını kurtardılar. Onlara sonsuz teşekkürler!"} rating={9.5}/>
                        </CarouselItem>

                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Mert Özdemir, Leo’nun babası"} description={"Kedim Leo’nun diş problemleri için birçok klinik denedik, ama en iyi çözümü Rainbow Veteriner Kliniği’nde bulduk. Şimdi Leo, eskisi gibi rahatça yemek yiyebiliyor. Onlara minnettarım."} rating={9.3}/>
                        </CarouselItem>

                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Ayla Karaca, Çiko’nun annesi"} description={"Muhabbet kuşum Çiko, Rainbow Veteriner Kliniği'nde her zaman titizlikle tedavi ediliyor. Çiko, veteriner ziyaretlerini artık seviyor ve ben de onu güvenle emanet edebiliyorum."} rating={9.1}/>
                        </CarouselItem>

                        <CarouselItem className={"basis-1/3 md:basis-1/2 2xl:basis-1/4 sm:basis-full"}>
                            <Testimonial title={"Mehmet Can, Dino’nun sahibi"} description={"Kaplumbağamız Dino, Rainbow Veteriner Kliniği'nde gördüğü bakım sayesinde sağlığına kavuştu. Egzotik hayvanlar konusunda uzman bir ekipleri var ve her sorumuza sabırla yanıt verdiler. Dino şimdi çok daha iyi!"} rating={9.4}/>
                        </CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;