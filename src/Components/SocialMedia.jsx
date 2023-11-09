export const SocialMedia = () => {
    const socialMedia = [
        { href: "#facebook", img: "images/fb-icon.png",alt: "Facebook"},
        { href: "#instargram", img: "images/ig-icon.png",alt: "Instagram"},
        { href: "#youtube", img: "images/yt-icon.png",alt: "Youtube"},
    ];
  return (
    <ul className="flex gap-[10px]">
                    {socialMedia.map((item) => (
                        <li key={item.alt} className="cursor-pointer">
                            <img src={item.img} alt={item.alt}/>
                        </li>
                    ))}
                </ul>
  )
}
