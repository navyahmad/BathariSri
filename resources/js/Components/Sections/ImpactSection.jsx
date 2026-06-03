import { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { PiPlant, PiRecycle, PiCloudSun, PiLeaf, PiArrowUpRight } from 'react-icons/pi';

export default function ImpactSection() {
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

    const sdgCards = [
        {
            code: 'SDG 2',
            title: 'Zero Hunger',
            desc: 'Deteksi dini penyakit mencegah gagal panen, menjaga ketahanan pangan.',
            icon: <PiPlant />,
        },
        {
            code: 'SDG 12',
            title: 'Responsible Consumption',
            desc: 'Limbah pertanian diolah menjadi kompos atau briket — bukan dibakar.',
            icon: <PiRecycle />,
        },
        {
            code: 'SDG 13',
            title: 'Climate Action',
            desc: 'Sistem Pakar mengkalkulasi emisi CO₂ yang berhasil dicegah dari pembakaran.',
            icon: <PiCloudSun />,
        },
        {
            code: 'SDG 15',
            title: 'Life on Land',
            desc: 'Penggunaan pupuk organik dari limbah menjaga ekosistem tanah sehat.',
            icon: <PiLeaf />,
        },
    ];

    return (
        <section
            id="dampak"
            ref={sectionRef}
            aria-labelledby="dampak-heading"
            className="relative bg-white overflow-hidden pb-24"
        >
            {/* ── 1. Big Image Typography (Terinspirasi "Buruh Tani" Hero) ── */}
            <div className="relative w-full h-[60vh] min-h-[400px] mb-20 overflow-hidden">
                <img 
                    src="/images/7.jpeg" 
                    alt="Pemandangan Sawah" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Teks Besar Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-[14vw] md:text-[180px] font-bold text-white/95 tracking-tighter leading-none mix-blend-overlay text-center select-none uppercase">
                        Dampak
                    </h2>
                </div>

                {/* Subtext overlay di bawah kiri */}
                <div className="absolute bottom-8 left-4 md:left-12 flex gap-8 md:gap-16 text-white text-sm md:text-base font-medium tracking-wide">
                    <span>// Keberlanjutan</span>
                    <span className="hidden md:inline-block">Kesejahteraan Petani</span>
                    <span className="hidden sm:inline-block">Inovasi Teknologi</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── 2. Massive Text Paragraph (Menggantikan Angka/Counter) ── */}
                <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out mb-32 max-w-5xl mx-auto relative px-4">
                    <span className="text-gray-400 font-semibold tracking-widest text-sm uppercase block mb-6">
                        // Memanen Warisan Masa Depan
                    </span>
                    
                    <h3 className="text-3xl md:text-5xl lg:text-[54px] font-medium text-gray-900 leading-[1.3] md:leading-[1.2] tracking-tight">
                        BathariSri didedikasikan untuk menciptakan masa depan pertanian yang lebih adil dan berkelanjutan. Kami percaya bahwa kekuatan nyata berada di tangan{' '}
                        <span className="text-gray-400">petani sebagai aktor utama</span>. Kami memberdayakan pahlawan pangan dengan kecerdasan buatan untuk meningkatkan kesejahteraan dan produktivitas.
                    </h3>

                    {/* Floating Thumbnail Images (Aksen Desain Humanis) */}
                    <div className="hidden md:block absolute -left-28 top-32 w-36 h-24 rounded-xl overflow-hidden shadow-2xl -rotate-12 border-[6px] border-white hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-10">
                        <img src="/images/petani1.jpeg" alt="Petani 1" className="w-full h-full object-cover bg-gray-200" />
                    </div>
                    <div className="hidden lg:block absolute -right-20 bottom-4 w-44 h-32 rounded-xl overflow-hidden shadow-2xl rotate-6 border-[6px] border-white hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-10">
                        <img src="/images/petani2.jpeg" alt="Petani 2" className="w-full h-full object-cover bg-gray-200" />
                    </div>
                </div>

                {/* ── 3. SDG Cards (Agenda Global - Split Layout) ── */}
                <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-t border-gray-200 pt-16">
                        
                        {/* Kiri: Teks & Penjelasan */}
                        <div className="lg:col-span-5 max-w-xl">
                            <h4 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-gray-900 mb-6 tracking-tight leading-[1.15]">
                                Mendukung Agenda <span className="text-forest-600">Global</span>
                            </h4>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                Setiap fitur kami rancang selaras dengan target Tujuan Pembangunan Berkelanjutan (SDGs). Teknologi AI dan sensor cerdas kami berkontribusi langsung dalam menjaga ketahanan pangan dan kelestarian alam secara nyata.
                            </p>
                            <Link href={route('register')} className="inline-flex items-center gap-2 text-forest-600 font-medium hover:text-forest-700 transition-colors group text-lg">
                                <span className="border-b-2 border-forest-600 pb-0.5">Lihat Semua Inisiatif</span>
                                <PiArrowUpRight className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Kanan: Grid SDG */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {sdgCards.map((sdg, idx) => (
                                <div key={sdg.code} className={`flex flex-col bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all ${idx % 2 === 1 ? 'sm:mt-12' : ''}`}>
                                    <div className="w-14 h-14 rounded-2xl bg-[#f8faf6] border border-gray-200 text-forest-600 flex items-center justify-center text-3xl mb-6 transition-colors duration-300">
                                        {sdg.icon}
                                    </div>
                                    <span className="text-xs font-bold text-forest-600 uppercase tracking-widest mb-3 block">
                                        {sdg.code}
                                    </span>
                                    <h5 className="text-xl font-medium text-gray-900 mb-3">
                                        {sdg.title}
                                    </h5>
                                    <p className="text-base text-gray-500 leading-relaxed">
                                        {sdg.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── 4. Final CTA (Call to Action - Split Box) ── */}
                <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
                    <div className="relative rounded-[3rem] bg-[#f8faf6] overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-100 shadow-sm">
                        
                        {/* Kiri: Teks & Tombol */}
                        <div className="w-full md:w-6/12 lg:w-5/12 p-10 md:p-16 flex flex-col justify-center relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-forest-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm self-start">
                                Gratis untuk Petani
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium text-gray-900 leading-[1.15] tracking-tight mb-6">
                                Siap Membawa Sawah Anda ke Era <span className="text-forest-600 font-serif italic">Digital?</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                                Bergabunglah dengan platform pertanian cerdas dan mulai perjalanan menuju panen yang lebih sehat, lebih melimpah, dan berkelanjutan.
                            </p>
                            
                            <div className="flex flex-col xl:flex-row gap-4">
                                <Link 
                                    href={route('register')} 
                                    className="inline-flex items-center justify-center bg-forest-600 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-forest-700 transition-colors text-center"
                                >
                                    Buat Akun
                                </Link>
                                <Link 
                                    href={route('login')} 
                                    className="inline-flex items-center justify-center bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-medium text-base hover:bg-gray-50 transition-colors text-center"
                                >
                                    Masuk Sekarang
                                </Link>
                            </div>
                        </div>

                        {/* Kanan: Gambar Penuh dengan Gradasi Transisi */}
                        <div className="w-full md:w-6/12 lg:w-7/12 min-h-[400px] relative">
                            <img 
                                src="/images/7.jpeg" 
                                alt="Sawah Digital" 
                                className="absolute inset-0 w-full h-full object-cover" 
                            />
                            {/* Gradient transisi dari warna background kartu ke gambar transparan */}
                            <div className="absolute top-0 bottom-0 left-0 w-32 md:w-48 bg-gradient-to-r from-[#f8faf6] to-transparent"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
