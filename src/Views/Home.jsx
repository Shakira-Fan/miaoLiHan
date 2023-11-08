import { Card } from "../Components/Card"
import { Nav } from "../Components/Nav"

const Home = () => {
  const newsList = [
    { 
      id:1,
      date: "2023/12/24",
      title:"掃街模式開啟！帶著你的貓耳，來和我一起走！",
      content:"街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
      imgUrl:"/secondNews.png",
    },
    { 
      id:2,
      date: "2023/12/25",
      title:"收容所模特兒大比拼！",
      content:"今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
      imgUrl:"/thridNews.png",
    },
    { 
      id:3,
      date: "2023/12/26",
      title:"參與台北寵物論壇，爭取貓咪友善環境",
      content:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
      imgUrl:"/fourthNews.png",
    }
  ]

  const policyIssuesList = [
    {
      id:1,
      content:"為毛孩子謀福利！",
      content2:"推動寵物醫療保障方案",
      imgUrl:"/policy-medical.png",
    },
    {
      id:2,
      content:"打造休閒天堂！",
      content2:"推廣寵物休閒與娛樂場所",
      imgUrl:"/policy-playground.png",
    },
    {
      id:3,
      content:"推廣寵物飼養教育，讓愛更加專業",
      content2:'',
      imgUrl:"/policy-education.png",
    }
  ]

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
      <section className="bg-bg-color-theme-second" id="advocate">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center py-[50px] md:py-[100px] md:w-7/8 mx-4 md:mx-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-white flex flex-col items-center rounded-t-2xl xl:rounded-l-2xl">
              <div className="bg-text-primary w-[114px] rounded-xl mt-12 mb-2">
                <div className="text-white md:px-4 py-3 text-center font-bold">ADVOCATE</div>
              </div>
              <div className="mb-5">
                <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">候選人主張</span>
              </div>
              <div className="text-text-primary text-2xl md:text-[28px] w-5/6 md:w-3/4 mb-5 font-bold">
                <span>我堅信 ! 藉由推動更完善的<span className="text-primary-theme-one">貓咪福利</span>和相關政策，更是間接地投資於<span className="text-primary-theme-one">台灣的未來</span>。</span>
              </div>
              <div className="text-text-primary text-base md:text-lg w-5/6 md:w-3/4 mb-8 md:mb-6">
                <span>
                  畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                </span>
              </div>
            </div>
            <div>
              <img src="/advocate.png" alt="advocate" className=" rounded-b-2xl xl:rounded-r-2xl w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <section id="latestEvents" className=" py-12 md:py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[154px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">LATEST EVENTS</div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">最新活動</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 md:mx-16 mx-4">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src="/firstNews.png" />
            </div>
            <div className="mt-5">
              <span className="text-text-secondary text-sm">2023/12/26</span>
              <h1 className="text-text-primary text-xl font-bold">參與台北寵物論壇，爭取貓咪友善環境</h1>
              <div className="text-text-primary lg:w-5/6 w-full mb-8">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</div>
            </div>
          </div>
          <div className="flex flex-col">
            {newsList.map(item=>(
              <Card 
                key={item.id} 
                date={item.date}
                title={item.title}
                content={item.content}
                imgUrl={item.imgUrl}
              />))}
            <button type="button" className="bg-bg-color-theme-one w-[152px] py-4 rounded-3xl flex justify-center">
              <span className="text-text-primary font-semibold">查看更多</span>
              <img src="/arrow_forward.png" alt="arrow" className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section id="policyIssues" className=" bg-bg-color-theme-one flex flex-col items-center justify-center py-2 md:py-[50px]">
      <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[146px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">POLICY ISSUES</div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">政策議題</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-8">
          {policyIssuesList.map(item => (
            <div key={item.id} className="mx-3 my-4 cursor-pointer">
              <div className="h-[72px]">
                <div className="text-text-primary text-2xl font-bold">{item.content}</div>
                <div className="text-text-primary text-2xl font-bold">{item.content2}</div>
              </div>
              <div>
                <img src={item.imgUrl} alt="policy" />
              </div>
              </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home