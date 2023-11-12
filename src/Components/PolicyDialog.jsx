import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SocialMedia } from "./socialMedia";

export default function PolicyDialog({
  isOpen,
  closeModal,
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
                      政策議題
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
                        <img
                          src={imgUrl}
                          alt="news"
                          className="w-[507px] object-contain"
                        />
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
                        <div className="text-text-primary mt-8">
                          {content.map((item) => (
                            <div
                              key={`${item.id}${item.title}`}
                              className="my-4"
                            >
                              <div className="text-[20px] text-text-primary font-bold my-1">
                                {item.title}
                              </div>
                              <div className="text-lg max-sm:text-base text-text-primary">
                                {item.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-100 mt-12 p-4 rounded-xl">
                        <div className="text-text-primary font-semibold mb-2">
                          更多政策議題
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                          {policyIssuesList
                            .filter((news) => news.id !== id)
                            .map((others) => (
                              <div key={others.id}>
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
