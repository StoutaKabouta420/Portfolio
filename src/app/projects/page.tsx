export default function ProjectsPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the project and what technologies were used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tailwind</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>
          </div>
  
          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">
                Short description of the project and what technologies were used.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    );
  }