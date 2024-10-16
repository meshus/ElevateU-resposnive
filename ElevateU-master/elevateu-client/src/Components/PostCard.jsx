// pages/PostCard.tsx
"use client";
import Image from 'next/image';
import avator from '../../public/logo/logo.png';
import SocialMediaPostCarousel from './ui/ImageSlider';

export default function PostCard() {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-2 sm:p-3 md:p-4 flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <Image className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" width={40} height={40} src={avator} alt="User avatar"/>
        <div>
          <p className="font-semibold text-sm sm:text-base">John Doe</p>
          <p className="text-gray-500 text-xs sm:text-sm">Posted 2h ago</p>
        </div>
      </div>
      
      <div className="w-full h-48 sm:h-64 md:h-80 relative">
        <Image
          src={avator} // Replace with your actual image source
          alt="Post image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div className="p-2 sm:p-3 md:p-4">
        <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3">This is a sample post content. It can be longer and will wrap to the next line if needed.</p>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 sm:gap-3'>
            <button>
              <svg aria-label="Like" className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
            </button>
            <button>
              <svg aria-label="Comment" className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
            </button>
          </div>
          <div className='flex gap-2 sm:gap-3'>
            <button>
              <svg aria-label="Share" className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </button>
            <button>
              <svg aria-label="Save" className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500" fill="currentColor" role="img" viewBox="0 0 24 24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
