
const SubExplore = ({category}) => {
    return   <div className="  bg-gray-100 border rounded-lg  pt-4  w-96  left-full top-0 absolute">
    {
        category?.sublist?.items?.map((item) => {
         return   <div key = {item.id} className="  mx-2 p-2">
            <div className="">{item.sd_tag.title}</div>
            </div>
        })
  }
    
</div>
}

export default SubExplore

