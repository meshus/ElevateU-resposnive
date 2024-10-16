// components/Layout.js
import Nav from '@/components/Nav';

export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <nav className="w-[80px] lg:w-[100px] min-h-screen pt-6 lg:pt-10 hidden md:block">
          <Nav />
        </nav>
        <main className="flex-grow overflow-y-auto pb-16 md:pb-0">
          {children}
        </main>
      </div>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <Nav />
      </nav>
    </div>
  );
}
