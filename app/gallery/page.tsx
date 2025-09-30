import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      <nav className="fixed top-0 w-full z-50 glass-nav p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Kuan Wei Chen</h1>
          <div className="hidden md:flex space-x-6">
            <Link href="/#about" className="text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#projects" className="text-white/90 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/#experience" className="text-white/90 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="/#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/gallery" className="text-white/90 hover:text-white transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DeerDiary Project Card */}
          <div className="glass-card border-0 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">DeerDiary</h3>
            <p className="text-gray-300 mb-4">A personal diary application built with Next.js.</p>
            <a href="https://terrifygary.github.io/DeerDiary.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              View DeerDiary
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* DeerDiary Project Card */}
          <div className="glass-card border-0 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">DND Team Flower</h3>
            <p className="text-gray-300 mb-4">A DND Logging application built with Next.js.</p>
            <a href="https://terrifygary.github.io/DND_TEAMFlower.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              View DeerDiary
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </div>
  );
}
