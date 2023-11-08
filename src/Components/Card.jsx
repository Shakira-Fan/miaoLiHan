export const Card = ({ date, title, content, imgUrl }) => {
    return (
        <div className="grid grid-cols-3  gap-x-2 md:gap-x-0 mb-4 cursor-pointer">
            <div>
                <img src={imgUrl} alt="news" className="h-full object-cover rounded-2xl"/>
            </div>
            <div className="col-span-2">
                <span className="text-text-secondary text-sm">{date}</span>
                <h1 className="text-text-primary font-bold">{title}</h1>
                <div className="text-text-primary">{content}</div>
            </div>
        </div>
    )
}
