import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { PiPlant, PiRecycle, PiMicroscope, PiArrowUpRight } from 'react-icons/pi';

export default function FeatureSection() {
    const sectionRef = useRef(null);

    // Animasi scroll masuk (Reveal on Scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const el = sectionRef.current;
        if (!el) return;

        el.querySelectorAll('.reveal').forEach((item) => {
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="fitur"
            ref={sectionRef}
            aria-labelledby="fitur-heading"
            className="relative py-24 bg-[#f8faf6] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── Header Section (Buruh Tani Style) ───────────────────────── */}
                <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    {/* Kiri: Judul Utama */}
                    <div className="lg:w-7/12">
                        <h2 className="text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight leading-[1.15]">
                            <span className="text-forest-600">Solusi Pertanian Digital</span> <br className="hidden md:block" />
                            <span className="text-gray-900">Pendongkrak Efisiensi Sawah</span>
                        </h2>
                    </div>
                    
                    {/* Kanan: Deskripsi & Tombol */}
                    <div className="lg:w-5/12 flex flex-col items-start lg:items-end text-left lg:text-right gap-6">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                            Temukan fitur paling populer yang banyak dibicarakan untuk membantu Anda menghemat biaya, mencegah penyakit, dan mengolah limbah secara cerdas.
                        </p>
                        <Link
                            href={route('register')}
                            className="inline-flex items-center gap-2 bg-forest-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-forest-700 transition-colors"
                        >
                            Jelajahi Semua Fitur
                            <span className="bg-white text-forest-700 rounded-full p-1"><PiArrowUpRight className="w-4 h-4" /></span>
                        </Link>
                    </div>
                </div>

                {/* ── Main Layout Split (Asimetris) ──────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Kolom Kiri: AI Diagnosis (Kartu Utama Vertikal) */}
                    <div className="lg:col-span-7 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out">
                        <div className="flex flex-col bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all h-full p-3">
                            <div className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[1.5rem] bg-[#f8faf6] overflow-hidden group cursor-pointer border border-gray-50 mb-8">
                                <img 
                                    src="/images/daun.jpeg" 
                                    alt="Gambar AI Diagnosis" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="px-6 pb-8 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-2 bg-forest-50 text-forest-700 text-xs font-bold px-3 py-1.5 rounded-full border border-forest-100">
                                        <PiMicroscope className="text-base" />
                                        AI Diagnosis
                                    </span>
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900 mb-4 leading-tight">
                                    Deteksi Penyakit & Hama Tanaman
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow">
                                    Padi menguning atau berbercak? Cukup foto daunnya, aplikasi kami akan langsung beritahu apa penyakitnya dan rekomendasi obat yang harus dibeli.
                                </p>
                                <div className="mt-auto">
                                    <Link href={route('register')} className="inline-flex items-center gap-1.5 text-forest-600 hover:text-forest-700 font-bold text-base transition-colors group/link border-b-2 border-forest-600 pb-0.5">
                                        Coba Diagnosis Sekarang
                                        <PiArrowUpRight className="text-xl group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: 2 Fitur (Vertical Stack) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        
                        {/* Baris 1: Smart Nursery */}
                        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out flex-1">
                            <div className="flex flex-col bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all h-full p-3">
                                <div className="w-full aspect-[16/9] rounded-[1.5rem] bg-[#f8faf6] overflow-hidden group cursor-pointer border border-gray-50 mb-6">
                                    <img 
                                        src="/images/semai.jpeg" 
                                        alt="Gambar Smart Nursery" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="px-5 pb-6 flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
                                            <PiPlant className="text-base" />
                                            Smart Nursery
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900 mb-2 leading-tight">
                                        Pantau Kesehatan Bibit Harian
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        Jangan biarkan bibit mati mendadak. Pantau kelembapan dan pertumbuhan secara langsung.
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={route('register')} className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm transition-colors group/link border-b-2 border-emerald-600 pb-0.5">
                                            Pelajari selengkapnya
                                            <PiArrowUpRight className="text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Baris 2: Smart Waste DSS */}
                        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out flex-1">
                            <div className="flex flex-col bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all h-full p-3">
                                <div className="w-full aspect-[16/9] rounded-[1.5rem] bg-[#f8faf6] overflow-hidden group cursor-pointer border border-gray-50 mb-6">
                                    <img 
                                        src="/images/1.jpeg" 
                                        alt="Gambar Smart Waste" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="px-5 pb-6 flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100">
                                            <PiRecycle className="text-base" />
                                            Smart Waste DSS
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-medium text-gray-900 mb-2 leading-tight">
                                        Ubah Limbah Jadi Nilai Ekonomi
                                    </h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        Dapatkan panduan lengkap mengolah sisa panen menjadi produk bernilai tambah.
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={route('register')} className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-bold text-sm transition-colors group/link border-b-2 border-orange-600 pb-0.5">
                                            Pelajari selengkapnya
                                            <PiArrowUpRight className="text-lg group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
