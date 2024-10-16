import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();
    const getNavItemClasses = (path) => {
        const isActive = pathname === path;
        return `p-2 rounded-full ${isActive ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'}`;
    };

    return (
        <ul className="flex flex-col items-center gap-4">
            <li className={getNavItemClasses('/')}>
                <Link href="/">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" />
                    </svg>
                </Link>
            </li>
            {/* Add more nav items here */}
        </ul>
    );
}
