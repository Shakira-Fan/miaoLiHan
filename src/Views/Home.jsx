import { Nav } from "../Components/Nav"

const Home = () => {
  return (
    <main className="max-container relative">
      <Nav />
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <span className="text-gradient-color md:text-8xl font-mantousans text-[52px] leading-none lg:mr-10">台灣的明天</span>
          <span className="text-gradient-color md:text-8xl font-mantousans text-[52px] leading-none">喵先鋪路</span>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row lg:mt-8 mt-4">
          <div className="bg-text-primary min-w-[189px] rounded-xl">
            <div className="text-white text-xl md:text-3xl md:px-4 py-3 text-center font-bold">2024立委參選人</div>
          </div>
          <div className="ml-4 flex justify-center items-center max-sm:mt-2">
            <div className="bg-gradient-color rounded-full md:w-[50px] md:h-[50px] w-[39.83px] h-[39.83px] mr-4">
              <div className="text-white text-[25.5px] md:text-[32px] text-center font-black">3</div>
            </div>
            <div>
              <span className="text-primary-theme-one font-bold text-[28px] md:text-[40px]">喵立翰 Miao Li-Han</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 max-sm:mt-8">
          <img src="/home-person-img.png" alt="" />
        </div>
        <div className=" bg-primary-theme-one">
          <div className="flex justify-around animate-[scroll_40s_linear_infinite] md:w-[4000px] w-[2800px]">
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">為喵星人，護台灣！</div>
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">從喵的眼中，看見台灣</div>
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">喵的未來，人的希望</div>
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">為喵星人，護台灣！</div>
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">從喵的眼中，看見台灣</div>
            <div className="text-white md:text-[64px] text-[40px] font-mantousans mr-1">喵的未來，人的希望</div>
          </div>
        </div>
      </section>
      <section className="bg-bg-color-theme-second">
        <div className="flex justify-center  max-lg:flex-col max-lg:items-center py-[100px] md:w-7/8 mx-8">
          <div className="bg-white flex flex-col items-center rounded-l-2xl lg:w-1/2">
            <div className="bg-text-primary w-[114px] rounded-xl mt-12 mb-2">
              <div className="text-white md:px-4 py-3 text-center font-bold">ADVOCATE</div>
            </div>
            <div className="mb-5">
              <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">候選人主張</span>
            </div>
            <div className="text-text-primary text-2xl md:text-[28px] w-3/4 mb-5 font-bold">
              <span>我堅信 ! 藉由推動更完善的<span className="text-primary-theme-one">貓咪福利</span>和相關政策，更是間接地投資於<span className="text-primary-theme-one">台灣的未來</span>。</span>
            </div>
            <div className="text-text-primary text-base md:text-lg w-3/4 max-sm:mb-8">
              <span>
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
              </span>
            </div>
          </div>
          <div>
            <img src="/advocate.png" alt="advocate" className="rounded-r-2xl"/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home