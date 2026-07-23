'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectCarousel from './components/ProjectCarousel';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xojgworw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <main>
            {/* Header */}
            <header className="border-b border-gray-200 bg-[#faf3e8]">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Image
                        src="/AJ Logo F.png"
                        alt="AJ Insulation LLC"
                        width={120}
                        height={80}
                        className="h-24 w-auto"
                        />

                    <nav className="hidden gap-8 md:flex">
                        <a
                            href="#services"
                            className="flex items-center font-semibold text-black hover:text-orange-600 transition-colors"
                            style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '16px' }}
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center font-semibold text-black hover:text-orange-600 transition-colors"
                            style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: '16px' }}
                        >
                            Contact
                        </a>
                    </nav>
                    <a
                        href="tel:+15097315584"
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        (509) 731-5584
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-aito max-w-6xl px-6 py-20 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                    Professional Insulation Services in Yakima
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                    Save on energy and bills and keep your home comfortable year-round with
                    expert attic, wall, and spray foam insulation installation.
                </p>
                <a
                    href="#contact"
                    className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white
                    hover:bg-blue-700"
                >
                    Get a Free Quote
                </a>
            </section>

            <ProjectCarousel/>

            {/* Services */}
            <section id="services" className="bg-gray-50 py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-center text-3xl font-bold text-black">Our Services</h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols 4">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <h3 className="text-lg font-semibold">Attic Insulation</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Reduce energy loss with proper attic insulation.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <h3 className="text-lg font-semibold">Spray Foam</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Long-lasting, high-efficiency spray foam application.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <h3 className="text-lg font-semibold">Blown-In Insulation</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Fast, effective coverage for walls and attics.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm
                        transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                            <h3 className="text-lg font-semibold">Insulation Removal</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Safe removal of old or damaged insulation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals*/}
            <section className="py-12">
                <div className="mx-auto max-w-6xl flex-wrap justify-center gap-10 px-6
                text-center text-sm font-medium text-gray-700">
                    <span>✔ Licensed & Insured  </span>
                    <span>✔ 15+ Years Experience  </span>
                    <span>✔ Free Estimates  </span>
                </div>
            </section>

            {/* Service Areas */}
            <section id="areas" className="bg-gray-50 py-16">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h2 className="text-3xl font-bold">Areas We Serve</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Proudly serving Yakima, Selah, Moxee, Sunnyside, Ellensburg, Cle Elum, Tri-Cities and surrounding areas.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16">
                <div className="mx-auto max-w-2xl px-6">
                    <h2 className="text-center text-3xl font-bold">Get in Touch</h2>

                    {submitted && (
                        <div className="mt-6 rounded-lg bg-green-100 p-4 text-center text-green-800">
                            ✓ Thanks for reaching out! We'll contact you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />

                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        >
                            <option value="">Select a Service</option>
                            <option value="Attic Insulation">Attic Insulation</option>
                            <option value="Spray Foam">Spray Foam</option>
                            <option value="Blown-In Insulation">Blown-In Insulation</option>
                            <option value="Insulation Removal">Insulation Removal</option>
                            <option value="Other">Other</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                        >
                            Send Inquiry
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Or call us directly at{" "}
                        <a href="tel:+15097315584" className="font-semibold text-blue-600">
                            (509) 731-5584
                        </a>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} AJ Insulation LLC. All rights reserved.
            </footer>
        </main>
    );
}