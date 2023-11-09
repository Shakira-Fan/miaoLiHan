export default function Footer() {
    return (
        <footer className="grid lg:grid-cols-2 grid-cols-1 items-center sm:p-12 p-8">
            <div className="py-8">
                <div className="flex">
                    <div className="bg-gradient-color rounded-full w-[39.83px] h-[39.83px] mr-4">
                        <div className="text-white text-[25.5px] text-center font-black">3</div>
                    </div>
                    <div>
                        <span className="text-primary-theme-one font-bold text-[28px]">喵立翰 Miao Li-Han</span>
                    </div>
                </div>
                <div className="flex my-3">
                    <img src="images/footer-fb.png" alt="facebook" className="cursor-pointer"/>
                    <img src="images/footer-ig.png" alt="facebook"  className="mx-2 cursor-pointer"/>
                    <img src="images/footer-yt.png" alt="facebook" className="cursor-pointer"/>
                </div>
                <div className="text-text-primary text-sm">
                    © 2023 喵立翰 Miao Li-Han 版權所有
                </div>
            </div>
            <div>
                <div className="text-text-primary text-2xl font-bold mb-6">競選總部</div>
                <div className="text-text-primary">
                    <div>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
                    <div>電話：(02) 888-5678</div>
                    <div>電子郵件地址：meowoffice@linmeow.tw</div>
                </div>
            </div>
        </footer>
    )
}
