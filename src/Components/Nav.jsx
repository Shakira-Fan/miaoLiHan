export const Nav = () => {
    const navLinks = [
        { href: "#home", label: "候選人主張" },
        { href: "#about-us", label: "最新活動" },
        { href: "#products", label: "政策議題" },
        { href: "#contact-us", label: "小額捐款" },
        { href: "#contact-us", label: "民眾服務信箱" },
    ];
    const socialMedia = [
        { href: "#facebook", img: "/fb-icon.png",alt: "Facebook"},
        { href: "#instargram", img: "/ig-icon.png",alt: "Instagram"},
        { href: "#youtube", img: "/yt-icon.png",alt: "Youtube"},
    ];
    return (
        <header className="relative py-8">
            <nav className="flex justify-between items-center">
                <a href="/">
                    <img src="/title-icon.png" alt="" />
                </a>
                <ul className="flex gap-[10px]">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-text-primary text-lg">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="flex gap-[10px]">
                    {socialMedia.map((item) => (
                        <li key={item.label}>
                            <img src={item.img} alt={item.alt}/>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}
