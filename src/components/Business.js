const Business = () => {
    return (
      <div className="min-h-screen bg-white text-gray-800 p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-amber-600">
          Business Courses
        </h1>
  
        <p className="text-lg max-w-3xl mx-auto text-center mb-10">
          Unlock your business potential with top-rated courses on entrepreneurship,
          marketing, finance, and leadership. Whether you're starting your own company
          or leveling up your career, our curated selection will help you gain the
          skills you need to succeed in today’s competitive world.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-amber-100 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-amber-300 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Business Course {idx + 1}</h2>
              <p className="text-gray-700 text-sm">
                Learn essential business skills such as financial analysis, team
                management, and market research.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Business;
  