import React from 'react';
import Card from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";

const Services = () => {
    return (
        <div className={"w-full flex"}>
            <div className={"w-full h-full flex flex-col gap-6 mx-16 my-16"}>
                <h2 className={"font-bold text-4xl"}>
                    Hizmetlerimiz
                </h2>
                <div className={"flex gap-4 md:flex-col"}>
                    <Card title={"Genel Sağlık Kontrolleri"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"} image={"/controls.jpg"}/>
                    <Card title={"Cerrahi Müdahaleler"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"} image={"/surgeon.jpg"}/>
                    <Card title={"Acil Servis"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"} image={"/emergency.jpg"}/>
                </div>
                <div className={"flex justify-between w-full"}>
                    <Button variant={"default"} size={"lg"} className={"sm:w-full"}>
                        Tüm Hizmetlerimizi İnceleyin
                    </Button>
                    <div className={"flex gap-2 items-center sm:hidden"}>
                        <p>
                            4,7/5
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"/>
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"/>
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"/>
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"/>
                            <path d="M1 1h22v22H1z" fill="none"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;