'use client'
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeOpenText, faSignOutAlt, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Force zoom to 1 to override global zoom: 0.8 which causes white gaps
    document.documentElement.style.zoom = "1";
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <div className="flex h-screen w-screen bg-black text-black font-sans overflow-hidden">
      {/* Sidebar - Fixed height and width */}
      <aside className="w-20 md:w-64 h-screen bg-black text-white flex flex-col items-center md:items-stretch py-8 border-r border-gray-800 z-[60] shrink-0 transition-all">
        <div className="px-6 mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E61F93] rounded-full flex items-center justify-center shrink-0">
            <FontAwesomeIcon icon={faThLarge} className="text-white" />
          </div>
          <span className="hidden md:block font-black text-xl tracking-tighter">CodeWrote <span className="text-[#E61F93]">Admin</span></span>
        </div>

        <nav className="flex-grow space-y-2 px-3">
          <Link 
            href="/admin/blogs"
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${isActive('/admin/blogs') ? 'bg-[#E61F93] text-white' : 'hover:bg-gray-900 text-gray-400'}`}
          >
            <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
            <span className="hidden md:block font-bold">Blog Management</span>
          </Link>
          
          <Link 
            href="/admin/leads"
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${isActive('/admin/leads') ? 'bg-[#E61F93] text-white' : 'hover:bg-gray-900 text-gray-400'}`}
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-xl" />
            <span className="hidden md:block font-bold">Leads & Enquiries</span>
          </Link>
        </nav>

        <div className="px-3 pt-8 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-red-500/10 text-red-500 transition-all font-bold"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area - Full height and flex grow */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden bg-white">
        {children}
      </main>
    </div>
  );
}
