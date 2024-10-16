import Image from 'next/image';
import Link from 'next/link';
import avator from '../../public/logo/logo.png';

export default function GroupChatList({ groups }) {
  return (
    <div className="divide-y divide-gray-700">
      {groups.map((group) => (
        <Link key={group.id} href={`/groups/${group.id}`} passHref>
          <div className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <Image className="w-10 h-10 border-2 border-gray-800 rounded-full" src={avator} alt="Avatar" width={40} height={40} />
              <Image className="w-10 h-10 border-2 border-gray-800 rounded-full" src={avator} alt="Avatar" width={40} height={40} />
              <span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-gray-800 rounded-full">+99</span>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-white">{group.name}</h3>
              <p className="text-sm text-gray-400 truncate">{group.lastmessage}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
