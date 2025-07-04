const About = () => {
   return (
     <div className="min-h-screen bg-orange-400 mask-b-from-20  text-black p-12 ">
       <h1 className="text-5xl font-black mb-8 text-center font-serif z-50  text-black">About</h1>
 
       <div className="max-w-4xl mx-auto text-lg leading-relaxed bg-white p-8 rounded-lg shadow-md">
         <p className="mb-4">
           <strong>CourseMatch</strong> is a smart, user-focused platform that helps learners discover and compare the best online courses tailored to their interests and goals. By aggregating data from leading learning platforms, CourseMatch offers a curated experience where users can:
         </p>
 
         <ul className="list-disc list-inside space-y-2">
           <li>📚 Explore top-rated courses across categories like development, design, business, and more</li>
           <li>💰 Compare prices, ratings, and content at a glance</li>
           <li>🛒 Add preferred courses to a shopping cart for easy tracking and purchase</li>
           <li>🔍 Filter and sort results based on instructor, platform, price, and course length</li>
         </ul>
 
         <p className="mt-6">
           Whether you're a beginner looking to start a new skill or a professional upgrading your knowledge, <strong>CourseMatch</strong> makes finding the right course simple, efficient, and personalized.
         </p>
       </div>
     </div>
   );
 };
 
 export default About;
 