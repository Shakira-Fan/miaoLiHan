export default function Button({id, title, headcount, price, isSelected, handleSelectButton}) {
    
    return (
        <div className={`flex justify-between max-sm:flex-col border-[3px] py-6 px-4 rounded-2xl my-4 ${isSelected ? " border-primary-theme-one" :"border-gray-200"}`} onClick={()=>{
            handleSelectButton(id)
        }}>
            <div className=" text-primary-theme-one font-bold text-[20px]">{title}</div>
            <div className="flex justify-between items-center">
                <div className="text-text-primary">NT$ <span className="text-2xl font-bold">{price}</span></div>
                <div className="ml-4 text-text-secondary">已有{headcount}人贊助</div>
            </div>
        </div>
    )
}
