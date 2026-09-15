'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";


const slides = [
    {
        image: "/yakimamtns.jpg",
        title: "Professional Insulation Services",
        text: "Keep your home comfortable year-round with expert insulation installation."
    },
    {
        image: "/sprayfoam.jpg",
        title: "Save Energy. Lower Bills.",
        text: "High-performance attic, wall, and spray foam insulation."
    },
    {
        image: "/crew.jpg",
        title: "Trusted Yakima Insulation Experts",
        text: "Licensed, insured, and experienced."
    }
];


export default function HeroCarousel() {

    return (
        <section className="relative h-[650px] overflow-hidden">

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                speed={1000}
                fadeEffect={{
                    crossFade: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop
                className="h-full"
            >

                {slides.map((slide,index)=>(
                    <SwiperSlide key={index}>

                        <div className="relative h-full">

                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                            />

                            {/* dark overlay */}
                            <div className="absolute inset-0 bg-black/50"/>


                            <div className="
                                absolute inset-0
                                flex
                                items-center
                                justify-center
                            ">

                                <div className="
                                    mx-6
                                    max-w-xl
                                    text-white
                                    text-center
                                    transition-opacity
                                    duration-500
                                ">

                                    <h1 className="
                                        text-4xl
                                        md:text-5xl
                                        font-extrabold
                                        {/*animate-slideIn*/}
                                    ">
                                        {slide.title}
                                    </h1>


                                    <p className="
                                        mt-5
                                        text-xl
                                        {/*animate-slideInDelay*/}
                                    ">
                                        {slide.text}
                                    </p>


                                    <a
                                        href="#contact"
                                        className="
                                        mt-8
                                        inline-block
                                        rounded-md
                                        bg-orange-600
                                        px-8
                                        py-4
                                        font-semibold
                                        hover:bg-orange-700
                                        "
                                    >
                                        Get a Free Quote
                                    </a>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    )
}