import React from 'react';
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/sections/Hero";
import AboutUs from "@/components/ui/sections/AboutUs";
import Services from "@/components/ui/sections/Services";
import Testimonials from "@/components/ui/sections/Testimonials";
import Emergency from "@/components/ui/sections/Emergency";
import ContactUs from "@/components/ui/sections/ContactUs";
import Footer from "@/components/ui/Footer";

const Page = () => {
    return (
        <div className={"flex overflow-x-hidden flex-col w-full"}>
            <Header/>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Testimonials/>
            <Emergency/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Page;