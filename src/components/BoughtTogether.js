import useBoughtTogether from "../utils/useBoughtTogether";

const BoughtTogether = ({id}) => {
    const FBTogether = useBoughtTogether(id)
    
    
 return (
    <div className="border mt-16 h-96 w-[1000px]">
        <div className="text-4xl  font-bold text-gray-500">Frequently Bought Together</div>
        <div className="m-4 p-4">
        {FBTogether?.map((item) => {
            return( 
                <div className="text-2xl h-48" key = {item.id}>{item.title}</div>
                    )
            })}
            </div>
    </div>
 )
}

export default BoughtTogether;