"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();
    const getNavItemClasses = (path: string) => {
        const isActive = pathname === path;
        return `p-2 md:p-3 rounded-full ${isActive ? 'bg-red-600 text-white' : 'hover:bg-red-600 hover:text-white'}`;
    };

    return (
        <ul className="flex md:flex-col justify-around md:justify-start items-center gap-2 md:gap-5 py-2 md:py-0">
            <li className={getNavItemClasses('/')}>
                <Link href="/">
                    <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" />
                    </svg>
                </Link>
            </li>
            <li className={getNavItemClasses('/chat')}>
                <Link href="/chat">
                    <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" />
                        <path d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" />
                    </svg>
                </Link>
            </li>
            <li className={getNavItemClasses('/groups')}>
                <Link href="/groups">
                    <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM5 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm14 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM7 13c-2.76 0-5 2.24-5 5v2h10v-2c0-2.76-2.24-5-5-5Zm10 0c-1.67 0-3.14.85-4 2.15.02.28.04.56.04.85v2h8v-2c0-2.76-2.24-5-4-5Z"/>
                    </svg>
                </Link>
            </li>
            <li className={getNavItemClasses('/settings')}>
                <Link href="/settings">
                    <svg className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                    </svg>
                </Link>
            </li>
        </ul>
    );
}
