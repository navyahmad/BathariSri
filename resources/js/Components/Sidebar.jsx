import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    FiGrid, 
    FiCamera, 
    FiWind, 
    FiTrash2, 
    FiSettings, 
    FiLogOut,
    FiX
} from 'react-icons/fi';
import { FaRecycle } from 'react-icons/fa6';

export default function Sidebar({ isOpen, onClose }) {
    const { url, props } = usePage();
    const user = props.auth.user;

    const menuItems = [
        { name: 'Dashboard', icon: FiGrid, route: 'dashboard', href: route('dashboard') },
        { name: 'Smart Nursery', icon: FiWind, route: 'smart-nursery', href: route('smart-nursery') },
        { name: 'AI Diagnosis', icon: FiCamera, route: 'diagnosis', href: route('diagnosis') },
        { name: 'Smart Waste', icon: FaRecycle, route: 'smart-waste', href: route('smart-waste') },
    ];

    const isCurrentRoute = (routeName) => {
        return route().current(routeName) || url.startsWith(`/${routeName}`);
    };

    const SidebarContent = () => (
        <div className="flex h-full flex-col justify-between">
            <div>
                <div className="flex items-center justify-between px-2 mb-8">
                    <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="BathariSri Home">
                        <div className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center text-white">
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                                <path d="M12 3C7.5 3 4 7 4 11.5c0 2.8 1.5 5.3 3.8 6.8L12 21l4.2-2.7C18.5 16.8 20 14.3 20 11.5 20 7 16.5 3 12 3z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="leading-none flex items-center">
                            <span className="text-xl font-semibold tracking-tight text-gray-900 font-sans">
                                Bathari<span className="text-forest-600">Sri</span>
                            </span>
                        </div>
                    </Link>
                    {/* Close button for mobile only */}
                    <button 
                        onClick={onClose} 
                        className="lg:hidden text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                <div className="space-y-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        const active = isCurrentRoute(item.route);

                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    active 
                                    ? 'bg-forest-600 text-white shadow-md' 
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-forest-50'
                                }`}
                            >
                                <Icon size={20} className={active ? 'text-white' : 'text-gray-400'} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section */}
            <div>
                <div className="border-t border-gray-100 my-4"></div>
                
                <Link
                    href={route('profile.edit')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isCurrentRoute('profile.edit')
                        ? 'bg-forest-600 text-white shadow-md'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-forest-50'
                    }`}
                >
                    <FiSettings size={20} className={isCurrentRoute('profile.edit') ? 'text-white' : 'text-gray-400'} />
                    <span>Pengaturan</span>
                </Link>
                
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-all duration-300"
                >
                    <FiLogOut size={20} className="text-red-400" />
                    <span>Keluar</span>
                </Link>
                
                {/* Mini Profile Card */}
                <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-forest-600 font-bold text-lg">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate capitalize">{user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Floating Card) */}
            <div className="hidden lg:block w-72 h-[calc(100vh-2rem)] shrink-0 m-4">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full bg-white rounded-[2rem] shadow-sm p-6 overflow-y-auto hide-scrollbar"
                >
                    <SidebarContent />
                </motion.div>
            </div>

            {/* Mobile Sidebar (Drawer Overlay) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white p-6 z-50 lg:hidden shadow-xl rounded-r-[2rem]"
                        >
                            <SidebarContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
