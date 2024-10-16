"use client";

import { usePathname } from 'next/navigation';
import UserChatlist from '@/components/UserChatlist';

export default function ChatContent({ children, mockUserData }) {
  const pathname = usePathname();
  const isSpecificChatPage = pathname.split('/').length > 2;

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-slate-300">
      <div className={`w-full md:w-[300px] lg:w-[350px] h-full overflow-y-auto bg-white text-black ${isSpecificChatPage ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 sticky top-0 bg-white z-10 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          <UserChatlist users={mockUserData} />
        </div>
      </div>
      <main className={`flex-grow bg-white overflow-y-auto h-full md:rounded-tl-[80px] border-l-2 border-t-2 border-b-2 border-r-0 border-solid border-gray-200 relative md:bottom-[15px] ${isSpecificChatPage ? 'block' : 'hidden md:block'}`}>
        {children}
      </main>
    </div>
  );
}
