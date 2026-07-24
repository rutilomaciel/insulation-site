'use client';

import {useState, useEffect} from "react";
import Image from "next/image";

const projects = [
    {src: '/projects/ins ceiling.jpg', alt: 'Insulation - Ceiling'},
    {src: '/projects/walls dirt.jpg', alt: 'Walls - Before'},
    {src: '/projects/ins plastic.jpg', alt: 'Insulation - Plastic'},
    {src: '/projects/ins walls.jpg', alt: 'Insulation - Walls'},
    {src: '/projects/wood ceiling.jpg', alt: 'Wood Ceiling'},
    {src: '/projects/white ceiling.jpg', alt: 'White Ceiling'},
];

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length)
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-center text-3xl font-bold mb-10">Recent Projects</h2>

                <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden carousel-animate">
                    {/* Image */}
                    <Image
                        src={projects[currentIndex].src}
                        alt={projects[currentIndex].alt}
                        fill
                        className="object-cover"
                    />

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
                    >
                        ‹
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/*<p className="text-center text-sm text-gray-600 mt-4">*/}
                {/*    Image {currentIndex + 1} of {projects.length}*/}
                {/*</p>*/}
            </div>
        </section>
    );
}