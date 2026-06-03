import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FiSettings, FiSearch, FiBell, FiMoreVertical } from 'react-icons/fi';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Pengaturan Akun" />

            <div className="w-full px-2 lg:px-4 pb-4 lg:pb-0 lg:h-full flex flex-col lg:min-h-0">
                {/* Floating Header Pill */}
                <div className="hidden lg:flex items-center justify-between mb-8 shrink-0">
                    <div className="hidden md:flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm">
                        <div className="bg-forest-50 p-2 rounded-full text-forest-500">
                            <FiSettings size={18} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">Pengaturan Akun</span>
                    </div>
                    
                    {/* Right side consistent with Dashboard */}
                    <div className="flex items-center gap-3 ml-auto">
                        <button className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-[1.25rem] shadow-md hover:bg-gray-800 transition-colors">
                            <FiSearch size={20} />
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center bg-forest-100 text-forest-600 rounded-[1.25rem] shadow-sm hover:bg-forest-200 transition-colors relative">
                            <FiBell size={20} />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-forest-100"></span>
                        </button>
                        <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-[1.25rem] shadow-sm cursor-pointer border border-transparent hover:border-gray-100 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="hidden sm:block text-left">
                                <p className="text-sm font-bold text-gray-900 leading-tight">{user.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                            </div>
                            <FiMoreVertical className="text-gray-400 ml-2" />
                        </div>
                    </div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6 lg:flex-1 lg:min-h-0 lg:overflow-y-auto hide-scrollbar pb-8 max-w-4xl mx-auto w-full"
                >
                    <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm p-6 sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm p-6 sm:p-8">
                        <UpdatePasswordForm />
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white rounded-[2rem] shadow-sm p-6 sm:p-8 border border-red-50">
                        <DeleteUserForm />
                    </motion.div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
}
