import { useState } from "react";
import { BottomNav } from "../Components/BottomNav";
import { Card } from "../Components/Card";
import Footer from "../Components/Footer";
import { Nav } from "../Components/Nav";
import { PolicyCard } from "../Components/PolicyCard";
import { SocialMedia } from "../Components/socialMedia";
import { AiOutlineArrowRight } from "react-icons/ai";
import { DonateDialog } from "../Components/DonateDialog";
import { FormDialog } from "../Components/FormDialog";

const Home = () => {
  const newsList = [
    {
      id: 1,
      date: "2023/12/24",
      title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
      content:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
      imgUrl: "images/thridNews.svg",
    },
    {
      id: 2,
      date: "2023/12/25",
      title: "收容所模特兒大比拼！",
      content:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
      imgUrl: "images/secondNews.svg",
    },
    {
      id: 3,
      date: "2023/12/26",
      title: "參與台北寵物論壇，爭取貓咪友善環境",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！",
      imgUrl: "images/firstNews.svg",
    },
  ];

  const policyIssuesList = [
    {
      id: 1,
      title: "為毛孩子謀福利！推動寵物醫療保障方案",
      content: [
        {
          title: "設立寵物醫療基金",
          content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
        },
        {
          title: "提供醫療補助",
          content:
            "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
        },
        {
          title: "合作動物醫院",
          content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
        },
      ],
      imgUrl: "images/policy-medical.png",
    },
    {
      id: 2,
      title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
      content: [
        {
          title: "設立寵物醫療基金",
          content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
        },
        {
          title: "提供醫療補助",
          content:
            "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
        },
        {
          title: "合作動物醫院",
          content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
        },
      ],
      imgUrl: "images/policy-playground.png",
    },
    {
      id: 3,
      title: "推廣寵物飼養教育，讓愛更加專業",
      content: [
        {
          title: "設立寵物醫療基金",
          content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
        },
        {
          title: "提供醫療補助",
          content:
            "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力",
        },
        {
          title: "合作動物醫院",
          content: "目前已有和超過 200 家動物醫院進行初步的合作討論",
        },
      ],
      imgUrl: "images/policy-education.png",
    },
  ];

  const socialMedia = [
    { href: "#facebook", img: "images/fb-icon.png", alt: "Facebook" },
    { href: "#instargram", img: "images/ig-icon.png", alt: "Instagram" },
    { href: "#youtube", img: "images/yt-icon.png", alt: "Youtube" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [emailIsOpen, setEmailIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeEmail() {
    setEmailIsOpen(false);
  }

  function openEmail() {
    setEmailIsOpen(true);
  }

  return (
    <main className="max-container relative">
      <Nav />
      <section>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-28">
          <span className="text-gradient-color md:text-8xl font-mantousans text-[52px] leading-none lg:mr-10">
            台灣的明天
          </span>
          <span className="text-gradient-color md:text-8xl font-mantousans text-[52px] leading-none">
            喵先鋪路
          </span>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row lg:mt-8 mt-4">
          <div className="bg-text-primary min-w-[189px] rounded-xl">
            <div className="text-white text-xl md:text-3xl md:px-4 py-3 text-center font-bold">
              2024立委參選人
            </div>
          </div>
          <div className="ml-4 flex justify-center items-center max-sm:mt-2">
            <div className="bg-gradient-color rounded-full md:w-[50px] md:h-[50px] w-[39.83px] h-[39.83px] mr-4">
              <div className="text-white text-[25.5px] md:text-[32px] text-center font-black">
                3
              </div>
            </div>
            <div>
              <span className="text-primary-theme-one font-bold text-[28px] md:text-[40px]">
                喵立翰 Miao Li-Han
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 max-sm:mt-8 relative">
          <img src="images/home-person-img.png" alt="personImg" />
          <div className="absolute top-[228px] bg-white w-[208px] py-2 rounded-xl flex justify-center sm:hidden">
            <SocialMedia socialMedia={socialMedia} />
          </div>
        </div>
        <div className="marquee-container  bg-primary-theme-one">
          <div className="marquee-content text-white md:text-[64px] text-[40px] font-mantousans mx-8">
            <span>為喵星人，護台灣！</span>
            <span className="mx-6">從喵的眼中，看見台灣</span>
            <span>喵的未來，人的希望</span>
          </div>
          <div className="marquee-content2 text-white md:text-[64px] text-[40px] font-mantousans">
            <span>為喵星人，護台灣！</span>
            <span className="mx-6">從喵的眼中，看見台灣</span>
            <span>喵的未來，人的希望</span>
          </div>
        </div>
      </section>
      <section className="bg-bg-color-theme-second" id="advocate">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center py-[50px] md:py-[100px] md:w-7/8 mx-4 md:mx-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-white flex flex-col items-center rounded-t-2xl xl:rounded-l-2xl">
              <div className="bg-text-primary w-[114px] rounded-xl mt-12 mb-2">
                <div className="text-white md:px-4 py-3 text-center font-bold">
                  ADVOCATE
                </div>
              </div>
              <div className="mb-5">
                <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
                  候選人主張
                </span>
              </div>
              <div className="text-text-primary text-2xl md:text-[28px] w-5/6 md:w-3/4 mb-5 font-bold">
                <span>
                  我堅信 ! 藉由推動更完善的
                  <span className="text-primary-theme-one">貓咪福利</span>
                  和相關政策，更是間接地投資於
                  <span className="text-primary-theme-one">台灣的未來</span>。
                </span>
              </div>
              <div className="text-text-primary text-base md:text-lg w-5/6 md:w-3/4 mb-8 md:mb-6">
                <span>
                  畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                  GDP
                  經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
                </span>
              </div>
            </div>
            <div>
              <img
                src="images/advocate.png"
                alt="advocate"
                className=" rounded-b-2xl xl:rounded-r-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="latestEvents" className=" py-12 md:py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[154px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">
              LATEST EVENTS
            </div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
              最新活動
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 md:mx-16 mx-4">
          <div className="flex flex-col justify-center items-center">
            <div>
              <img src="images/firstNews.png" />
            </div>
            <div className="mt-5">
              <span className="text-text-secondary text-sm">2023/12/26</span>
              <h1 className="text-text-primary text-xl font-bold">
                參與台北寵物論壇，爭取貓咪友善環境
              </h1>
              <div className="text-text-primary lg:w-5/6 w-full mb-8">
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                VIP 休憩空間。
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {newsList.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                date={item.date}
                title={item.title}
                content={item.content}
                imgUrl={item.imgUrl}
              />
            ))}
            <button
              type="button"
              className="bg-bg-color-theme-one w-[152px] py-4 rounded-3xl flex justify-center items-center hover:bg-primary-theme-one text-text-primary font-semibold hover:text-white"
            >
              查看更多
              <AiOutlineArrowRight className="ml-1 text-2xl" />
            </button>
          </div>
        </div>
      </section>
      <section
        id="policyIssues"
        className=" bg-bg-color-theme-one flex flex-col items-center justify-center py-2 md:py-[50px]"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="bg-text-primary w-[146px] rounded-xl mt-12 mb-2">
            <div className="text-white md:px-2 py-3 text-center font-bold">
              POLICY ISSUES
            </div>
          </div>
          <div className="mb-5">
            <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px]">
              政策議題
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-8 mx-4">
          {policyIssuesList.map((item) => (
            <PolicyCard
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </section>
      <section
        id="donate"
        className=" bg-bg-color-theme-one flex justify-center items-center max-sm:flex-col md:py-3 py-2"
      >
        <div className="bg-primary-theme-one p-6 rounded-[32px] md:w-[648px] lg:h-[593px] h-[352px] w-[343px] flex justify-center items-center m-4 md:ml-10">
          <div>
            <div className="text-[40px] lg:text-[52px] font-mantousans text-white">
              小額支持喵喵
            </div>
            <div className="font-semibold text-xl text-white">
              您的小筆捐款，是每隻毛孩未來的大大動力！
            </div>
            <div className="grid grid-cols-2 gap-x-8 items-center mt-4">
              <button
                type="button"
                className="bg-bg-color-theme-one w-[152px] py-4 rounded-3xl flex justify-center items-center text-text-primary font-semibold hover:text-primary-theme-one"
                onClick={openModal}
              >
                小額捐款
                <AiOutlineArrowRight className="ml-1 text-2xl" />
              </button>
              <img src="images/donate.png" alt="donate" />
            </div>
          </div>
          <DonateDialog isOpen={isOpen} closeModal={closeModal} />
        </div>
        <div
          className="bg-text-primary p-6 md:w-[648px] lg:h-[593px] h-[352px] w-[343px] rounded-[32px] flex justify-center items-center m-4 md:mr-10"
          id="email"
        >
          <div>
            <div className="text-[40px] lg:text-[52px] font-mantousans text-white">
              民眾服務信箱
            </div>
            <div className="font-semibold text-xl text-white">
              親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
            </div>
            <div className="grid grid-cols-2 gap-x-8 items-center mt-4">
              <button
                type="button"
                className="bg-bg-color-theme-one w-[152px] py-4 rounded-3xl flex justify-center items-center text-text-primary font-semibold hover:text-primary-theme-one"
                onClick={openEmail}
              >
                填寫表單
                <AiOutlineArrowRight className="ml-1 text-2xl" />
              </button>
              <img src="images/email-icon.png" alt="email" />
            </div>
          </div>
          <FormDialog isOpen={emailIsOpen} closeModal={closeEmail} />
        </div>
      </section>
      <section
        id="slogan"
        className="bg-bg-color-theme-one md:pt-[160px] pb-[60px] pt-[100px]"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px] leading-none lg:mr-10">
            台灣的明天
          </span>
          <span className="text-gradient-color md:text-[64px] font-mantousans text-[52px] leading-none">
            喵先鋪路
          </span>
        </div>
        <div className="flex justify-center items-center flex-col sm:flex-row lg:mt-8 mt-2">
          <div className="flex justify-center items-center max-sm:mt-2">
            <div className="bg-gradient-color rounded-full md:w-[50px] md:h-[50px] w-[39.83px] h-[39.83px] mr-4">
              <div className="text-white text-[25.5px] md:text-[32px] text-center font-black">
                3
              </div>
            </div>
            <div>
              <span className="text-primary-theme-one font-bold text-[28px] md:text-[40px]">
                喵立翰 Miao Li-Han
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg-color-theme-second max-lg:mb-12">
        <Footer />
      </section>
      <BottomNav />
    </main>
  );
};

export default Home;
