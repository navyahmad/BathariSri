import { forwardRef } from 'react';

/**
 * BathariSri — BentoCard Component
 *
 * Wadah serba guna bergaya Glassmorphism yang dipakai sebagai
 * "kotak Bento" di seluruh halaman. Satu sumber, konsisten di mana-mana.
 *
 * Props:
 * - variant:   'default' | 'solid' | 'highlighted' | 'ghost'
 * - size:      'sm' | 'md' | 'lg' | 'xl' — Mengontrol padding dalam kartu
 * - glow:      boolean — Efek pendaran hijau di bawah kartu
 * - hoverable: boolean — Aktifkan efek hover (border menyala, shadow naik)
 * - rounded:   'lg' | 'xl' | '2xl' | '3xl' (default: '2xl')
 * - as:        'div' | 'article' | 'section' — Tag HTML yang dirender
 * - className: string — Kelas Tailwind tambahan
 * - children:  ReactNode
 */
const BentoCard = forwardRef(function BentoCard(
    {
        children,
        variant = 'default',
        size = 'md',
        glow = false,
        hoverable = false,
        rounded = '2xl',
        as: Tag = 'div',
        className = '',
        ...props
    },
    ref
) {
    // ─── Padding Ukuran ───────────────────────────────────────────────────
    const sizeClasses = {
        sm: 'p-4',
        md: 'p-5 md:p-6',
        lg: 'p-6 md:p-8',
        xl: 'p-8 md:p-10',
    };

    // ─── Border Radius ────────────────────────────────────────────────────
    const roundedClasses = {
        lg:   'rounded-lg',
        xl:   'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        '4xl': 'rounded-4xl',
    };

    // ─── Variasi Kartu ────────────────────────────────────────────────────
    const variantClasses = {
        // Kaca Default — Latar buram gelap dengan border hijau tipis
        default: `
            bg-dark-card/60
            backdrop-blur-md
            border border-dark-border/80
        `,
        // Solid — Sedikit lebih tebal dan nyata, cocok untuk area utama
        solid: `
            bg-dark-card
            border border-dark-border
        `,
        // Highlighted — Border lebih terang, cocok untuk fitur unggulan
        highlighted: `
            bg-dark-surface/70
            backdrop-blur-md
            border border-forest-500/30
        `,
        // Ghost — Sangat transparan, cocok untuk sub-konten atau wrapper
        ghost: `
            bg-transparent
            border border-dark-border/40
        `,
    };

    // ─── Efek Hover ───────────────────────────────────────────────────────
    const hoverClasses = hoverable
        ? `
            cursor-pointer
            transition-all duration-400 ease-out
            hover:border-forest-500/40
            hover:shadow-card-hover
            hover:bg-dark-card/80
        `
        : 'transition-colors duration-300';

    // ─── Efek Glow ────────────────────────────────────────────────────────
    const glowClasses = glow
        ? 'shadow-forest-md'
        : '';

    return (
        <Tag
            ref={ref}
            className={`
                relative overflow-hidden
                ${sizeClasses[size] || sizeClasses.md}
                ${roundedClasses[rounded] || roundedClasses['2xl']}
                ${variantClasses[variant] || variantClasses.default}
                ${hoverClasses}
                ${glowClasses}
                ${className}
            `}
            {...props}
        >
            {/* Kilau tepi tipis di sudut kiri atas — sentuhan "crafted" */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(130,178,112,0.07) 0%, transparent 50%)',
                }}
            />

            {/* Konten */}
            <div className="relative z-10">
                {children}
            </div>
        </Tag>
    );
});

export default BentoCard;
