import Image from 'next/image';
import avator from '../../public/logo/logo.png';

export default function Header(){
    return (
        <header className="px-2 sm:px-4 md:px-6 lg:px-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl">ElevateU</h1>
           
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                <form className="w-full sm:w-auto sm:flex-grow">   
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Search ..." required />
                    </div>
                </form>

                <div className='flex justify-end sm:justify-start gap-2 sm:gap-3 items-center'>
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                    </svg>

                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                    </svg>
            
                    <div className='flex items-center gap-2'>
                        <Image className="rounded-full w-6 h-6 sm:w-8 sm:h-8" width={32} height={32} src={avator} alt="User avatar"/>
                        <span className="text-xs sm:text-sm md:text-base">Jese Leos</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
