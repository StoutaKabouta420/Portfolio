import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-600">Jacob Love</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to my personal website where I share my projects, passions, and experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Learn About Me
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800">
            <Image
              src="/images/ProfileImage.jpeg"
              alt="Jacob Love"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore My World</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projects Card */}
          <div className="bg--gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-white">Projects Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">My Projects</h3>
              <p className="text-gray-600 mb-4">Check out some of the projects I've worked on.</p>
              <Link href="/projects" className="text-blue-600 hover:underline">View Projects →</Link>
            </div>
          </div>

          {/* Passions Card */}
          <div className="bg--gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-white">Passions Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">My Passions</h3>
              <p className="text-gray-600 mb-4">Discover what I'm passionate about outside of work.</p>
              <Link href="/passions" className="text-blue-600 hover:underline">Explore Passions →</Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg--gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-white">Contact Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
              <p className="text-gray-600 mb-4">Interested in connecting? Reach out to me here.</p>
              <Link href="/contact" className="text-blue-600 hover:underline">Contact Me →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}