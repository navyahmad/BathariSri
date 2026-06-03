import React, { useEffect, useRef } from 'react';
import { PiLeafFill, PiQuotesFill } from 'react-icons/pi';

export default function AboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const reveals = entry.target.querySelectorAll('.reveal');
                        reveals.forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.remove('opacity-0', 'translate-y-10');
                                el.classList.add('opacity-100', 'translate-y-0');
                            }, index * 150); // Staggered animation
                        });
                    }
                });
            },
            { threshold: 0.15 } // Trigger when 15% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="tentang"
            ref={sectionRef}
            aria-labelledby="tentang-heading"
            className="relative py-24 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* ── Kiri: Visual / Fotografi ── */}
                    <div className="w-full lg:w-1/2 reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                        <div className="relative">
                            {/* Dekorasi Latar Belakang */}
                            <div className="absolute -inset-4 bg-forest-50 rounded-[4rem] transform -rotate-3 z-0"></div>
                            <div className="absolute -inset-4 bg-emerald-50/50 rounded-[4rem] transform rotate-2 z-0"></div>
                            
                            {/* Gambar Utama */}
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-forest-900/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                                <img
                                    src="/images/dewisri.webp"
                                    alt="Petani menggunakan teknologi di sawah"
                                    className="w-full h-full object-cover object-[center_65%] hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                {/* Gradasi overlay lembut agar gambar tidak terlalu mentah */}
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent mix-blend-multiply"></div>
                            </div>

                            
                        </div>
                    </div>

                    {/* ── Kanan: Teks & Filosofi ── */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-100 ease-out">
                           
                            <h2 
                                id="tentang-heading"
                                className="text-4xl sm:text-5xl lg:text-[52px] font-medium text-gray-900 leading-[1.15] tracking-tight mb-8"
                            >
                                Memadukan Kearifan Lokal dengan <span className="text-forest-600 font-serif italic">Kecerdasan</span> Masa Depan.
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
                            <p>
                                Terinspirasi dari sosok agung <strong>Dewi Sri</strong> simbol kesuburan dan pelindung panen di Nusantara kami membangun BathariSri bukan sekadar sebagai perangkat lunak, melainkan sebagai sebuah pergerakan.
                            </p>
                            <p>
                                Melalui kecerdasan buatan (AI) yang mutakhir, kami bertujuan untuk mengembalikan senyum kebanggaan di wajah para pahlawan pangan kita. Dari melindungi setiap helai padi dari penyakit, hingga menjaga harmoni alam dari limbah yang tak terkelola.
                            </p>
                        </div>

                        {/* Blok Kutipan */}
                        <div className="mt-10 p-8 rounded-2xl bg-[#f8faf6] border-l-4 border-forest-500 relative reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
                            <PiQuotesFill className="absolute top-6 right-6 w-12 h-12 text-forest-600/10" />
                            <p className="text-xl font-serif italic text-gray-800 leading-snug relative z-10">
                                "Teknologi terhebat bukanlah yang menggantikan sentuhan tangan manusia, melainkan yang memampukan mereka bertumbuh melampaui batasnya."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
