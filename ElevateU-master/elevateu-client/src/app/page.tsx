// pages/index.js (Home page)
import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full pb-2 sm:pb-3 md:pb-4 bg-white pt-2 sm:pt-3 md:pt-5 lg:pt-7 px-2 sm:px-3 md:px-5 lg:px-7">
        <Header />
        <main className="flex-grow overflow-y-auto no-scrollbar pt-2 sm:pt-3 md:pt-4 lg:pt-5">
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </main>
      </div>
    </Layout>
  );
}
