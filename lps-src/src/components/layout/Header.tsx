"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about.html" },
        { name: "Services", href: "/services.html" },
        { name: "News", href: "/news.html" },
        { name: "Contact", href: "/contact.html" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 h-24 flex items-center ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 text-black" : "mix-blend-difference text-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
                    <Link href="/index.html" className="block">
                        <img
                            src="/images/logo.png"
                            alt="SOICHI"
                            className={`h-8 md:h-10 w-auto ${!isScrolled ? "invert" : ""}`}
                        />
                    </Link>

                    <div className="hidden md:flex space-x-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase font-bold tracking-widest hover:opacity-60 transition-opacity"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden focus:outline-none"
                    >
                        <Menu className="h-8 w-8" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black text-white z-[60] flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-6"
                >
                    <X className="h-8 w-8" />
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-bold tracking-widest uppercase hover:text-soichi-yellow transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Header;
