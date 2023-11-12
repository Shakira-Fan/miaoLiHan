import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SocialMedia } from "./socialMedia";

export default function NewsDialog({
  isOpen,
  closeModal,
  date,
  title,
  content,
  imgUrl,
  id,
}) {
  const socialMedia = [
    { href: "#facebook", img: "images/fb-icon.png", alt: "Facebook" },
    { href: "#instargram", img: "images/ig-icon.png", alt: "Instagram" },
    { href: "#line", img: "images/line-icon.png", alt: "Line" },
    { href: "#twitter", img: "images/twitter-icon.png", alt: "Twitter" },
  ];

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

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[1400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between items-center mb-2"
                  >
                    <div className="text-text-primary text-[32px] font-bold max-sm:text-2xl">
                      最新活動
                    </div>
                    <div className="cursor-pointer" onClick={closeModal}>
                      <img
                        src="./images/cancel.png"
                        alt="cancel"
                        className="max-sm:w-[24px]"
                      />
                    </div>
                  </Dialog.Title>
                  <div className="flex justify-center max-md:flex-col">
                    <div>
                      <div>
                        <img src={imgUrl} alt="news" className="w-[507px]" />
                      </div>
                      <div>
                        <span className="text-text-primary text-sm">
                          {title}
                        </span>
                        <div className="flex items-center mt-1">
                          <span className="text-text-primary mr-3">分享</span>
                          <SocialMedia socialMedia={socialMedia} />
                        </div>
                      </div>
                    </div>
                    <div className="mx-4 max-sm:mx-0">
                      <div>
                        <div className="text-primary-theme-one text-[32px] max-sm:text-[24px] font-bold">
                          {title}
                        </div>
                        <span className="text-text-secondary text-sm">
                          {date}
                        </span>
                        <div className="text-text-primary mt-8">{content}</div>
                      </div>
                      <div className="bg-gray-100 mt-12 p-4 rounded-xl">
                        <div className="text-text-primary font-semibold mb-2">
                          更多活動
                        </div>
                        <div className="flex justify-around">
                          {newsList
                            .filter((news) => news.id !== id)
                            .map((others) => (
                              <div key={others.id} className="mx-2">
                                <div>
                                  <img
                                    src={others.imgUrl}
                                    alt="news"
                                    className="w-[244px] h-[134px] object-cover rounded-2xl"
                                  />
                                </div>
                                <div>{others.title}</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
