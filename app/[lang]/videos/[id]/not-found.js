'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const id = pathname?.split('/').pop();
    
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">
                This video with <span className="text-blue-400">{id}</span> was not found!
            </h2>
            <p className="text-gray-100 mb-4">Could not find the requested resource</p>
            <Link href="/videos" className="text-blue-400 text-primary hover:underline text-lg font-medium">
                Return Home
            </Link>
        </div>
    );
}
