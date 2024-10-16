"use client";

import { usePathname } from 'next/navigation';
import GroupChatList from '@/components/GroupChatList';

export default function GroupsContent({ children, groups }) {
  const pathname = usePathname();
  const isSpecificGroupPage = pathname.split('/').length > 2;

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gray-900">
      <div className={`w-full md:w-[300px] lg:w-[350px] h-full overflow-y-auto bg-gray-900 text-white ${isSpecificGroupPage ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 sticky top-0 bg-gray-900 z-10 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Groups</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          <GroupChatList groups={groups} />
        </div>
      </div>
      <main className={`flex-grow bg-gray-800 overflow-y-auto h-full md:rounded-tl-[80px] border-l-2 border-t-2 border-b-2 border-r-0 border-solid border-gray-700 relative md:bottom-[15px] ${isSpecificGroupPage ? 'block' : 'hidden md:block'}`}>
        {children}
      </main>
    </div>
  );
}
