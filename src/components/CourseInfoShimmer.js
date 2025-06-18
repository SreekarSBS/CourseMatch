const shimmerBox = "bg-gray-700 animate-pulse rounded";

const CourseInfoShimmer = () => {
  return (
    <div className="border h-[450px] bg-black flex justify-evenly ml-[-45px]">
      {/* Left Content */}
      <div className="2xl:ml-[100px] xl:ml-[200px] w-[840px] h-96">
        <div className={`${shimmerBox} h-12 w-[80%] m-6 p-6`} />
        <div className={`${shimmerBox} h-6 w-[60%] ml-12 mb-4`} />

        <div className="flex">
          <div className={`${shimmerBox} w-48 h-10 ml-16 mt-6`} />
          <div className={`${shimmerBox} w-48 h-10 ml-4 mt-6`} />
        </div>

        <div className={`${shimmerBox} h-6 w-[300px] ml-12 my-4`} />

        <div className="flex justify-around w-[700px] h-28 ml-14 bg-white border rounded-2xl">
          <div className="text-center pt-6">
            <div className={`${shimmerBox} h-8 w-20 mb-2 mx-auto`} />
            <div className={`${shimmerBox} h-4 w-16 mx-auto`} />
          </div>
          <div className="text-center pt-6">
            <div className={`${shimmerBox} h-8 w-20 mb-2 mx-auto`} />
            <div className={`${shimmerBox} h-4 w-24 mx-auto`} />
          </div>
          <div className="text-center pt-6">
            <div className={`${shimmerBox} h-8 w-20 mb-2 mx-auto`} />
            <div className={`${shimmerBox} h-4 w-20 mx-auto`} />
          </div>
        </div>

        <div className="mt-20 flex justify-between items-center">
          <div className={`${shimmerBox} h-8 w-[250px]`} />
          <div className={`${shimmerBox} h-6 w-[120px] mr-[80px]`} />
        </div>

        <div className="w-[940px] mt-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${shimmerBox} h-16 w-full mb-2 rounded-lg`}
            />
          ))}
          <div
            className={`${shimmerBox} h-14 w-full mt-4 rounded-lg`}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="mt-11 w-96 h-[720px] border border-amber-500 p-4">
        <div className={`${shimmerBox} h-52 w-full mb-4`} />
        <div className={`${shimmerBox} h-12 w-[80%] m-auto mb-4`} />

        <div className="flex text-white mt-4 mb-6">
          <div className={`${shimmerBox} w-1/2 h-20`} />
          <div className={`${shimmerBox} w-1/2 h-20 ml-2`} />
        </div>

        <div className={`${shimmerBox} h-40 w-full mt-6`} />
      </div>
    </div>
  );
};

export default CourseInfoShimmer;
