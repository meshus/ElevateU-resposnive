import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <div className="flex h-[60px] w-full justify-between items-center px-4 py-2 bg-white border-t border-gray-200">
      <Link href="/" className="flex flex-col items-center">
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        <span className="text-xs">Home</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center">
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.486 0 0 3.589 0 8c0 2.908 1.898 5.515 5 6.934V20l5.34-5.34C17.697 13.713 20 10.215 20 8c0-4.411-4.486-8-10-8zm0 14h-.5c-.422 0-.777-.259-.935-.648L8 12h4l-.564 1.352c-.159.389-.514.648-.936.648H10z"/>
        </svg>
        <span className="text-xs">Chat</span>
      </Link>
      {/* Add more navigation items as needed */}
    </div>
  )
};

export default BottomNavigation;
