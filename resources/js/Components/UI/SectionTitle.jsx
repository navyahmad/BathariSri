/**
 * BathariSri — SectionTitle Component
 *
 * Komponen judul bagian yang konsisten di setiap section Landing Page.
 * Menggabungkan Badge (label kecil), Judul Besar, dan Deskripsi Singkat.
 *
 * Props:
 * - badge:       string — Teks label kecil di atas judul (opsional)
 * - title:       string | ReactNode — Judul utama (wajib)
 * - titleAs:     'h1' | 'h2' | 'h3' — Tag heading (default: 'h2')
 * - highlight:   string — Kata dalam title yang diberi warna gradasi hijau
 * - description: string | ReactNode — Paragraf keterangan di bawah judul (opsional)
 * - align:       'left' | 'center' | 'right' (default: 'center')
 * - size:        'md' | 'lg' | 'xl' (default: 'lg')
 * - className:   string — Kelas tambahan pada container
 */
export default function SectionTitle({
    badge,
    title,
    titleAs: TitleTag = 'h2',
    highlight,
    description,
    align = 'center',
    size = 'lg',
    className = '',
}) {
    // ─── Alignment ────────────────────────────────────────────────────────
    const alignClasses = {
        left:   'items-start text-left',
        center: 'items-center text-center',
        right:  'items-end text-right',
    };

    // ─── Ukuran Judul ─────────────────────────────────────────────────────
    const titleSizeClasses = {
        md: 'text-2xl md:text-3xl lg:text-4xl',
        lg: 'text-3xl md:text-4xl lg:text-5xl',
        xl: 'text-4xl md:text-5xl lg:text-6xl',
    };

    // Highlight — Mengganti kata tertentu dalam judul dengan warna gradasi
    const renderTitle = () => {
        if (!highlight || !title || typeof title !== 'string') {
            return title;
        }
        const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase()
                ? (
                    <span key={i} className="text-gradient-forest font-serif italic">
                        {part}
                    </span>
                )
                : part
        );
    };

    return (
        <div className={`flex flex-col gap-4 ${alignClasses[align] || alignClasses.center} ${className}`}>

            {/* Badge / Label Kecil */}
            {badge && (
                <span className="badge-forest">
                    <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse-soft"
                    />
                    {badge}
                </span>
            )}

            {/* Judul Utama */}
            <TitleTag
                className={`
                    font-sans font-semibold leading-tight tracking-tight
                    text-cream-100
                    ${titleSizeClasses[size] || titleSizeClasses.lg}
                `}
            >
                {renderTitle()}
            </TitleTag>

            {/* Deskripsi */}
            {description && (
                <p className={`
                    text-forest-300/70 font-light leading-relaxed
                    max-w-2xl
                    text-sm md:text-base
                `}>
                    {description}
                </p>
            )}

        </div>
    );
}
