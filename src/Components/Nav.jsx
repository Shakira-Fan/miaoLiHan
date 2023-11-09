import { SocialMedia } from "./socialMedia";

export const Nav = () => {
    const navLinks = [
        { href: "#advocate", label: "候選人主張" },
        { href: "#latestEvents", label: "最新活動" },
        { href: "#policyIssues", label: "政策議題" },
        { href: "#donate", label: "小額捐款" },
        { href: "#email", label: "服務信箱" },
    ];
    
    return (
        <header className="py-4 px-5 mx-4 overflow-hidden fixed top-0 rounded-xl w-full 2xl:w-[1410px] bg-white/90 z-10" >
            <nav className="flex justify-between items-center">
                <a href="/">
                    <img src="./title-icon.png" alt="" />
                </a>
                <ul className="flex gap-[10px] max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="text-text-primary text-lg hover:text-primary-theme-one hover:font-semibold">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="max-sm:hidden">
                <SocialMedia/>
                </div>
            </nav>
        </header>
    )
}
