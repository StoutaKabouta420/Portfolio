export default function PassionsPage() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">My Passions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passion Section 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Music</h3>
              <p className="text-gray-600">
                Share your passion for music here. What genres do you enjoy? Do you play any instruments?
                What role does music play in your life?
              </p>
            </div>
          </div>
  
          {/* Passion Section 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Photography</h3>
              <p className="text-gray-600">
                Share your passion for photography here. What subjects do you like to capture?
                What equipment do you use? Share your perspective on this art form.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }