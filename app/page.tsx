export default function Home() {
    return (
        <main>
            {/* Header */}
            <header className="border-b border-gray-200">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <span className="text-xl font-bold">AJ Insulation LLC</span>

                    <nav className="hidden gap-8 text-sm font-medium md:flex">
                        <a href="#services" className="hover:text-blue-600">Services</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
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

            {/* Services */}
            <section id="services" className="bg-gray-50 py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-center text-3xl font-bold text-black">Our Services</h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols 4">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Attic Insulation</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Reduce energy loss with proper attic insulation.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Spray Foam</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Long-lasting, high-efficiency spray foam application.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <h3 className="text-lg font-semibold">Blown-In Insulation</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Fast, effective coverage for walls and attics.
                            </p>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
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
                    <span>✔ 5-Star Customer Reviews  </span>
                </div>
            </section>

            {/* Service Areas */}
            <section id="areas" className="bg-gray-50 py-16">
                <div className="mx-auto max-w-6xl px-6 text-center">
                    <h2 className="text-3xl font-bold">Areas We Serve</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Proudly serving Yakima, Selah, Moxee, and surrounding areas.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="mt-4 text-gray-600">
                        Contact form link here — for now, call us at{" "}
                        <a href="tel:+15097315584" className="font-semibold text-blue-600">
                            (509) 731-5584
                        </a>
                        .
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